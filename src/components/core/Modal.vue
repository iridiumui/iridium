<template>
    <toggle v-bind="$attrs">
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
    import Toggle from "@/components/core/Toggle";

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
                    this.escapeListener = event => {
                        if (event.keyCode === 27) {
                            toggleProps.toggle();
                            document.removeEventListener("keyup", this.escapeListener);
                        }
                    };

                    if (!toggleProps.open) {
                        this.returnFocusTo = document.activeElement;
                        document.addEventListener("keyup", this.escapeListener);
                    }

                    this.toggleBodyScrolling(toggleProps.open);

                    toggleProps.toggle();
                };
            },

            toggleBodyScrolling(open) {
                document.querySelector("body").style.overflow = open ? "hidden" : this.initialBodyOverflowValue;
            },

            returnFocus() {
                this.$nextTick(() => {
                    setTimeout(() => {
                        if (this.returnFocusTo) {
                            this.returnFocusTo.focus();
                            this.returnFocusTo = null;
                        }
                    }, 0);
                });
            }
        }
    };
</script>
