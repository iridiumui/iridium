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
            timingFunction: {
                type: String,
                default: 'ease'
            }
        },

        computed: {
            hooks() {
                return {
                    beforeEnter: this.setDuration,
                    afterEnter: this.cleanUpDuration,
                    beforeLeave: this.setDuration,
                    afterLeave: this.cleanUpDuration,
                    ...this.$listeners
                };
            }
        },

        methods: {
            setDuration(el) {
                el.style.transitionDuration = `${this.duration}ms`
                el.style.transitionTimingFunction = this.timingFunction
            },
            cleanUpDuration(el) {
                el.style.transitionDuration = ''
                el.style.transitionTimingFunction = ''
            }
        }
    }
</script>
