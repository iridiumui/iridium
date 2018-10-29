import { mount } from '@vue/test-utils'
import HamburgerNavToggle from '../../../src/core/HamburgerNavToggle.vue'

describe('Hamburger Nav Toggle', () => {

    test('it can render the default slot', () => {
        const wrapper = mount(HamburgerNavToggle, {
            props: {
                active: false
            },
            slots: {
                default: '<button>default slot</button>'
            }
        })

        expect(wrapper.is('button')).toBe(true)
        expect(wrapper.text()).toBe('default slot')
    })

    test('it controls the aria-expanded attribute', () => {
        const wrapper = mount(HamburgerNavToggle, {
            props: {
                active: false
            },
            slots: {
                default: '<button>default slot</button>'
            }
        })

        expect(wrapper.attributes('aria-expanded')).toBe('false')

        wrapper.setProps({
            active: true
        })

        expect(wrapper.attributes('aria-expanded')).toBe('true')
    })

})
