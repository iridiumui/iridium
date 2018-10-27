<template>
    <fixed edge="right">
        <slot></slot>
    </fixed>
</template>

<script>
    import Fixed from './Fixed.vue'

    export default {
        components: {
            Fixed
        }
    }
</script>
