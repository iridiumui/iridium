<script>
    export default {
        render(createElement) {
            /* eslint-disable */
            return this.$scopedSlots.hasOwnProperty("default") ?
                this.$scopedSlots.default() :
                createElement("div", [
                    this.$scopedSlots.button(),
                    this.$scopedSlots.content()
                ]);
            /* eslint-enable */
        }
    };
</script>
