<template>
    <div>
        <slot name="toggle"></slot>
        <slot name="content" :open="open"></slot>
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
