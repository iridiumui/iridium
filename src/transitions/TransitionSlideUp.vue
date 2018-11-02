<template>
    <transition-base 
        name="slide-up" 
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
    .slide-up-enter, .slide-up-leave-to {
        transform: translateY(100%);
    }
</style>
