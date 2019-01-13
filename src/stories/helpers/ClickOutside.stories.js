import Vue from 'vue'
import { storiesOf, addDecorator } from '@storybook/vue'
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered';
import ClickOutside from '../../helpers/ClickOutside'

Vue.component('click-outside', ClickOutside)

const defaultStyles = {
    width: '200px',
    height: '200px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF5F7A'
}

export default storiesOf('ClickOutside', module)
    .addDecorator(withKnobs)
    .addDecorator(centered)
    .add('render default slot', () => ({
        components: { ClickOutside },
        props: {
            text: {
                type: String,
                default: text('Text', 'This is the default slot')
            },
            styles: {
                type: Object,
                default: function () {
                    return defaultStyles
                }
            }
        },
        template: `
            <click-outside>
                <div :style="styles">
                    {{ text }}
                </div>
            </click-outside>
        `
    }))
    .add('emit event when clicking outside', () => ({
        components: { ClickOutside },
        props: {
            text: {
                type: String,
                default: text('Text', 'Try clicking outside the box')
            },
            successText: {
                type: String,
                default: text('Success Text', "It is working")
            },
            styles: {
                type: Object,
                default: function () {
                    return defaultStyles
                }
            }
        },
        data() {
            return {
                clicked: false
            }
        },
        template: `
            <div>
                <click-outside @clickoutside="clicked = true">
                    <div :style="styles">
                        {{ text }}
                    </div>
                </click-outside>
                <h2 v-if="clicked">
                    {{ successText }}
                </h2>
            </div>
        `
    }))
    .add('emit event when clicking inside', () => ({
        components: { ClickOutside },
        props: {
            text: {
                type: String,
                default: text('Text', 'Try clicking inside the box')
            },
            successText: {
                type: String,
                default: text('Success Text', "It is working")
            },
            styles: {
                type: Object,
                default: function () {
                    return defaultStyles
                }
            }
        },
        data() {
            return {
                clicked: false
            }
        },
        template: `
            <div>
                <click-outside @clickinside="clicked = true">
                    <div :style="styles">
                        <span v-if="!clicked">{{ text }}</span>
                        <span v-else>{{ successText }}</span>
                    </div>
                </click-outside>
            </div>
        `
    }))
    .add('deactivated', () => ({
        components: { ClickOutside },
        props: {
            text: {
                type: String,
                default: text('Text', 'Nothing should happen if you click in the box')
            },
            failureText: {
                type: String,
                default: text('Failure Text', "It is not working")
            },
            styles: {
                type: Object,
                default: function () {
                    return defaultStyles
                }
            },
            active: {
                type: Boolean,
                default: boolean('Active', false)
            }
        },
        data() {
            return {
                clicked: false
            }
        },
        template: `
            <div>
                <click-outside :active="active" @clickinside="clicked = true">
                    <div :style="styles">
                        <span v-if="!clicked" style="text-align: center;">
                            {{ text }}
                        </span>
                        <span v-else>{{ failureText }}</span>
                    </div>
                </click-outside>
            </div>
        `
    }))
