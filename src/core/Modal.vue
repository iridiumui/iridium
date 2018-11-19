<template>
    <div>
        <slot name="content" :open="open"></slot>
        <slot name="toggle" :open="open"></slot>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                open: false,
            }
        },
    }
</script>
