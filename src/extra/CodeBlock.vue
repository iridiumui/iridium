<script>
    export default {

        data() {
            return {
                copied: false,
                error: false
            }
        },

        methods: {
            copy() {
                const selection = window.getSelection()
                const range = document.createRange()

                range.selectNodeContents(this.$el.querySelector('pre code'))
                selection.removeAllRanges()
                selection.addRange(range)

                try {
                    document.execCommand('copy')
                    selection.removeAllRanges()

                    this.copied = true

                        setTimeout(() => {
                            this.copied = false
                        }, 2000)
                } catch (error) {

                    this.error = true

                        setTimeout(() => {
                            this.error = false
                        }, 2000)
                }
            }
        },

        render(createElement) {
            return createElement('div', [
                this.$slots.content[0],
                this.$scopedSlots.button({
                    copy: this.copy,
                })
            ])
        }
    }
</script>
