<script>
    export default {
        methods: {
            scroll() {
                window.scrollTo({
                    top: 0,
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
