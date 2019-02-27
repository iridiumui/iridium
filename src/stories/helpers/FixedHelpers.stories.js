import { storiesOf } from "@storybook/vue";
import { withKnobs, text } from "@storybook/addon-knobs";

import FixedTop from "@/components/helpers/FixedTop";
import FixedTopLeft from "@/components/helpers/FixedTopLeft";
import FixedTopRight from "@/components/helpers/FixedTopRight";

import FixedBottom from "@/components/helpers/FixedBottom";
import FixedBottomLeft from "@/components/helpers/FixedBottomLeft";
import FixedBottomRight from "@/components/helpers/FixedBottomRight";

import FixedLeft from "@/components/helpers/FixedLeft";
import FixedRight from "@/components/helpers/FixedRight";

export default storiesOf("Helpers|Fixed/Helpers", module)
    .addDecorator(withKnobs)
    .add("Fixed Top", () => ({
        components: { FixedTop },
        props: {
            text: {
                type: String,
                default: text("Text", "This is fixed on the top of the page")
            }
        },
        template: `
            <FixedTop>
                <aside class="w-full bg-pink text-white flex items-center justify-center py-12">
                    {{ text }}
                </aside>
            </FixedTop>
        `
    }))
    .add("Fixed Bottom", () => ({
        components: { FixedBottom },
        props: {
            text: {
                type: String,
                default: text("Text", "This is fixed on the bottom of the page")
            }
        },
        template: `
            <FixedBottom>
                <aside class="w-full bg-pink text-white flex items-center justify-center py-12">
                    {{ text }}
                </aside>
            </FixedBottom>
        `
    }))
    .add("Fixed Left", () => ({
        components: { FixedLeft },
        props: {
            text: {
                type: String,
                default: text("Text", "This is fixed on the left of the page")
            }
        },
        template: `
            <FixedLeft>
                <aside class="h-full bg-pink text-white flex items-center justify-center px-8">
                    {{ text }}
                </aside>
            </FixedLeft>
        `
    }))
    .add("Fixed Right", () => ({
        components: { FixedRight },
        props: {
            text: {
                type: String,
                default: text("Text", "This is fixed on the right of the page")
            }
        },
        template: `
            <FixedRight>
                <aside class="h-full bg-pink text-white flex items-center justify-center px-8">
                    {{ text }}
                </aside>
            </FixedRight>
        `
    }))
    .add("Fixed Top Left", () => ({
        components: { FixedTopLeft },
        props: {
            text: {
                type: String,
                default: text("Text", "This is fixed on the top left of the page")
            }
        },
        template: `
            <FixedTopLeft>
                <aside class="w-64 h-64 bg-pink text-white flex items-center justify-center text-center">
                    {{ text }}
                </aside>
            </FixedTopLeft>
        `
    }))
    .add("Fixed Top Right", () => ({
        components: { FixedTopRight },
        props: {
            text: {
                type: String,
                default: text("Text", "This is fixed on the top right of the page")
            }
        },
        template: `
            <FixedTopRight>
                <aside class="w-64 h-64 bg-pink text-white flex items-center justify-center text-center">
                    {{ text }}
                </aside>
            </FixedTopRight>
        `
    }))
    .add("Fixed Bottom Left", () => ({
        components: { FixedBottomLeft },
        props: {
            text: {
                type: String,
                default: text("Text", "This is fixed on the bottom left of the page")
            }
        },
        template: `
            <FixedBottomLeft>
                <aside class="w-64 h-64 bg-pink text-white flex items-center justify-center text-center">
                    {{ text }}
                </aside>
            </FixedBottomLeft>
        `
    }))
    .add("Fixed Bottom Right", () => ({
        components: { FixedBottomRight },
        props: {
            text: {
                type: String,
                default: text("Text", "This is fixed on the bottom right of the page")
            }
        },
        template: `
            <FixedBottomRight>
                <aside class="w-64 h-64 bg-pink text-white flex items-center justify-center text-center">
                    {{ text }}
                </aside>
            </FixedBottomRight>
        `
    }));
