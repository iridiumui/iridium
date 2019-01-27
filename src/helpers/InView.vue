<script>
    export default {
        props: {
            element: {
                type: String,
                default: null
            },
            threshold: {
                type: Number,
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
            this.target = document.querySelector(this.element) || this.$el

            this.setupObserver()
        },

        beforeDestroy() {
            this.destroyObserver()
        },

        methods: {
            setupObserver() {
                this.destroyObserver()
                this.observer = new IntersectionObserver((entries) => {
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

            $route() {
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
