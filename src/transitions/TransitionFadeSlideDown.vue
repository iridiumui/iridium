<template>
    <transition-base
        name="iridium-fade-slide-down"
        v-bind="$attrs">
        <slot/>
    </transition-base>
</template>

<script>
    import TransitionBase from "./TransitionBase.vue";

    export default {
        components: {
            TransitionBase
        }
    };
</script>

<style>
    .iridium-fade-slide-down-enter, .iridium-fade-slide-down-leave-to {
        transform: translateY(-100%);
        opacity: 0;
    }
</style>
