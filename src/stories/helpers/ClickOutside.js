import { storiesOf } from '@storybook/vue'
import ClickOutside from '../../helpers/ClickOutside'

storiesOf('ClickOutside', module)
    .add('render default slot', () => ({
        components: { ClickOutside },
        template: `
            <click-outside>
                <div width="200" height="200" style="width: 200px; height: 200px; background-color: pink; display: flex; justify-content: center; align-items: center;">
                    This is the default slot
                </div>
            </click-outside>
        `
    }))
    .add('emit event when clicking outside', () => ({
        components: { ClickOutside },
        data() {
            return {
                clicked: false
            }
        },
        template: `
            <div>
                <click-outside @clickoutside="clicked = true">
                    <div style="display: flex; justify-content: center; align-items: center; width: 200px; height: 200px; background-color: pink;">
                        <span>Try clicking outside the box</span>
                    </div>
                </click-outside>
                <h2 v-if="clicked">It's working</h2>
            </div>
        `
    }))
    .add('emit event when clicking inside', () => ({
        components: { ClickOutside },
        data() {
            return {
                clicked: false
            }
        },
        template: `
            <div>
                <click-outside @clickinside="clicked = true">
                    <div style="display: flex; justify-content: center; align-items: center; width: 200px; height: 200px; background-color: pink;">
                        <span v-if="!clicked">Try clicking inside the box</span>
                        <span v-else>It's working</span>
                    </div>
                </click-outside>
            </div>
        `
    }))
    .add('deactivated', () => ({
        components: { ClickOutside },
        data() {
            return {
                clicked: false
            }
        },
        template: `
            <div>
                <click-outside :active="false" @clickinside="clicked = true">
                    <div style="display: flex; justify-content: center; align-items: center; width: 200px; height: 200px; background-color: pink;">
                        <span v-if="!clicked" style="text-align: center;">Nothing should happen if you click here</span>
                        <span v-else>This shouldn't become visible</span>
                    </div>
                </click-outside>
            </div>
        `
    }))
