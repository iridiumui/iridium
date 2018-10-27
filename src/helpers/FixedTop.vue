<template>
    <fixed edge="top">
        <slot/>
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
