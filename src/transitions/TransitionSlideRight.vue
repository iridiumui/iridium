<template>
    <transition-base
        name="iridium-slide-right"
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
    .iridium-slide-right-enter, .iridium-slide-right-leave-to {
        transform: translateX(-100%);
    }
</style>
