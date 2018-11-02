<script>
    export default {
        props: {
            element: {
                type: String
            },
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
                }, {
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
