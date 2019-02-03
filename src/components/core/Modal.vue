<template>
    <toggle>
        <div slot-scope="toggleProps">
            <slot
                name="button"
                :open="toggleProps.open"
                :toggle="toggle(toggleProps)" />

            <portal
                v-if="usePortal"
                :to="portalName">
                <focus-trap
                    :active="toggleProps.open"
                    :options="{ onDeactivate: returnFocus }">
                    <slot
                        name="content"
                        :open="toggleProps.open"
                        :toggle="toggle(toggleProps)" />
                </focus-trap>
            </portal>
            <focus-trap
                v-else
                :active="toggleProps.open"
                :options="{ onDeactivate: returnFocus }">
                <slot
                    name="content"
                    :open="toggleProps.open"
                    :toggle="toggle(toggleProps)" />
            </focus-trap>

        </div>
    </toggle>
</template>

<script>
    import FocusTrap from "@/components/accessibility/FocusTrap";
    import Toggle from "@/components/helpers/Toggle";

    export default {
        components: {
            FocusTrap,
            Toggle
        },

        props: {
            usePortal: {
                type: Boolean,
                default: true
            },

            portalName: {
                type: String,
                default: "modal"
            }
        },

        data() {
            return {
                initialBodyOverflowValue: "",
                returnFocusTo: null
            };
        },

        mounted() {
            const body = document.querySelector("body");

            this.initialBodyOverflowValue = body.style.overflow || getComputedStyle(body).getPropertyValue("overflow");
        },

        methods: {
            toggle(toggleProps) {
                return () => {
                    if (toggleProps.open) {
                        this.returnFocusTo = document.activeElement;
                    }

                    document.removeEventListener("keyup", this.escapeListener);

                    this.toggleBodyScrolling();

                    toggleProps.toggle();
                };
            },

            escapeListener(e) {
                if (e.keyCode === 27) {
                    this.closeModal();
                }
            },

            toggleBodyScrolling() {
                document.querySelector("body").style.overflow = this.open ? "hidden" : this.initialBodyOverflowValue;
            },

            returnFocus() {
                this.$nextTick(() => {
                    setTimeout(() => {
                        this.returnFocusTo.focus();
                        this.returnFocusTo = null;
                    }, 0);
                });
            }
        }
    };
</script>
