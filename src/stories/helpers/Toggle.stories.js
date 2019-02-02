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
    .add("It can a default scoped slot", () => ({
        components: { Toggle },
        template: `
            <Toggle>
                <div
                    slot-scope="props"
                >
                    <button type="button">
                        Button
                    </button>
                    <div>
                        <h2>Content</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, dicta similique dolorum itaque temporibus placeat doloremque sunt repellat molestiae sed repudiandae laudantium sapiente veniam accusamus. Quas repellat sapiente impedit tenetur!
                        </p>
                    </div>
                </div>
            </Toggle>
        `
    }))
    .add("The slots know whether it's open", () => ({
        components: { Toggle },
        template: `
            <main>
                <h2>Named scoped slots:</h2>
                <Toggle>
                    <button
                        type="button"
                        slot="button"
                        slot-scope="{ open }"
                    >
                        Button (Open state: {{ open }})
                    </button>
                    <div
                        slot="content"
                        slot-scope="{ open }"
                    >
                        <h2>Content</h2>
                        <p>
                            Open state: {{ open }}
                        </p>
                        <p>
                            <i>
                                (This story doesn't actually hide content when it's closed)
                            </i>
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, dicta similique dolorum itaque temporibus placeat doloremque sunt repellat molestiae sed repudiandae laudantium sapiente veniam accusamus. Quas repellat sapiente impedit tenetur!
                        </p>
                    </div>
                </Toggle>

                <h2>Default scoped slot:</h2>
                <Toggle>
                    <div
                        slot-scope="{ open }"
                    >
                        <button type="button">
                            Button (Open state: {{ open }})
                        </button>
                        <div>
                            <h2>Content</h2>
                            <p>
                                Open state: {{ open }}
                            </p>
                            <p>
                                <i>
                                    (This story doesn't actually hide content when it's closed)
                                </i>
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, dicta similique dolorum itaque temporibus placeat doloremque sunt repellat molestiae sed repudiandae laudantium sapiente veniam accusamus. Quas repellat sapiente impedit tenetur!
                            </p>
                        </div>
                    </div>
                </Toggle>
            </main>
        `
    }))
    }));
