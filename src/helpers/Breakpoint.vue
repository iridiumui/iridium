<script>
    export default {
        props: {
            mediaQuery: {
                type: String,
                required: true
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
            return this.matches ? this.$slots.default[0] : null
        }
    }
</script>
