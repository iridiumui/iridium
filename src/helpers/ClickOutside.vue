<script>
    export default {

        mounted() {
            document.addEventListener('click', (e) => {
                    this.$emit('clickoutside')
            })
        },

        render() {
            return this.$slots.default[0]
        }
    }
</script>
