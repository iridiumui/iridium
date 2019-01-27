<script>
    export default {
        props: {
            active: {
                type: Boolean,
                default: true
            }
        },

        mounted() {
            this.clickListener = (e) => {
                if (this.active) {
                    this.emitEvents(e.target);
                }
            };

            document.addEventListener("click", this.clickListener);
        },

        beforeDestroy() {
            document.removeEventListener("click", this.clickListener);
        },

        methods: {
            emitEvents(target) {
                if (this.$el.contains(target) || this.$el === target) {
                    this.$emit("clickinside");
                } else {
                    this.$emit("clickoutside");
                }
            }
        },

        render() {
            return this.$slots.default[0];
        }
    };
</script>
