<template>
    <transition-base
        name="iridium-slide-left"
        v-bind="$attrs">
        <slot/>
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
    .iridium-slide-left-enter, .iridium-slide-left-leave-to {
        transform: translateX(100%);
    }
</style>
