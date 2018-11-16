import { mount } from '@vue/test-utils'
import Fixed from '../../../src/helpers/Fixed.vue'

describe('Fixed', () => {
    let wrapper

    beforeEach(() => {
        wrapper = mount(Fixed, {
            slots: {
                default: '<div>component</div>'
            }
        })
    })

    test('it can be fixed to the edge of the page', () => {
        expect(wrapper.attributes('style')).toBe('position: fixed; top: 0px;')
    })

    test('the pinned edge can be determined via a prop', () => {
        wrapper = mount(Fixed, {
            propsData: {
                edges: ['left']
            },
            slots: {
                default: '<div>component</div>'
            }
        })

        expect(wrapper.attributes('style')).toBe('position: fixed; left: 0px;')
    })

    test('it can pin to multiple edges', () => {
        wrapper = mount(Fixed, {
            propsData: {
                edges: ['left', 'bottom']
            },
            slots: {
                default: '<div>component</div>'
            }
        })

        expect(wrapper.attributes('style')).toBe('position: fixed; left: 0px; bottom: 0px;')
    })

    test('it renders the default slot', () => {
        wrapper = mount(Fixed, {
            slots: {
                default: '<div>default slot</div>'
            }
        })

        expect(wrapper.is('div')).toBe(true)
        expect(wrapper.text()).toBe('default slot')
    })

})
