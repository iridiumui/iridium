<template>
    <transition-base 
        name="slide-left" 
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
    .slide-left-enter, .slide-left-leave-to {
        transform: translateX(100%);
    }
</style>
