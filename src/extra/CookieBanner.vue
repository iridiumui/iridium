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

            }
        },

        render() {
            return this.$scopedSlots.default({
                accepted: this.accepted
            })
        }
    }
</script>
