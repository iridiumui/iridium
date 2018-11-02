<template>
    <transition-base 
        name="fade-slide-up" 
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
    .fade-slide-up-enter, .fade-slide-up-leave-to {
        transform: translateY(100%);
        opacity: 0;
    }
</style>
