import { storiesOf } from '@storybook/vue'
import { withKnobs, text } from '@storybook/addon-knobs'
import Fixed from '../../helpers/Fixed'

const defaultStyles = {
    backgroundColor: '#FF5F7A',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
}

const horizontalBox = Object.assign({
    width: '100%',
    height: '200px'
}, defaultStyles)

const verticalBox = Object.assign({
    height: '100%',
    width: '200px'
}, defaultStyles)

const box = Object.assign({
    height: '200px',
    width: '200px'
}, defaultStyles)

export default storiesOf('Helpers|Fixed', module)
    .addDecorator(withKnobs)
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
            },
            text: {
                type: String,
                default: text('Text', 'This is fixed on the top of the page')
            }
        },
        template: `
            <Fixed :edges="edges">
                <aside :style="styles">
                    {{ text }}
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
            },
            text: {
                type: String,
                default: text('Text', 'This is fixed on the bottom of the page')
            }
        },
        template: `
            <Fixed :edges="edges">
                <aside :style="styles">
                    {{ text }}
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
            },
            text: {
                type: String,
                default: text('Text', 'This is fixed on the left of the page')
            }
        },
        template: `
            <Fixed :edges="edges">
                <aside :style="styles">
                    {{ text }}
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
            },
            text: {
                type: String,
                default: text('Text', 'This is fixed on the right of the page')
            }
        },
        template: `
            <Fixed :edges="edges">
                <aside :style="styles">
                    {{ text }}
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
    }))
