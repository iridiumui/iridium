<template>
    <fixed :edges="['top']">
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
