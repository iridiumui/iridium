<script>
    import createFocusTrap from "focus-trap";

    export default {
        props: {
            active: {
                type: Boolean,
                required: true
            },

            options: {
                type: Object,
                default: () => {
                    return {};
                }
            }
        },

        mounted() {
            this.focusTrap = createFocusTrap(this.$el, this.options);

            if (this.active) {
                this.activateLock();
            } else {
                this.deactivateLock();
            }
        },

        methods: {
            activateLock() {
                this.$nextTick(() => {
                    this.focusTrap.activate();
                });
            },

            deactivateLock() {
                this.$nextTick(() => {
                    this.focusTrap.deactivate();
                });
            }
        },

        watch: {
            active(active) {
                if (active) {
                    this.activateLock();
                } else {
                    this.deactivateLock();
                }
            }
        },

        render() {
            return this.$scopedSlots.default();
        }
    };
</script>
