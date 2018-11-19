<template>
    <div>
        <slot name="toggle" :open="open" :open-modal="openModal"></slot>

        <portal :to="portalName" v-if="usePortal">
                <slot name="content" :open="open" :close-modal="closeModal"></slot>
        </portal>
            <slot name="content" :open="open" :close-modal="closeModal"></slot>

    </div>
</template>

<script>
    export default {
        props: {
            usePortal: {
                type: Boolean,
                default: true
            },

            portalName: {
                type: String,
                default: 'modalsss'
            }
        },

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

                document.removeEventListener('keyup', this.escapeListener)

                this.toggleBodyScrolling()
            },

            openModal() {
                this.open = true

                document.addEventListener('keyup', this.escapeListener)

                this.toggleBodyScrolling()
            },

            escapeListener(e) {
                if (e.keyCode === 27) {
                    this.closeModal()
                }
            },

            toggleBodyScrolling() {
                document.querySelector('body').style.overflow = this.open ? 'hidden' : this.initialBodyOverflowValue
            },
        }
    }
</script>
