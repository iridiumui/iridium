<script>
    export default {
        render() {
            return this.$slots.default[0]
            return this.$scopedSlots.hasOwnProperty('default') ? this.$scopedSlots.default({
            }) : this.$slots.default[0]
        }
    }
</script>
