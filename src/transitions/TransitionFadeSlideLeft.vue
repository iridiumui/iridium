<template>
    <transition-base
        name="iridium-fade-slide-left"
        v-bind="$attrs">
        <slot/>
    </transition-base>
</template>

<script>
    import TransitionBase from "@/transitions/TransitionBase";

    export default {
        components: {
            TransitionBase
        }
    };
</script>

<style>
    .iridium-fade-slide-left-enter, .iridium-fade-slide-left-leave-to {
        transform: translateX(100%);
        opacity: 0;
    }
</style>
