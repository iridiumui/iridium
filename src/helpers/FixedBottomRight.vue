<template>
    <fixed :edges="['bottom', 'right']">
        <slot/>
    </fixed>
</template>

<script>
    import Fixed from "@/helpers/Fixed";

    export default {
        components: {
            Fixed
        }
    };
</script>
