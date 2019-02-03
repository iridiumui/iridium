<script>
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
            };
        },

        methods: {
            toggle() {
                this.open = !this.open;
            }
        },

        render(createElement) {
            const props = {
                open: this.open,
                toggle: this.toggle
            };

            /* eslint-disable */
            return this.$scopedSlots.hasOwnProperty("default") ?
                this.$scopedSlots.default(props) :
                createElement("div", [
                    this.$scopedSlots.button(props),
                    this.$scopedSlots.content(props)
                ]);
            /* eslint-enable */
        }
    };
</script>
