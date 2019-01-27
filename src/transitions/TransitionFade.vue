<template>
    <transition-base
        name="iridium-fade"
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
    .iridium-fade-enter, .iridium-fade-leave-to {
        opacity: 0;
    }
</style>
