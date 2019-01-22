import { storiesOf } from '@storybook/vue'
import InView from '../../helpers/InView'

export default storiesOf('Helpers|In View', module)
    .add('Show an element only if another element is in view', () => ({
        components: { InView },
        template: `
            <div style="height: 200vh;">
                <h1 class="heading">Scroll down the page</h1>
                <InView element=".heading">
                    <button
                        type="button"
                        style="position: fixed; bottom: 0; right: 0;"
                        slot-scope="{ inView }"
                        v-show="!inView"
                    >
                        Go to top
                    </button>
                </InView>
            </div>
        `
    }))
    .add('Animate an element in when it enters the viewport', () => ({
        components: { InView },
        template: `
            <div>
                <InView :threshold="0.5">
                    <section
                        slot-scope="{ inView }"
                        style="height: 50vh; transition: all 500ms;"
                        :style="inView ? 'background-color: red;' : ''"
                    >
                        <h1>Scroll down the page</h1>
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
