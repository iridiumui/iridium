import { storiesOf } from "@storybook/vue";
import { withKnobs, boolean, object } from "@storybook/addon-knobs";
import centered from "@storybook/addon-centered";
import FocusTrap from "@/components/accessibility/FocusTrap";

export default storiesOf("Accessibility|Focus Trap", module)
    .addDecorator(withKnobs)
    .addDecorator(centered)
    .add("Trap's focus", () => ({
        components: { FocusTrap },
        template: `
            <div class="bg-white p-4 shadow">
                <section class="mb-8">
                    <h2 class="mb-2">Inside focus trap</h2>
                    <FocusTrap :active="true">
                        <form @submit.prevent="" class="flex items-stretch">
                            <input type="email" placeholder="Email" class="block mr-2 p-4 h-full bg-grey-lighter">
                            <input type="password" placeholder="Password" class="block mr-2 p-4 h-full bg-grey-lighter">
                            <button class="button">Log in</button>
                        </form>
                    </FocusTrap>
                </section>
                <section>
                    <h2 class="mb-2">Outside focus trap</h2>
                    <button type="button" class="button">Button</button>
                    <button type="button" class="button">Another button</button>
                </section>
            </div>
        `
    }))
    .add("The trap can be deactivated", () => ({
        components: { FocusTrap },
        props: {
            active: {
                type: Boolean,
                default: boolean("Active", true)
            }
        },
        template: `
            <div class="bg-white p-4 shadow">
                <section class="mb-8">
                    <h2 class="mb-2">Inside focus trap</h2>
                    <FocusTrap :active="active">
                        <form @submit.prevent="" class="flex items-stretch">
                            <input type="email" placeholder="Email" class="block mr-2 p-4 h-full bg-grey-lighter">
                            <input type="password" placeholder="Password" class="block mr-2 p-4 h-full bg-grey-lighter">
                            <button class="button">Log in</button>
                        </form>
                    </FocusTrap>
                </section>
                <section>
                    <h2 class="mb-2">Outside focus trap</h2>
                    <button type="button" class="button">Button</button>
                    <button type="button" class="button">Another button</button>
                </section>
            </div>
        `
    }))
    .add("With options", () => ({
        components: { FocusTrap },
        props: {
            options: {
                type: Object,
                default: (items => () => items)(object("Options", {
                    initialFocus: "button"
                }))
            }
        },
        template: `
            <div class="bg-white p-4 shadow">
                <section class="mb-8">
                    <h2 class="mb-2">Inside focus trap</h2>
                    <FocusTrap :active="true" :options="options">
                        <form @submit.prevent="" class="flex items-stretch">
                            <input type="email" placeholder="Email" class="block mr-2 p-4 h-full bg-grey-lighter">
                            <input type="password" placeholder="Password" class="block mr-2 p-4 h-full bg-grey-lighter">
                            <button class="button">Log in</button>
                        </form>
                    </FocusTrap>
                </section>
                <p>
                    Another element is passed in as initialFocus
                </p>
            </div>
        `
    }));
