<script>
    export default {
        data() {
            return  {
                accepted: false
            }
        },

        render() {
            return this.$scopedSlots.default()
        }
    }
</script>
