<script>
    export default {
        render(createElement) {
            return createElement("div", [
                this.$scopedSlots.button(),
                this.$scopedSlots.content()
            ]);
        }
    };
</script>
