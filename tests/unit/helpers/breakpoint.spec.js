import { mount } from '@vue/test-utils'
import Breakpoint from '../../../src/helpers/Breakpoint.vue'

describe('Breakpoint', () => {

    let wrapper

    beforeEach(() => {
        wrapper = mount(Breakpoint, {
            slots: {
                default: '<div>component</div>'
            }
        })
    })

    test('it renders the default slot', () => {
        wrapper = mount(Breakpoint, {
            slots: {
                default: '<div>default slot</div>'
            }
        })

        expect(wrapper.is('div')).toBe(true)
        expect(wrapper.text()).toBe('default slot')
    })

})
