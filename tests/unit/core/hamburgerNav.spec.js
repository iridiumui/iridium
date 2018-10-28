import { mount } from '@vue/test-utils'
import HamburgerNav from '../../../src/core/HamburgerNav.vue'

describe('Hamburger Nav', () => {

    test('it can render the default slot', () => {
        const wrapper = mount(HamburgerNav, {
            scopedSlots: {
                default: '<div>default slot</div>'
            }
        })

        expect(wrapper.html()).toBe('<div>default slot</div>')
    })

    test('it can render the named slots', () => {
        const wrapper = mount(HamburgerNav, {
            scopedSlots: {
                toggle: '<button>toggle</button>',
                content: '<div>content</div>'
            }
        })

        expect(wrapper.html()).toBe('<div><button>toggle</button><div>content</div></div>')
    })

})
