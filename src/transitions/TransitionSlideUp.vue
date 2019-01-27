<template>
    <transition-base
        name="iridium-slide-up"
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
    .iridium-slide-up-enter, .iridium-slide-up-leave-to {
        transform: translateY(100%);
    }
</style>
