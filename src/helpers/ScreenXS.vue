<template>
    <breakpoint :media-query="query">
        <slot></slot>
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
                default: 'down'
            }
        },

        computed: {
            query() {
                return this.direction === 'up' ? '(min-width: 0px)' : '(max-width: 575.98px)'
            }
        }
    }
</script>
