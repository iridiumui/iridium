<template>
    <div>
        <slot name="content" :open="open"></slot>
        <slot name="toggle" :open="open" :open-modal="openModal"></slot>
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
            openModal() {
                this.open = true
            },
        }
    }
</script>
