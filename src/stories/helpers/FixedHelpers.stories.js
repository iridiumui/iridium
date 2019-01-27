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

const defaultStyles = {
    backgroundColor: "#FF5F7A",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"
};

const horizontalBox = Object.assign({
    width: "100%",
    height: "200px"
}, defaultStyles);

const verticalBox = Object.assign({
    height: "100%",
    width: "200px"
}, defaultStyles);

const box = Object.assign({
    height: "200px",
    width: "200px"
}, defaultStyles);

export default storiesOf("Helpers|Fixed/Helpers", module)
    .addDecorator(withKnobs)
    .add("Fixed Top", () => ({
        components: { FixedTop },
        props: {
            styles: {
                type: Object,
                default: horizontalBox
            },
            text: {
                type: String,
                default: text("Text", "This is fixed on the top of the page")
            }
        },
        template: `
            <FixedTop>
                <aside :style="styles">
                    {{ text }}
                </aside>
            </FixedTop>
        `
    }))
    .add("Fixed Bottom", () => ({
        components: { FixedBottom },
        props: {
            styles: {
                type: Object,
                default: horizontalBox
            },
            text: {
                type: String,
                default: text("Text", "This is fixed on the bottom of the page")
            }
        },
        template: `
            <FixedBottom>
                <aside :style="styles">
                    {{ text }}
                </aside>
            </FixedBottom>
        `
    }))
    .add("Fixed Left", () => ({
        components: { FixedLeft },
        props: {
            styles: {
                type: Object,
                default: verticalBox
            },
            text: {
                type: String,
                default: text("Text", "This is fixed on the left of the page")
            }
        },
        template: `
            <FixedLeft>
                <aside :style="styles">
                    {{ text }}
                </aside>
            </FixedLeft>
        `
    }))
    .add("Fixed Right", () => ({
        components: { FixedRight },
        props: {
            styles: {
                type: Object,
                default: verticalBox
            },
            text: {
                type: String,
                default: text("Text", "This is fixed on the right of the page")
            }
        },
        template: `
            <FixedRight>
                <aside :style="styles">
                    {{ text }}
                </aside>
            </FixedRight>
        `
    }))
    .add("Fixed Top Left", () => ({
        components: { FixedTopLeft },
        props: {
            styles: {
                type: Object,
                default: box
            },
            text: {
                type: String,
                default: text("Text", "This is fixed on the top left of the page")
            }
        },
        template: `
            <FixedTopLeft>
                <aside :style="styles">
                    {{ text }}
                </aside>
            </FixedTopLeft>
        `
    }))
    .add("Fixed Top Right", () => ({
        components: { FixedTopRight },
        props: {
            styles: {
                type: Object,
                default: box
            },
            text: {
                type: String,
                default: text("Text", "This is fixed on the top right of the page")
            }
        },
        template: `
            <FixedTopRight>
                <aside :style="styles">
                    {{ text }}
                </aside>
            </FixedTopRight>
        `
    }))
    .add("Fixed Bottom Left", () => ({
        components: { FixedBottomLeft },
        props: {
            styles: {
                type: Object,
                default: box
            },
            text: {
                type: String,
                default: text("Text", "This is fixed on the bottom left of the page")
            }
        },
        template: `
            <FixedBottomLeft>
                <aside :style="styles">
                    {{ text }}
                </aside>
            </FixedBottomLeft>
        `
    }))
    .add("Fixed Bottom Right", () => ({
        components: { FixedBottomRight },
        props: {
            styles: {
                type: Object,
                default: box
            },
            text: {
                type: String,
                default: text("Text", "This is fixed on the bottom right of the page")
            }
        },
        template: `
            <FixedBottomRight>
                <aside :style="styles">
                    {{ text }}
                </aside>
            </FixedBottomRight>
        `
    }));
