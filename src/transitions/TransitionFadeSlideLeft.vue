<template>
    <transition-base 
        name="fade-slide-left" 
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
    .fade-slide-left-enter, .fade-slide-left-leave-to {
        transform: translateX(100%);
        opacity: 0;
    }
</style>
