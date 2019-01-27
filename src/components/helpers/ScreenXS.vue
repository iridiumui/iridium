<template>
    <breakpoint :media-query="query">
        <slot/>
    </breakpoint>
</template>

<script>
    import Breakpoint from "@/components/helpers/Breakpoint";

    export default {
        components: {
            Breakpoint
        },

        computed: {
            query() {
                return "(max-width: 575.98px)";
            }
        }
    };
</script>
