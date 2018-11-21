<script>
    export default {
        data() {
            return  {
                /* eslint-disable vue/no-dupe-keys */
                get accepted() {
                    return (localStorage.getItem('cookies_accepted') == 'true')
                },
                set accepted(value) {
                    localStorage.setItem('cookies_accepted', value)
                }
                /* eslint-enable vue/no-dupe-keys */
            }
        },

        methods: {
            accept() {
                this.accepted = true
            }
        },

        render() {
            return this.$scopedSlots.default({
                accept: this.accept,
                accepted: this.accepted
            })
        }
    }
</script>
