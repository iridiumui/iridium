<template>
    <fixed :edges="['right']">
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
