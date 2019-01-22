import { storiesOf, addDecorator } from '@storybook/vue'
import { withKnobs, boolean, text, object } from '@storybook/addon-knobs'
import centered from '@storybook/addon-centered'
import FocusTrap from '../../helpers/FocusTrap'

export default storiesOf('Accessibility|Focus Trap', module)
    .addDecorator(withKnobs)
    .addDecorator(centered)
    .add("Trap's focus", () => ({
        components: { FocusTrap },
        props: {
            active: {
                type: Boolean,
                default: boolean('Active', true)
            }
        },
        template: `
            <div>
                <section>
                    <h2>Inside focus trap</h2>
                    <FocusTrap :active="active">
                        <form @submit.prevent="">
                            <input type="email" placeholder="Email">
                            <input type="password" placeholder="Password">
                            <button>Log in</button>
                        </form>
                    </FocusTrap>
                </section>
                <section>
                    <h2>Outside focus trap</h2>
                    <button type="button">Button</button>
                    <button type="button">Another button</button>
                </section>
            </div>
        `
    }))
    .add("With options", () => ({
        components: { FocusTrap },
        props: {
            options: {
                type: Object,
                default: (items => () => items)(object('Options', {
                    initialFocus: 'button'
                }))
            }
        },
        template: `
            <div>
                <section>
                    <h2>Inside focus trap</h2>
                    <FocusTrap :active="true" :options="options">
                        <form @submit.prevent="">
                            <input type="email" placeholder="Email">
                            <input type="password" placeholder="Password">
                            <button>Log in</button>
                        </form>
                    </FocusTrap>
                </section>
                <p>
                    Another element is passed in as initialFocus
                </p>
            </div>
        `
    }))
