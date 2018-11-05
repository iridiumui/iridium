<script>
    export default {
        mounted() {
            document.addEventListener('click', (e) => {
                if (this.$el !== e.target) {
                    this.$emit('clickoutside')
                }
            })
        },

        render() {
            return this.$slots.default[0]
        }
    }
</script>
