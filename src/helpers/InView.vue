<script>
    export default {
        props: {
            element: {
                type: String
            },
            threshold: {
                type: [Number, Array],
                default: 0
            }
        },

        data() {
            return {
                inView: false,
                observer: null
            }
        },

        mounted() {
            this.setupObserver()
        },

        beforeDestroy() {
            this.destroyObserver()
        },

        computed: {
            target() {
                return document.querySelector(this.element) || this.$el
            },
        },

        methods: {
            setupObserver() {
                this.destroyObserver()
                this.observer = new IntersectionObserver((entries, observer) => {
                    entries.forEach(entry => {
                        this.inView = entry.isIntersecting
                    })
                }, {
                    threshold: this.threshold
                })

                this.observer.observe(this.target)
            },

            destroyObserver() {
                if (!this.observer) return
                this.observer.disconnect()
                this.observer = null
            }
        },

        watch: {
            inView(newValue) {
                this.$emit('inView', newValue)
            },

            $route(to, from) {
                this.setupObserver()
            }
        },

        render() {
            return this.$scopedSlots.hasOwnProperty('default') ? this.$scopedSlots.default({
                inView: this.inView
            }) : this.$slots.default[0]
        }
    }
</script>
