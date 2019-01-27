<template>
    <transition-base
        name="iridium-slide-down"
        v-bind="$attrs">
        <slot/>
    </transition-base>
</template>

<script>
    import TransitionBase from "@/components/transitions/TransitionBase";

    export default {
        components: {
            TransitionBase
        }
    };
</script>

<style>
    .iridium-slide-down-enter, .iridium-slide-down-leave-to {
        transform: translateY(-100%);
    }
</style>
