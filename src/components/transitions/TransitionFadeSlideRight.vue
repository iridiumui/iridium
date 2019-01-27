<template>
    <transition-base
        name="iridium-fade-slide-right"
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
    .iridium-fade-slide-right-enter, .iridium-fade-slide-right-leave-to {
        transform: translateX(-100%);
        opacity: 0;
    }
</style>
