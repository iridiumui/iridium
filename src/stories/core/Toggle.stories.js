import { storiesOf } from "@storybook/vue";
import centered from "@storybook/addon-centered";
import Toggle from "@/components/core/Toggle";

export default storiesOf("Core|Toggle", module)
    .addDecorator(centered)
    .add("It can render a button and some content", () => ({
        components: { Toggle },
        template: `
            <Toggle class="max-w-2/3 m-auto">
                <template #button="buttonProps">
                    <button
                        type="button"
                        class="button mb-4"
                    >
                        Button
                    </button>
                </template>
                <template #content="contentProps">
                    <div>
                        <h2>Content</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, dicta similique dolorum itaque temporibus placeat doloremque sunt repellat molestiae sed repudiandae laudantium sapiente veniam accusamus. Quas repellat sapiente impedit tenetur!
                        </p>
                    </div>
                </template>
            </Toggle>
        `
    }))
    .add("It can render a default scoped slot", () => ({
        components: { Toggle },
        template: `
            <Toggle class="max-w-2/3 m-auto" #default="props">
                <div>
                    <button
                        type="button"
                        class="button mb-4"
                    >
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
            <main class="max-w-2/3 m-auto">
                <h2 class="mt-8 mb-4">Named scoped slots:</h2>
                <Toggle class="mb-12">
                    <template #button="{ open }">
                        <button
                            type="button"
                            class="button mb-4"
                        >
                            Button (Open state: {{ open }})
                        </button>
                    </template>
                    <template #content="{ open }">
                        <div>
                            <h2 class="mb-2">Content</h2>
                            <p class="mb-2">
                                Open state: {{ open }}
                            </p>
                            <p class="mb-2">
                                <i>
                                    (This story doesn't actually hide content when it's closed)
                                </i>
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, dicta similique dolorum itaque temporibus placeat doloremque sunt repellat molestiae sed repudiandae laudantium sapiente veniam accusamus. Quas repellat sapiente impedit tenetur!
                            </p>
                        </div>
                    </template>
                </Toggle>

                <h2 class="mb-4">Default scoped slot:</h2>
                <Toggle #default="{ open }">
                    <div>
                        <button
                            type="button"
                            class="button mb-4"
                        >
                            Button (Open state: {{ open }})
                        </button>
                        <div>
                            <h2 class="mb-2">Content</h2>
                            <p class="mb-2">
                                Open state: {{ open }}
                            </p>
                            <p class="mb-2">
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
    .add("It can be open by default", () => ({
        components: { Toggle },
        template: `
            <main class="max-w-2/3 m-auto">
                <h2 class="mt-8 mb-4">Named scoped slots:</h2>
                <Toggle :open-default="true" class="mb-8">
                    <template #button="{ open }">
                        <button
                            type="button"
                            class="button mb-4"
                        >
                            Button (Open state: {{ open }})
                        </button>
                    </template>
                    <template #content="{ open }">
                        <div>
                            <h2 class="mb-2">Content</h2>
                            <p class="mb-2">
                                Open state: {{ open }}
                            </p>
                            <p class="mb-2">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, dicta similique dolorum itaque temporibus placeat doloremque sunt repellat molestiae sed repudiandae laudantium sapiente veniam accusamus. Quas repellat sapiente impedit tenetur!
                            </p>
                        </div>
                    </template>
                </Toggle>

                <h2 class="mb-4">Default scoped slot:</h2>
                <Toggle :open-default="true" #default="{ open }">
                    <div>
                        <button
                            type="button"
                            class="button mb-4"
                        >
                            Button (Open state: {{ open }})
                        </button>
                        <div>
                            <h2 class="mb-2">Content</h2>
                            <p class="mb-2">
                                Open state: {{ open }}
                            </p>
                            <p class="mb-2">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, dicta similique dolorum itaque temporibus placeat doloremque sunt repellat molestiae sed repudiandae laudantium sapiente veniam accusamus. Quas repellat sapiente impedit tenetur!
                            </p>
                        </div>
                    </div>
                </Toggle>
            </main>
        `
    }))
    .add("The slots can toggle", () => ({
        components: { Toggle },
        template: `
            <main class="w-2/3 m-auto">
                <h2 class="mb-4">Named scoped slots:</h2>
                <Toggle class="mb-8">
                    <template #button="{ open, toggle }">
                        <button
                            type="button"
                            @click="toggle"
                            class="button mb-4"
                            :disabled="open"
                        >
                            Open Content
                        </button>
                    </template>
                    <template #content="{ open, toggle }">
                        <div v-show="open">
                            <h2 class="mb-2">Content</h2>
                            <p class="mb-2">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, dicta similique dolorum itaque temporibus placeat doloremque sunt repellat molestiae sed repudiandae laudantium sapiente veniam accusamus. Quas repellat sapiente impedit tenetur!
                            </p>
                            <button
                                type="button"
                                @click="toggle"
                                class="button"
                            >
                                Close Content
                            </button>
                        </div>
                    </template>
                </Toggle>
                <hr class="border border-1" />
                <h2 class="mb-4">Default scoped slot:</h2>
                <Toggle>
                    <div slot-scope="{ open, toggle }">
                        <button
                            type="button"
                            @click="toggle"
                            class="button mb-4"
                            :disabled="open"
                        >
                            Open Content
                        </button>
                        <div v-show="open">
                            <h2 class="mb-2">Content</h2>
                            <p class="mb-2">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, dicta similique dolorum itaque temporibus placeat doloremque sunt repellat molestiae sed repudiandae laudantium sapiente veniam accusamus. Quas repellat sapiente impedit tenetur!
                            </p>
                            <button
                                type="button"
                                @click="toggle"
                                class="button"
                            >
                                Close Content
                            </button>
                        </div>
                    </div>
                </Toggle>
            </main>
        `
    }));
