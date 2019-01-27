<template>
    <fixed :edges="['bottom', 'left']">
        <slot/>
    </fixed>
</template>

<script>
    import Fixed from "./Fixed.vue";

    export default {
        components: {
            Fixed
        }
    };
</script>
