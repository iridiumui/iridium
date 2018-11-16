<script>
    export default {
        mounted() {
            this.clickListener = (e) => {
                if (this.$el !== e.target) {
                    this.$emit('clickoutside')
                }
            }

            document.addEventListener('click', this.clickListener)
        },

        beforeDestroy() {
            document.removeEventListener('click', this.clickListener)
        },

        render() {
            return this.$slots.default[0]
        }
    }
</script>
