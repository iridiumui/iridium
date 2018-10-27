<script>
    export default {
        props: {
            mediaQuery: {
                type: String,
                required: true
            }
        },

        computed: {
            matches() {
                return window.matchMedia(this.mediaQuery).matches
            }
        },

        render() {
            if (!this.matches) return null
            return this.$slots.default[0]
        }
    }
</script>
