<template>
    <transition-base 
        name="fade-slide-right" 
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
    .fade-slide-right-enter, .fade-slide-right-leave-to {
        transform: translateX(-100%);
        opacity: 0;
    }
</style>
