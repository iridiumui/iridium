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

        props: {
            direction: {
                type: String,
                default: 'up'
            }
        },

        computed: {
            query() {
                return this.direction === 'up' ? '(min-width: 768px)' : '(max-width: 991.98px)'
            }
        }
    }
</script>
