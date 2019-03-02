<script>
    export default {
        props: {
            successCallback: {
                type: Function,
                default: function(resetCopied) {
                    setTimeout(() => {
                        resetCopied();
                    }, 2000);
                }
            },

            errorCallback: {
                type: Function,
                default: function(resetError) {
                    setTimeout(() => {
                        resetError();
                    }, 2000);
                }
            },
        },

        data() {
            return {
                copied: false,
                error: false
            };
        },

        methods: {
            copy() {
                const selection = window.getSelection();
                const range = document.createRange();

                range.selectNodeContents(this.$el.querySelector("pre code"));
                selection.removeAllRanges();
                selection.addRange(range);

                try {
                    document.execCommand("copy");
                    selection.removeAllRanges();

                    this.copied = true;
                    this.error = false;
                } catch (error) {
                    this.copied = false;
                    this.error = true;
                }
            }
        },

        watch: {
            copied(newValue) {
                if (!newValue) return;

                this.successCallback(() => { this.copied = false; });
            },

            error(newValue) {
                if (!newValue) return;

                this.errorCallback(() => { this.error = false; });
            }
        },

        render(createElement) {
            return createElement("div", [
                this.$scopedSlots.content(),
                this.$scopedSlots.button({
                    copy: this.copy,
                    copied: this.copied,
                    error: this.error
                })
            ]);
        }
    };
</script>
