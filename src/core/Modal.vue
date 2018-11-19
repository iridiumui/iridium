<template>
    <div>
        <slot name="toggle" :open="open" :open-modal="openModal"></slot>
        <slot name="content" :open="open" :close-modal="closeModal"></slot>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                open: false,
                initialBodyOverflowValue: '',
            }
        },

        mounted() {
            const body = document.querySelector('body')

            this.initialBodyOverflowValue = body.style.overflow || getComputedStyle(body).getPropertyValue('overflow')
        },

        methods: {
            closeModal() {
                this.open = false

                this.toggleBodyScrolling()
            },

            openModal() {
                this.open = true

                this.toggleBodyScrolling()
            },
            toggleBodyScrolling() {
                document.querySelector('body').style.overflow = this.open ? 'hidden' : this.initialBodyOverflowValue
            },
        }
    }
</script>
