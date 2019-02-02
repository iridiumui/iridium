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

        render(createElement) {
            const props = {
                open: this.open,
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
