<template>
    <transition-base
        name="iridium-fade-slide-up"
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
    .iridium-fade-slide-up-enter, .iridium-fade-slide-up-leave-to {
        transform: translateY(100%);
        opacity: 0;
    }
</style>
