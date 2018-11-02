import { mount } from '@vue/test-utils'
import InView from '../../../src/helpers/InView.vue'

window.IntersectionObserver = jest.fn(function() {
    this.observe = jest.fn()
})
describe('InView', () => {

    test('it can render the default slot', () => {
        const wrapper = mount(InView, {
            slots: {
                default: '<div>default slot</div>'
            }
        })

        expect(wrapper.is('div')).toBe(true)
        expect(wrapper.text()).toBe('default slot')
    })

    test('it can render a scoped slot', () => {
        const wrapper = mount(InView, {
            scopedSlots: {
                default: '<div>default slot</div>'
            }
        })

        expect(wrapper.is('div')).toBe(true)
        expect(wrapper.text()).toBe('default slot')
    })

})
