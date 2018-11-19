<template>
    <div>
        <slot
            name="toggle"
            :open="open"
            :open-modal="openModal"/>

        <portal
            :to="portalName"
            v-if="usePortal">
            <focus-trap
                :active="open"
                :options="{ onDeactivate: returnFocus }">
                <slot
                    name="content"
                    :open="open"
                    :close-modal="closeModal"/>
            </focus-trap>
        </portal>
        <focus-trap
            :active="open"
            :options="{ onDeactivate: returnFocus }"
            v-else>
            <slot
                name="content"
                :open="open"
                :close-modal="closeModal"/>
        </focus-trap>

    </div>
</template>

<script>
    import FocusTrap from '../helpers/FocusTrap.vue'

    export default {
        components: {
            FocusTrap
        },

        props: {
            usePortal: {
                type: Boolean,
                default: true
            },

            portalName: {
                type: String,
                default: 'modal'
            }
        },

        data() {
            return {
                open: false,
                initialBodyOverflowValue: '',
                returnFocusTo: null
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
                this.returnFocusTo = document.activeElement

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

            returnFocus() {
                this.$nextTick(() => {
                    setTimeout(() => {
                        this.returnFocusTo.focus()
                        this.returnFocusTo = null
                    }, 0)
                })
            }
        }
    }
</script>
