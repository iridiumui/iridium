<script>

    let style = {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: '1px',
        width: '1px',
        margin: '-1px',
        padding: 0,
        overflow: 'hidden',
        position: 'absolute'
    }

    export default {
        mounted() {
            this.$el.setAttribute('style', this.convertObjectToCSS(style))
        },

        beforeDestroy() {
            this.$el.setAttribute('style', '')
        },

        methods: {
            convertObjectToCSS(styleObject) {
                return Object.entries(styleObject).reduce((styleString, [propName, propValue]) => {
                    return `${styleString}${propName}:${propValue};`
                }, '')
            }
        },

        render() {
            return this.$slots.default[0]
        }
    }
</script>
