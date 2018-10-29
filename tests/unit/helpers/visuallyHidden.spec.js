import { mount } from '@vue/test-utils'
import VisuallyHidden from '../../../src/helpers/VisuallyHidden.vue'

describe('VisuallyHidden', () => {

    test('it renders the default slot', () => {
        const wrapper = mount(VisuallyHidden, {
            slots: {
                default: '<div>default slot</div>'
            }
        })

        expect(wrapper.is('div')).toBe(true)
        expect(wrapper.text()).toBe('default slot')
    })

    test('it hides the component for visual users', () => {
        const wrapper = mount(VisuallyHidden, {
            slots: {
                default: '<div>component</div>'
            }
        })

        expect(wrapper.attributes('style')).toBe('border:0;clip:rect(0 0 0 0);height:1px;width:1px;margin:-1px;padding:0;overflow:hidden;position:absolute;')
    })

})