<script>
    import FocusTrap from '../helpers/FocusTrap.vue'

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
                createElement(FocusTrap, { props: { active: false } }, [
                    this.$scopedSlots.content(props)
                ])
            ])
        }
    }
</script>
