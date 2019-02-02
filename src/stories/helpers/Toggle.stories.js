import { storiesOf } from "@storybook/vue";
import Toggle from "@/components/helpers/Toggle";

export default storiesOf("Helpers|Toggle", module)
    .add("It can render a button and some content", () => ({
        components: { Toggle },
        template: `
            <Toggle>
                <button
                    type="button"
                    slot="button"
                    slot-scope="props"
                >
                    Button
                </button>
                <div slot="content" slot-scope="props">
                    <h2>Content</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, dicta similique dolorum itaque temporibus placeat doloremque sunt repellat molestiae sed repudiandae laudantium sapiente veniam accusamus. Quas repellat sapiente impedit tenetur!
                    </p>
                </div>
            </Toggle>
        `
    }))
