<template>
    <fixed :edges="['bottom']">
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
