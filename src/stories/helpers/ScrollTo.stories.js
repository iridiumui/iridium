import { storiesOf } from "@storybook/vue";
import ScrollTo from "@/helpers/ScrollTo";

export default storiesOf("Helpers|Scroll To", module)
    .add("Scroll to element", () => ({
        components: { ScrollTo },
        template: `
            <div>
                <ScrollTo element=".headline">
                    <button
                        type="button"
                        style="margin-bottom: 50vh;"
                        slot-scope="{ scroll }"
                        @click="scroll"
                    >
                        Scroll To headline
                    </button>
                </ScrollTo>
                <h2
                    class="headline"
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
                <h1 style="height: 100vh">Scroll down the page</h1>
                <ScrollTo :top="0">
                    <button
                        type="button"
                        style="margin-bottom: 50vh;"
                        slot-scope="{ scroll }"
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
                <ScrollTo element=".headline" :offset="50">
                    <button
                        type="button"
                        style="margin-bottom: 50vh;"
                        slot-scope="{ scroll }"
                        @click="scroll"
                    >
                        Scroll To headline
                    </button>
                </ScrollTo>
                <h2
                    class="headline"
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
                <ScrollTo element=".headline" behavior="auto">
                    <button
                        type="button"
                        style="margin-bottom: 50vh;"
                        slot-scope="{ scroll }"
                        @click="scroll"
                    >
                        Scroll To headline
                    </button>
                </ScrollTo>
                <h2
                    class="headline"
                    style="margin-bottom: 100vh;"
                >
                    Heading 1
                </h2>
            </div>
        `
    }));
