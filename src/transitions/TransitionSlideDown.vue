<template>
    <transition-base 
        name="slide-down" 
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
    .slide-down-enter, .slide-down-leave-to {
        transform: translateY(-100%);
    }
</style>
