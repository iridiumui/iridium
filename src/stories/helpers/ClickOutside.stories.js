import { storiesOf } from '@storybook/vue'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import centered from '@storybook/addon-centered'
import ClickOutside from '../../helpers/ClickOutside'

const defaultStyles = {
    width: '200px',
    height: '200px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF5F7A'
}

export default storiesOf('Helpers|Click Outside', module)
    .addDecorator(withKnobs)
    .addDecorator(centered)
    .add('Click outside event', () => ({
        components: { ClickOutside },
        props: {
            text: {
                type: String,
                default: text('Text', 'Try clicking outside the box')
            },
            successText: {
                type: String,
                default: text('Success Text', 'It is working')
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
                <ClickOutside @clickoutside="clicked = true">
                    <div :style="styles">
                        {{ text }}
                    </div>
                </ClickOutside>
                <h2 v-if="clicked">
                    {{ successText }}
                </h2>
            </div>
        `
    }))
    .add('Click inside event', () => ({
        components: { ClickOutside },
        props: {
            text: {
                type: String,
                default: text('Text', 'Try clicking inside the box')
            },
            successText: {
                type: String,
                default: text('Success Text', 'It is working')
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
                <ClickOutside @clickinside="clicked = true">
                    <div :style="styles">
                        <span v-if="!clicked">{{ text }}</span>
                        <span v-else>{{ successText }}</span>
                    </div>
                </ClickOutside>
            </div>
        `
    }))
    .add('Deactivated', () => ({
        components: { ClickOutside },
        props: {
            text: {
                type: String,
                default: text('Text', 'Nothing should happen if you click in the box')
            },
            failureText: {
                type: String,
                default: text('Failure Text', 'It is not working')
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
                <ClickOutside :active="active" @clickinside="clicked = true">
                    <div :style="styles">
                        <span v-if="!clicked" style="text-align: center;">
                            {{ text }}
                        </span>
                        <span v-else>{{ failureText }}</span>
                    </div>
                </ClickOutside>
            </div>
        `
    }))
