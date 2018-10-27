<script>
    export default {
        props: {
            edge: {
                type: String,
                default: 'top'
            }
        },

        mounted() {
            this.$el.style.position = 'fixed'
            this.$el.style[this.edge] = '0'
        },

        beforeDestroy() {
            this.$el.style.position = null
            this.$el.style[this.edge] = null
        },

        render() {
            return this.$slots.default[0]
        }
    }
</script>
