<script>
    import createFocusTrap from 'focus-trap'

    export default {
        props: {
            active: {
                type: Boolean,
                required: true
            },

        },

        mounted() {
            this.focusTrap = createFocusTrap(this.$el, this.options)

            if (this.active) {
                this.activateLock()
            } else {
                this.deactivateLock()
            }

        },

        methods: {
            activateLock() {
                this.focusTrap.activate()
            },

            deactivateLock() {
                this.focusTrap.deactivate()
            }
        },

        watch: {
            active(active) {
                if (active) {
                    this.activateLock()
                } else {
                    this.deactivateLock()
                }
            }
        },

        render() {
            return this.$slots.default[0]
        }
    }
</script>
