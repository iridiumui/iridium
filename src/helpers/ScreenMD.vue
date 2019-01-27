<template>
    <breakpoint :media-query="query">
        <slot/>
    </breakpoint>
</template>

<script>
    import Breakpoint from "@/helpers/Breakpoint";

    export default {
        components: {
            Breakpoint
        },

        props: {
            direction: {
                type: String,
                default: "up",
                validator: function (value) {
                    return ["up", "down"].indexOf(value) !== -1;
                }
            }
        },

        computed: {
            query() {
                return this.direction === "up" ? "(min-width: 768px)" : "(max-width: 991.98px)";
            }
        }
    };
</script>
