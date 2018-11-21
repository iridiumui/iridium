<script>
    export default {
        data() {
            return  {
                get accepted() {
                    return (localStorage.getItem('cookies_accepted') == 'true')
                },
                set accepted(value) {
                    localStorage.setItem('cookies_accepted', value)
                }
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
