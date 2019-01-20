import { storiesOf } from "@storybook/vue";
import Fixed from "../../helpers/Fixed";

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

export default storiesOf('Fixed', module)
    .add('It attaches on the top', () => ({
        components: { Fixed },
        props: {
            styles: {
                type: Object,
                default: horizontalBox
            },
            edges: {
                type: Array,
                default: ['top']
            }
        },
        template: `
            <Fixed :edges="edges">
                <aside :style="styles">
                    <p>This is fixed on the top of the page</p>
                </aside>
            </Fixed>
        `
    }))
    .add('It attaches on the bottom', () => ({
        components: { Fixed },
        props: {
            styles: {
                type: Object,
                default: horizontalBox
            },
            edges: {
                type: Array,
                default: ['bottom']
            }
        },
        template: `
            <Fixed :edges="edges">
                <aside :style="styles">
                    <p>This is fixed on the bottom of the page</p>
                </aside>
            </Fixed>
        `
    }))
    .add('It attaches on the left', () => ({
        components: { Fixed },
        props: {
            styles: {
                type: Object,
                default: verticalBox
            },
            edges: {
                type: Array,
                default: ['left']
            }
        },
        template: `
            <Fixed :edges="edges">
                <aside :style="styles">
                    <p>This is fixed on the left of the page</p>
                </aside>
            </Fixed>
        `
    }))
    .add('It attaches on the right', () => ({
        components: { Fixed },
        props: {
            styles: {
                type: Object,
                default: verticalBox
            },
            edges: {
                type: Array,
                default: ['right']
            }
        },
        template: `
            <Fixed :edges="edges">
                <aside :style="styles">
                    <p>This is fixed on the right of the page</p>
                </aside>
            </Fixed>
        `
    }))
    .add('It attaches to multiple sides', () => ({
        components: { Fixed },
        props: {
            styles: {
                type: Object,
                default: box
            },
            edges: {
                type: Array,
                default: ['bottom', 'right']
            }
        },
        template: `
            <Fixed :edges="edges">
                <aside :style="styles">
                    <p>This is fixed on the bottom right of the page</p>
                </aside>
            </Fixed>
        `
    }));
