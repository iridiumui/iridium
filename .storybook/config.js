import { configure, addDecorator } from '@storybook/vue'
import { withOptions } from '@storybook/addon-options';

addDecorator(
    withOptions({
        hierarchyRootSeparator: /\|/,
    })
);

function loadStories() {
    require('../src/stories')
}

configure(loadStories, module)
