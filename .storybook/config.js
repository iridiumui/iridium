import { configure, addDecorator } from '@storybook/vue'
import { withOptions } from '@storybook/addon-options';
import { configureViewport } from '@storybook/addon-viewport';
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

configureViewport({
    viewports: {
        responsive: {
            name: "Responsive",
            type: 'desktop',
            styles: {
                width: '100%',
                height: '100%'
            }
        },
        xs: {
            name: 'Extra Small',
            type: 'mobile',
            styles: {
                width: '320px',
                height: '568px'
            }
        },
        sm: {
            name: 'Small',
            type: 'mobile',
            styles: {
                width: '375px',
                height: '667px'
            }
        },
        md: {
            name: 'Medium',
            type: 'tablet',
            styles: {
                width: '768px',
                height: '1024px'
            }
        },
        lg: {
            name: 'Large',
            type: 'desktop',
            styles: {
                width: '992px',
                height: '620px'
            }
        },
        xl: {
            name: 'Extra Large',
            type: 'desktop',
            styles: {
                width: '1280',
                height: '800px'
            }
        }
    }
});

function loadStories() {
    require('../src/stories')
}

configure(loadStories, module)
