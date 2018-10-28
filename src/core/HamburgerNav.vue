<script>
    export default {
        render(createElement) {
            return this.$scopedSlots.hasOwnProperty('default') ? this.$scopedSlots.default() : createElement('div', [
                    this.$scopedSlots.toggle(),
                    this.$scopedSlots.content()
                ])
        }
    }
</script>
