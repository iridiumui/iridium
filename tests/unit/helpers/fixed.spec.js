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
                edge: 'left'
            },
            slots: {
                default: '<div>component</div>'
            }
        })

        expect(wrapper.attributes('style')).toBe('position: fixed; left: 0px;')
    })

})
