import { storiesOf } from "@storybook/vue";
import { withKnobs, text } from "@storybook/addon-knobs";
import Fixed from "@/components/helpers/Fixed";

export default storiesOf("Helpers|Fixed", module)
    .addDecorator(withKnobs)
    .add("It attaches on the top", () => ({
        components: { Fixed },
        props: {
            edges: {
                type: Array,
                default: ["top"]
            },
            text: {
                type: String,
                default: text("Text", "This is fixed on the top of the page")
            }
        },
        template: `
            <Fixed :edges="edges">
                <aside class="w-full bg-pink text-white text-center py-12">
                    {{ text }}
                </aside>
            </Fixed>
        `
    }))
    .add("It attaches on the bottom", () => ({
        components: { Fixed },
        props: {
            edges: {
                type: Array,
                default: ["bottom"]
            },
            text: {
                type: String,
                default: text("Text", "This is fixed on the bottom of the page")
            }
        },
        template: `
            <Fixed :edges="edges">
                <aside class="w-full bg-pink text-white text-center py-12">
                    {{ text }}
                </aside>
            </Fixed>
        `
    }))
    .add("It attaches on the left", () => ({
        components: { Fixed },
        props: {
            edges: {
                type: Array,
                default: ["left"]
            },
            text: {
                type: String,
                default: text("Text", "This is fixed on the left of the page")
            }
        },
        template: `
            <Fixed :edges="edges">
                <aside class="h-full bg-pink text-white flex items-center justify-center px-8">
                    {{ text }}
                </aside>
            </Fixed>
        `
    }))
    .add("It attaches on the right", () => ({
        components: { Fixed },
        props: {
            edges: {
                type: Array,
                default: ["right"]
            },
            text: {
                type: String,
                default: text("Text", "This is fixed on the right of the page")
            }
        },
        template: `
            <Fixed :edges="edges">
                <aside class="h-full bg-pink text-white flex items-center justify-center px-8">
                    {{ text }}
                </aside>
            </Fixed>
        `
    }))
    .add("It attaches to multiple sides", () => ({
        components: { Fixed },
        props: {
            edges: {
                type: Array,
                default: ["bottom", "right"]
            }
        },
        template: `
            <Fixed :edges="edges">
                <aside class="w-64 h-64 bg-pink text-white flex items-center justify-center text-center">
                    <p>This is fixed on the bottom right of the page</p>
                </aside>
            </Fixed>
        `
    }));
