import { storiesOf } from "@storybook/vue";
import InView from "@/components/helpers/InView";

export default storiesOf("Helpers|In View", module)
    .add("Check if another element is in view", () => ({
        components: { InView },
        template: `
            <div style="height: 200vh;">
                <h1 class="heading py-4 text-center">Scroll down the page</h1>
                <InView element=".heading">
                    <button
                        type="button"
                        class="button fixed pin-b pin-r"
                        slot-scope="{ inView }"
                        v-show="!inView"
                    >
                        Go to top
                    </button>
                </InView>
            </div>
        `
    }))
    .add("Check if the slot element is in view", () => ({
        components: { InView },
        template: `
            <div>
                <InView :threshold="0.5">
                    <section
                        slot-scope="{ inView }"
                        style="height: 50vh; transition: all 500ms;"
                        :style="inView ? 'background-color: red;' : ''"
                    >
                        <h1 class="heading py-4 text-center">Scroll down the page</h1>
                    </section>
                </InView>
                <InView :threshold="0.5">
                    <section
                        slot-scope="{ inView }"
                        style="height: 50vh; transition: all 500ms;"
                        :style="inView ? 'background-color: orange;' : ''"
                    ></section>
                </InView>
                <InView :threshold="0.5">
                    <section
                        slot-scope="{ inView }"
                        style="height: 50vh; transition: all 500ms;"
                        :style="inView ? 'background-color: pink;' : ''"
                    ></section>
                </InView>
                <InView :threshold="0.5">
                    <section
                        slot-scope="{ inView }"
                        style="height: 50vh; transition: all 500ms;"
                        :style="inView ? 'background-color: purple;' : ''"
                    ></section>
                </InView>
                <InView :threshold="0.5">
                    <section
                        slot-scope="{ inView }"
                        style="height: 50vh; transition: all 500ms;"
                        :style="inView ? 'background-color: blue;' : ''"
                    ></section>
                </InView>
                <InView :threshold="0.5">
                    <section
                        slot-scope="{ inView }"
                        style="height: 50vh; transition: all 500ms;"
                        :style="inView ? 'background-color: cyan;' : ''"
                    ></section>
                </InView>
            </div>
        `
    }))
    .add("Listen for event emitted", () => ({
        components: { InView },
        data() {
            return {
                show: false
            };
        },
        template: `
            <div>
                <h1 style="margin-bottom: 50vh;"class="heading py-4 text-center">Scroll down the page</h1>
                <InView :threshold="1" @inView="show = $event">
                    <section
                        style="height: 80vh; margin-bottom: 50vh;"
                        class="bg-pink flex justify-center items-center"
                    >
                        <p v-if="show" class="text-white">
                            This is only visible if an event has been emitted
                        </p>
                    </section>
                </InView>
            </div>
        `
    }))
    .add("It accepts a number as a threshold", () => ({
        components: { InView },
        template: `
            <div>
                <h1 style="height: 100vh;" class="heading py-4 text-center">Scroll down the page</h1>
                <InView :threshold="1">
                    <section
                        slot-scope="{ inView }"
                        style="height: 50vh;"
                        :style="inView ? 'background-color: red;' : ''"
                        class="bg-grey flex justify-center items-center"
                    >
                        <p>
                            This will change color when all of it is in the viewport
                        </p>
                    </section>
                </InView>
                <InView :threshold="0.5">
                    <section
                        slot-scope="{ inView }"
                        style="height: 50vh;"
                        :style="inView ? 'background-color: yellow;' : ''"
                        class="bg-grey flex justify-center items-center"
                    >
                        <p>
                            This will change color when half of it is in the viewport
                        </p>
                    </section>
                </InView>
                <InView :threshold="0">
                    <section
                        slot-scope="{ inView }"
                        style="height: 50vh;"
                        :style="inView ? 'background-color: green;' : ''"
                        class="bg-grey flex justify-center items-center"
                    >
                        <p>
                            This will change color when any of it is in the viewport
                        </p>
                    </section>
                </InView>
            </div>
        `
    }))
    .add("The default threshold is 0", () => ({
        components: { InView },
        template: `
            <div>
                <h1 style="height: 100vh;" class="heading py-4 text-center">Scroll down the page</h1>
                <InView>
                    <section
                        slot-scope="{ inView }"
                        class="bg-grey flex justify-center items-center"
                        style="height: 50vh;"
                        :style="inView ? 'background-color: #FF5F7A;' : ''"
                    >
                        <p>This changed color as soon as it was in the viewport</p>
                    </section>
                </InView>
            </div>
        `
    }));
