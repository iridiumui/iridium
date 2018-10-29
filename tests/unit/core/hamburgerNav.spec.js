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

        expect(wrapper.html()).toBe('<div><button aria-expanded="false">toggle</button><div>content</div></div>')
    })

    test('its closed by default', () => {
        const wrapper = mount(HamburgerNav, {
            scopedSlots: {
                default: `
                    <div>
                        <button>Open</button>
                        <div v-show="props.open" class="content">
                        </div>
                    </div>
                `
            }
        })

        expect(wrapper.find('.content').isVisible()).toBe(false)
    })

    test('it accepts a default state', () => {
        const wrapper = mount(HamburgerNav, {
            propsData: {
                defaultState: true
            },
            scopedSlots: {
                default: `
                    <div>
                        <button>Open</button>
                        <div v-show="props.open" class="content">
                        </div>
                    </div>
                `
            }
        })

        expect(wrapper.find('.content').isVisible()).toBe(true)
    })

    test('it can toggle the open state', () => {
        const wrapper = mount(HamburgerNav, {
            scopedSlots: {
                default: `
                    <div>
                        <button @click="props.toggle">Open</button>
                        <div v-show="props.open" class="content">
                        </div>
                    </div>
                `
            }
        })

        expect(wrapper.find('.content').isVisible()).toBe(false)

        wrapper.find('button').trigger('click')

        expect(wrapper.find('.content').isVisible()).toBe(true)
    })

})
