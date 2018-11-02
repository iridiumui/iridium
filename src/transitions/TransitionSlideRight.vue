<template>
    <transition-base 
        name="slide-right" 
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
    .slide-right-enter, .slide-right-leave-to {
        transform: translateX(-100%);
    }
</style>
