<script>
    export default {
        props: {
            defaultState: {
                type: Boolean,
                default: false
            }
        },

        data() {
            return {
                open: this.defaultState
            }
        },
        render(createElement) {
            const props = {
                open: this.open,
            }

            return this.$scopedSlots.hasOwnProperty('default') ? this.$scopedSlots.default(props) : createElement('div', [
                    this.$scopedSlots.toggle(props),
                    this.$scopedSlots.content(props)
                ])
        }
    }
</script>
