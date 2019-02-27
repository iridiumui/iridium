import { storiesOf } from "@storybook/vue";
import { withKnobs, text } from "@storybook/addon-knobs";
import centered from "@storybook/addon-centered";
import { checkA11y, configureA11y } from "@storybook/addon-a11y";
import VisuallyHidden from "@/components/accessibility/VisuallyHidden";
import axe from "axe-core";

configureA11y({
    rules: axe
        .getRules(["cat.name-role-value"])
        .filter(rule => rule.ruleId === "button-name")
        .map((rule) => Object.assign({ id: rule.ruleId }, rule)),
    disableOtherRules: true
});

export default storiesOf("Accessibility|Visually Hidden", module)
    .addDecorator(withKnobs)
    .addDecorator(centered)
    .addDecorator(checkA11y)
    .add("Accessible button", () => ({
        components: { VisuallyHidden },
        props: {
            text: {
                type: String,
                default: text("Text", "This text is hidden")
            }
        },
        template: `
            <button type="button" class="button">
                <visually-hidden>
                    {{ text }}
                </visually-hidden>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 124 124">
                    <g fill="#fff">
                        <path d="M112 6H12C5.4 6 0 11.4 0 18s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12zM112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12zM112 94H12c-6.6 0-12 5.4-12 12s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"/>
                    </g>
                </svg>
            </button>
        `
    }));
