<template>
    <fixed :edges="['bottom', 'left']">
        <slot/>
    </fixed>
</template>

<script>
    import Fixed from "@/components/helpers/Fixed";

    export default {
        components: {
            Fixed
        }
    };
</script>
