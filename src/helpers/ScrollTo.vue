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
            element: String,
            top: Number,
        },

        computed: {
            target() {
                if (!this.element) return null

                return document.querySelector(this.element)
            },

            calculatedTop() {
                if (this.target) {
                    return this.getOffsetTop(this.target)
                }

                return this.top
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
