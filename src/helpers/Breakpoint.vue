<script>
    export default {
        props: {
            mediaQuery: {
                type: String,
                required: false
            }
        },

        data() {
            return {
                matches: false
            }
        },

        mounted() {
            this.mediaQueryList = window.matchMedia(this.mediaQuery)
            this.matches = this.mediaQueryList.matches

            this.mediaQueryList.onchange = (e) => {
                this.matches = e.matches
            }
        },

        render() {
            if (!this.matches) return null
            return this.$slots.default[0]
        }
    }
</script>
