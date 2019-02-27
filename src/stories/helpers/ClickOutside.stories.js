import { storiesOf } from "@storybook/vue";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import centered from "@storybook/addon-centered";
import ClickOutside from "@/components/helpers/ClickOutside";

export default storiesOf("Helpers|Click Outside", module)
    .addDecorator(withKnobs)
    .addDecorator(centered)
    .add("Click outside event", () => ({
        components: { ClickOutside },
        props: {
            text: {
                type: String,
                default: text("Text", "Try clicking outside the box")
            },
            successText: {
                type: String,
                default: text("Success Text", "It is working")
            }
        },
        data() {
            return {
                clicked: false
            };
        },
        template: `
            <div>
                <ClickOutside @clickoutside="clicked = true">
                    <div class="w-64 h-64 bg-pink flex justify-center items-center text-white">
                        {{ text }}
                    </div>
                </ClickOutside>
                <h2 v-if="clicked" class="text-center">
                    {{ successText }}
                </h2>
            </div>
        `
    }))
    .add("Click inside event", () => ({
        components: { ClickOutside },
        props: {
            text: {
                type: String,
                default: text("Text", "Try clicking inside the box")
            },
            successText: {
                type: String,
                default: text("Success Text", "It is working")
            }
        },
        data() {
            return {
                clicked: false
            };
        },
        template: `
            <div>
                <ClickOutside @clickinside="clicked = true">
                    <div <div class="w-64 h-64 bg-pink flex justify-center items-center text-white">
                        <span v-if="!clicked">{{ text }}</span>
                        <span v-else>{{ successText }}</span>
                    </div>
                </ClickOutside>
            </div>
        `
    }))
    .add("Deactivated", () => ({
        components: { ClickOutside },
        props: {
            text: {
                type: String,
                default: text("Text", "Nothing should happen if you click in the box")
            },
            failureText: {
                type: String,
                default: text("Failure Text", "It is not working")
            },
            active: {
                type: Boolean,
                default: boolean("Active", false)
            }
        },
        data() {
            return {
                clicked: false
            };
        },
        template: `
            <div>
                <ClickOutside :active="active" @clickinside="clicked = true">
                    <div class="w-64 h-64 bg-pink flex justify-center items-center text-white">
                        <span v-if="!clicked" class="text-center leading-normal">
                            {{ text }}
                        </span>
                        <span v-else>{{ failureText }}</span>
                    </div>
                </ClickOutside>
            </div>
        `
    }));
