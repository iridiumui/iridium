<template>
    <fixed :edges="['top', 'left']">
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
