import { storiesOf } from "@storybook/vue";
import { withViewport } from "@storybook/addon-viewport";
import Breakpoint from "@/components/helpers/Breakpoint";

export default storiesOf("Helpers|Breakpoint", module)
    .addDecorator(withViewport("xs"))
    .add("All breakpoints", () => ({
        components: { Breakpoint },
        template: `
            <div>
                <Breakpoint media-query="(max-width: 320px)">
                    <p>
                        This is only visible on extra small screens
                    </p>
                </Breakpoint>
                <Breakpoint media-query="(max-width: 375px)">
                    <p>
                        This is visible on all mobile devices
                    </p>
                </Breakpoint>
                <Breakpoint media-query="(max-width: 768px)">
                    <p>
                        This is visible on tablet and down
                    </p>
                </Breakpoint>
                <Breakpoint media-query="(max-width: 992px)">
                    <p>
                        This is visible on small desktop devices and down
                    </p>
                </Breakpoint>
                <Breakpoint media-query="(max-width: 1200px)">
                    <p>
                        This is visible on desktop devices and down
                    </p>
                </Breakpoint>
                <Breakpoint media-query="(min-width: 1201px)">
                    <p>
                        This is only visible on large desktop devices
                    </p>
                </Breakpoint>
            </div>
        `
    }));
