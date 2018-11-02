<template>
    <transition-base name="fade-slide-down" v-bind="$attrs">
        <slot></slot>
    </transition-base>
</template>

<script>
    import TransitionBase from './TransitionBase.vue'

    export default {
        components: {
            TransitionBase
        }
    }
</script>

<style>
    .fade-slide-down-enter, .fade-slide-down-leave-to {
        transform: translateY(-100%);
        opacity: 0;
    }
</style>
