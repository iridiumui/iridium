import { storiesOf } from "@storybook/vue";
import { withViewport } from "@storybook/addon-viewport";

import ScreenXS from "@/components/helpers/ScreenXS";
import ScreenSM from "@/components/helpers/ScreenSM";
import ScreenMD from "@/components/helpers/ScreenMD";
import ScreenLG from "@/components/helpers/ScreenLG";
import ScreenXL from "@/components/helpers/ScreenXL";

export default storiesOf("Helpers|Breakpoint/Helpers", module)
    .addDecorator(withViewport("xs"))
    .add("Screen XS", () => ({
        components: { ScreenXS },
        template: `
            <div>
                <ScreenXS>
                    <p class="p-2 mb-2">
                        This is only visible on screens smaller than 576px
                    </p>
                </ScreenXS>
                <p class="p-2 mb-2">
                    This is visible on all screen sizes
                </p>
            </div>
        `
    }))
    .add("Screen SM", () => ({
        components: { ScreenSM },
        template: `
            <div>
                <ScreenSM>
                    <p class="p-2 mb-2">
                        This is only visible on screens larger than 576px
                    </p>
                </ScreenSM>
                <ScreenSM direction="down">
                    <p class="p-2 mb-2">
                        This is only visible on screens smaller than 768px
                    </p>
                </ScreenSM>
            </div>
        `
    }))
    .add("Screen MD", () => ({
        components: { ScreenMD },
        template: `
            <div>
                <ScreenMD>
                    <p class="p-2 mb-2">
                        This is only visible on screens larger than 768px
                    </p>
                </ScreenMD>
                <ScreenMD direction="down">
                    <p class="p-2 mb-2">
                        This is only visible on screens smaller than 992px
                    </p>
                </ScreenMD>
            </div>
        `
    }))
    .add("Screen LG", () => ({
        components: { ScreenLG },
        template: `
            <div>
                <ScreenLG>
                    <p class="p-2 mb-2">
                        This is only visible on screens larger than 992px
                    </p>
                </ScreenLG>
                <ScreenLG direction="down">
                    <p class="p-2 mb-2">
                        This is only visible on screens smaller than 1200px
                    </p>
                </ScreenLG>
            </div>
        `
    }))

    .add("Screen XL", () => ({
        components: { ScreenXL },
        template: `
            <div>
                <p class="p-2 mb-2">
                    This is visible on all screen sizes
                </p>
                <ScreenXL>
                    <p class="p-2 mb-2">
                        This is only visible on screens larger than 1200px
                    </p>
                </ScreenXL>
            </div>
        `
    }));
