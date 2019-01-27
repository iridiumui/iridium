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

        computed: {
            query() {
                return "(min-width: 1200px)";
            }
        }
    };
</script>
