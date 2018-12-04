<script>
    export default {
        props: {
            active: {
                type: Boolean,
                default: true
            }
        },

        mounted() {
            this.clickListener = (e) => {
                if (!this.active) return

                if (this.$el.contains(e.target) || this.$el === e.target) {
                    this.$emit('clickinside')
                } else {
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
