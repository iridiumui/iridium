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

        methods: {
            toggle() {
                this.open = !this.open
            }
        },

        render(createElement) {
            const props = {
                open: this.open,
                toggle: this.toggle
            }

            return this.$scopedSlots.hasOwnProperty('default') ? this.$scopedSlots.default(props) : createElement('div', [
                    this.$scopedSlots.toggle(props),
                    this.$scopedSlots.content(props)
                ])
        }
    }
</script>
