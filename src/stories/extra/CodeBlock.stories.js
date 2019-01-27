import { storiesOf } from "@storybook/vue";
import centered from "@storybook/addon-centered";
import CodeBlock from "@/extra/CodeBlock";

export default storiesOf("Extra|Code Block", module)
    .addDecorator(centered)
    .add("Render a code block and a copy button", () => ({
        components: { CodeBlock },
        template: `
            <div>
                <CodeBlock>
                    <pre slot="content" style="white-space: nowrap;">
                        <code>
                            .some-css-class {
                                display: flex;
                                justify-content: center;
                                align-items: center;
                            }
                        </code>
                    </pre>
                    <button
                        type="button"
                        slot="button"
                        slot-scope="{ copy }"
                    >
                        Copy Button (not hooked up)
                    </button>
                </CodeBlock>
            </div>
        `
    }))
    .add("The button can copy the code", () => ({
        components: { CodeBlock },
        template: `
            <div>
                <CodeBlock>
                    <pre slot="content" style="white-space: nowrap;">
                        <code>
                            .some-css-class {
                                display: flex;
                                justify-content: center;
                                align-items: center;
                            }
                        </code>
                    </pre>
                    <button
                        type="button"
                        slot="button"
                        slot-scope="{ copy }"
                        @click="copy"
                    >
                        Copy
                    </button>
                </CodeBlock>
                <textarea cols="30" rows="10" placeholder="Past the code here"></textarea>
            </div>
        `
    }))
    .add("Run a callback if the copy was successful", () => ({
        components: { CodeBlock },
        methods: {
            success() {
                alert("The code has been copied to your clipboard");
            }
        },
        template: `
            <div>
                <CodeBlock :success-callback="success">
                    <pre slot="content" style="white-space: nowrap;">
                        <code>
                            .some-css-class {
                                display: flex;
                                justify-content: center;
                                align-items: center;
                            }
                        </code>
                    </pre>
                    <button
                        type="button"
                        slot="button"
                        slot-scope="{ copy }"
                        @click="copy"
                    >
                        Copy
                    </button>
                </CodeBlock>
                <textarea cols="30" rows="10" placeholder="Past the code here"></textarea>
            </div>
        `
    }));
