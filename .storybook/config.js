import { configure, addDecorator } from '@storybook/vue'
import { withOptions } from '@storybook/addon-options';
import { withBackgrounds } from '@storybook/addon-backgrounds';

addDecorator(
    withOptions({
        hierarchyRootSeparator: /\|/,
    })
);

addDecorator(
    withBackgrounds([
        { name: 'grey', value: '#FAFAFA', default: true },
    ])
);
function loadStories() {
    require('../src/stories')
}

configure(loadStories, module)
