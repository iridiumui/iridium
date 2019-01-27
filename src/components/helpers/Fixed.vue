<script>
    export default {
        props: {
            edges: {
                type: Array,
                default: () => {
                    return ["top"];
                }
            }
        },

        mounted() {
            this.$el.style.position = "fixed";

            this.edges.forEach(edge => {
                this.$el.style[edge] = "0";
            });
        },

        beforeDestroy() {
            this.$el.style.position = null;
            this.edges.forEach(edge => {
                this.$el.style[edge] = "0";
            });
        },

        render() {
            return this.$slots.default[0];
        }
    };

</script>
