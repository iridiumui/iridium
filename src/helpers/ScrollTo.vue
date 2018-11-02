<script>
    export default {
        props: {
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
                    behavior: 'smooth'
                    top: this.calculatedTop,
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
