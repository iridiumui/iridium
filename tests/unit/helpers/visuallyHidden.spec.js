import { mount } from '@vue/test-utils'
import VisuallyHidden from '../../../src/helpers/VisuallyHidden.vue'

describe('VisuallyHidden', () => {

    test('it renders the default slot', () => {
        const wrapper = mount(VisuallyHidden, {
            slots: {
                default: '<div>component</div>'
            }
        })

        expect(wrapper.html()).toBe('<div>component</div>')
    })

})
