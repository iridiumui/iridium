<script>
    export default {
        render(createElement) {
            return createElement('div', [
                this.$slots.content[0],
            ])
        }
    }
</script>
