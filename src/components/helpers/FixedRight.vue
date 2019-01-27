<template>
    <fixed :edges="['right']">
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
