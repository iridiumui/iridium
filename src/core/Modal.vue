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
            }
        },
        methods: {
            closeModal() {
                this.open = false
            },

            openModal() {
                this.open = true
            },
        }
    }
</script>
