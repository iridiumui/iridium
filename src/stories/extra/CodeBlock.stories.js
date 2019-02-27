import { storiesOf } from "@storybook/vue";
import centered from "@storybook/addon-centered";
import CodeBlock from "@/components/extra/CodeBlock";

export default storiesOf("Extra|Code Block", module)
    .addDecorator(centered)
    .add("Render a code block and a copy button", () => ({
        components: { CodeBlock },
        template: `
            <div>
                <CodeBlock class="bg-grey-lighter w-80 relative">
                    <pre slot="content" class="inline-block w-80">
                        <code class="block w-80">
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
                        class="absolute pin-t pin-r text-sm bg-pink p-1 text-white font-bold uppercase"
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
                <CodeBlock class="bg-grey-lighter w-80 relative">
                    <pre slot="content" class="inline-block w-80">
                        <code class="block w-80">
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
                        class="absolute pin-t pin-r text-sm bg-pink p-1 text-white font-bold uppercase"
                    >
                        Copy
                    </button>
                </CodeBlock>
                <textarea
                    placeholder="Past the code here"
                    class="block w-80 h-48"
                ></textarea>
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
                <CodeBlock :success-callback="success" class="bg-grey-lighter w-80 relative">
                    <pre slot="content" class="inline-block w-80">
                        <code class="block w-80">
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
                        class="absolute pin-t pin-r text-sm bg-pink p-1 text-white font-bold uppercase"
                    >
                        Copy
                    </button>
                </CodeBlock>
                <textarea
                    placeholder="Past the code here"
                    class="block w-80 h-48"
                ></textarea>
            </div>
        `
    }));
