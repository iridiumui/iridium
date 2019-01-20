import Vue from "vue";
import { storiesOf } from "@storybook/vue";

import FixedTop from "../../helpers/FixedTop";
import FixedTopLeft from "../../helpers/FixedTopLeft";
import FixedTopRight from "../../helpers/FixedTopRight";

import FixedBottom from "../../helpers/FixedBottom";
import FixedBottomLeft from "../../helpers/FixedBottomLeft";
import FixedBottomRight from "../../helpers/FixedBottomRight";

import FixedLeft from "../../helpers/FixedLeft";
import FixedRight from "../../helpers/FixedRight";

const defaultStyles = {
    backgroundColor: "#FF5F7A",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
};

const horizontalBox = Object.assign({
    width: "100%",
    height: "200px"
}, defaultStyles)

const verticalBox = Object.assign({
    height: "100%",
    width: "200px"
}, defaultStyles)

const box = Object.assign({
    height: "200px",
    width: "200px"
}, defaultStyles)

export default storiesOf('Fixed/Helpers', module)
    .add('Fixed Top', () => ({
        components: { FixedTop },
        props: {
            styles: {
                type: Object,
                default: horizontalBox
            }
        },
        template: `
            <FixedTop>
                <aside :style="styles">
                    <p>This is fixed on the top of the page</p>
                </aside>
            </FixedTop>
        `
    }))
    .add('Fixed Bottom', () => ({
        components: { FixedBottom },
        props: {
            styles: {
                type: Object,
                default: horizontalBox
            }
        },
        template: `
            <FixedBottom>
                <aside :style="styles">
                    <p>This is fixed on the bottom of the page</p>
                </aside>
            </FixedBottom>
        `
    }))
    .add('Fixed Left', () => ({
        components: { FixedLeft },
        props: {
            styles: {
                type: Object,
                default: verticalBox
            }
        },
        template: `
            <FixedLeft>
                <aside :style="styles">
                    <p>This is fixed on the left of the page</p>
                </aside>
            </FixedLeft>
        `
    }))
    .add('Fixed Right', () => ({
        components: { FixedRight },
        props: {
            styles: {
                type: Object,
                default: verticalBox
            }
        },
        template: `
            <FixedRight>
                <aside :style="styles">
                    <p>This is fixed on the right of the page</p>
                </aside>
            </FixedRight>
        `
    }))
    .add('Fixed Top Left', () => ({
        components: { FixedTopLeft },
        props: {
            styles: {
                type: Object,
                default: box
            }
        },
        template: `
            <FixedTopLeft>
                <aside :style="styles">
                    <p>This is fixed on the top left of the page</p>
                </aside>
            </FixedTopLeft>
        `
    }))
    .add('Fixed Top Right', () => ({
        components: { FixedTopRight },
        props: {
            styles: {
                type: Object,
                default: box
            }
        },
        template: `
            <FixedTopRight>
                <aside :style="styles">
                    <p>This is fixed on the top right of the page</p>
                </aside>
            </FixedTopRight>
        `
    }))
    .add('Fixed Bottom Left', () => ({
        components: { FixedBottomLeft },
        props: {
            styles: {
                type: Object,
                default: box
            }
        },
        template: `
            <FixedBottomLeft>
                <aside :style="styles">
                    <p>This is fixed on the bottom left of the page</p>
                </aside>
            </FixedBottomLeft>
        `
    }))
    .add('Fixed Bottom Right', () => ({
        components: { FixedBottomRight },
        props: {
            styles: {
                type: Object,
                default: box
            }
        },
        template: `
            <FixedBottomRight>
                <aside :style="styles">
                    <p>This is fixed on the bottom right of the page</p>
                </aside>
            </FixedBottomRight>
        `
    }))
