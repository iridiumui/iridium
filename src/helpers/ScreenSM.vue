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
                default: 'up'
            }
        },

        computed: {
            query() {
                return this.direction === 'up' ? '(min-width: 576px)' : '(max-width: 767.98px)'
            }
        }
    }
</script>
