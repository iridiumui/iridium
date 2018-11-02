<template>
    <transition-base 
        name="fade" 
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
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>
