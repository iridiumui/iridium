<script>
    export default {
        props: {
            top: Number,
        },
        methods: {
            scroll() {
                window.scrollTo({
                    top: this.top,
                    behavior: 'smooth'
                })
            },
        },

        render() {
            return this.$scopedSlots.default({
                scroll: this.scroll
            })
        }
    }
</script>
