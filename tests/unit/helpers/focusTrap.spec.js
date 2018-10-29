import { mount } from '@vue/test-utils'
import FocusTrap from '../../../src/helpers/FocusTrap.vue'

describe('FocusTrap', () => {

    test('it renders the default slot', () => {
        const wrapper = mount(FocusTrap, {
            slots: {
                default: '<div>default slot</div>'
            }
        })

        expect(wrapper.html()).toBe('<div>default slot</div>')
    })

})
