<script>
    export default {
        props: {
            successCallback: {
                type: Function,
                required: false
            },

            errorCallback: {
                type: Function,
                required: false
            },
        },

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
                    this.error = false

                } catch (error) {
                    this.copied = false
                    this.error = true
                }
            }
        },

        watch: {
            copied(newValue) {
                if (!newValue) return

                if (this.successCallback) {
                    this.successCallback()
                } else {
                    setTimeout(() => {
                        this.copied = false
                    }, 2000)
                }
            },

            error(newValue) {
                if (!newValue) return

                if (this.errorCallback) {
                    this.errorCallback()
                } else {
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
                    copied: this.copied,
                    error: this.error
                })
            ])
        }
    }
</script>
