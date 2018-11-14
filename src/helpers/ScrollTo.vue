<script>
    export default {
        props: {
            behavior: {
                type: String,
                default: 'smooth',
                validator: function (value) {
                    return ['smooth', 'auto'].indexOf(value) !== -1
                }
            },
            /* eslint-disable-next-line vue/require-default-prop */
            element: String,
            /* eslint-disable-next-line vue/require-default-prop */
            top: Number,
            offset: {
                type: Number,
                default: 0
            },
        },

        computed: {
            target() {
                if (!this.element || !document) return null

                return document.querySelector(this.element)
            },

            calculatedTop() {
                if (this.target) {
                    return this.getOffsetTop(this.target) - this.offset
                }

                return this.top - this.offset
            },
        },

        methods: {
            scroll() {
                window.scrollTo({
                    top: this.calculatedTop,
                    behavior: this.behavior
                })
            },

            getOffsetTop() {
                return window.pageYOffset + this.target.getBoundingClientRect().top
            }
        },

        render() {
            return this.$scopedSlots.default({
                scroll: this.scroll
            })
        }
    }
</script>
