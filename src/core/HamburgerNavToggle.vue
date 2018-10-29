<script>
    export default {
        props: {
            active: {
                type: Boolean,
                required: true
            }
        },

        mounted() {
            this.updateAriaAttribute()
        },

        methods: {
            updateAriaAttribute() {
                this.$el.setAttribute('aria-expanded', this.active ? 'true' : 'false')
            }
        },

        watch: {
            active() {
                this.updateAriaAttribute()
            }
        },

        render() {
            return this.$slots.default[0]
        }
    }
</script>
