import { mount } from '@vue/test-utils'
import ClickOutside from '../../../src/helpers/ClickOutside.vue'

describe('ClickOutside', () => {

    test('it renders the default slot', () => {
        const wrapper = mount(ClickOutside, {
            slots: {
                default: '<div>default slot</div>'
            }
        })

        expect(wrapper.is('div')).toBe(true)
        expect(wrapper.text()).toBe('default slot')
    })

})
