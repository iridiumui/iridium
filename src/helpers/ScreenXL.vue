<template>
    <breakpoint :media-query="query">
        <slot/>
    </breakpoint>
</template>

<script>
    import Breakpoint from './Breakpoint.vue'

    export default {
        components: {
            Breakpoint
        },

        computed: {
            query() {
                return '(min-width: 1200px)'
            }
        }
    }
</script>
