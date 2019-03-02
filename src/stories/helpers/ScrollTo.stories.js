import { storiesOf } from "@storybook/vue";
import ScrollTo from "@/components/helpers/ScrollTo";

export default storiesOf("Helpers|Scroll To", module)
    .add("Scroll to element", () => ({
        components: { ScrollTo },
        template: `
            <div>
                <ScrollTo element=".headline" #default="{ scroll }">
                    <button
                        type="button"
                        class="block button mx-auto my-4"
                        style="margin-bottom: 50vh;"
                        @click="scroll"
                    >
                        Scroll To headline
                    </button>
                </ScrollTo>
                <h2
                    class="headline text-center"
                    style="margin-bottom: 100vh;"
                >
                    Heading 1
                </h2>
            </div>
        `
    }))
    .add("Scroll to fixed position", () => ({
        components: { ScrollTo },
        template: `
            <div>
                <h1 style="height: 100vh" class="text-center py-4">Scroll down the page</h1>
                <ScrollTo :top="0" #default="{ scroll }">
                    <button
                        type="button"
                        style="margin-bottom: 50vh;"
                        class="block button mx-auto my-4"
                        @click="scroll"
                    >
                        Scroll To top
                    </button>
                </ScrollTo>
            </div>
        `
    }))
    .add("Scroll with offset", () => ({
        components: { ScrollTo },
        template: `
            <div>
                <ScrollTo element=".headline" :offset="50" #default="{ scroll }">
                    <button
                        type="button"
                        style="margin-bottom: 50vh;"
                        class="block button mx-auto my-4"
                        @click="scroll"
                    >
                        Scroll To headline
                    </button>
                </ScrollTo>
                <h2
                    class="headline text-center"
                    style="margin-bottom: 100vh;"
                >
                    Heading 1
                </h2>
            </div>
        `
    }))
    .add("Scroll behavior can be changed", () => ({
        components: { ScrollTo },
        template: `
            <div>
                <ScrollTo element=".headline" behavior="auto" #default="{ scroll }">
                    <button
                        type="button"
                        style="margin-bottom: 50vh;"
                        class="block button mx-auto my-4"
                        @click="scroll"
                    >
                        Scroll To headline
                    </button>
                </ScrollTo>
                <h2
                    class="headline text-center"
                    style="margin-bottom: 100vh;"
                >
                    Heading 1
                </h2>
            </div>
        `
    }));
