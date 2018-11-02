<template>
    <transition :name="name" v-on="hooks" :appear="$attrs.appear" :mode="$attrs.mode">
        <slot></slot>
    </transition>
</template>

<script>
    export default {
        props: {
            name: {
                type: String,
                required: true
            },
            duration: {
                type: Number,
                default: 200
            },
            easing: {
                type: String,
                default: 'ease'
            }
        },

        computed: {
            hooks() {
                return {
                    beforeEnter: this.setUpTransition,
                    afterEnter: this.cleanUpTransition,
                    beforeLeave: this.setUpTransition,
                    afterLeave: this.cleanUpTransition,
                    ...this.$listeners
                };
            }
        },

        methods: {
            setUpTransition(el) {
                el.style.transitionDuration = `${this.duration}ms`
                el.style.transitionTimingFunction = this.easing
            },
            cleanUpTransition(el) {
                el.style.transitionDuration = ''
                el.style.transitionTimingFunction = ''
            }
        }
    }
</script>
