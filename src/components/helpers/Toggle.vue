<script>
    export default {
        data() {
            return {
                open: false
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
