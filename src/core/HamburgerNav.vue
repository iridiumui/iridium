<script>
    import FocusTrap from '../helpers/FocusTrap.vue'

    export const HamburgerNavToggle = {
        props: {
            active: {
                type: Boolean,
                required: true
            }
        },

        mounted() {
            this.updateAriaAttribute()
        },

        methods: {
            updateAriaAttribute() {
                this.$el.setAttribute('aria-expanded', this.active ? 'true' : 'false')
            }
        },

        watch: {
            active() {
                this.updateAriaAttribute()
            }
        },

        render() {
            return this.$slots.default[0]
        }
    }

    export default {
        props: {
            openDefault: {
                type: Boolean,
                default: false
            }
        },

        data() {
            return {
                open: this.openDefault
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
                createElement(HamburgerNavToggle, { props: { active: this.open } }, [
                    this.$scopedSlots.toggle(props)
                ]),
                createElement(FocusTrap, { props: { active: this.open } }, [
                    this.$scopedSlots.content(props)
                ])
            ])
        }
    }
</script>
