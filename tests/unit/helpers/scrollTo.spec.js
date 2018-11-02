import { mount } from '@vue/test-utils'
import ScrollTo from '../../../src/helpers/ScrollTo.vue'

describe('ScrollTo', () => {

    beforeEach(() => {
        window.scrollTo = jest.fn()
    })

    test('it renders the default scoped slot', () => {
        const wrapper = mount(ScrollTo, {
            scopedSlots: {
                default: '<div>default slot</div>'
            }
        })

        expect(wrapper.is('div')).toBe(true)
        expect(wrapper.text()).toBe('default slot')
    })

    test('it scrolls when the button is clicked', () => {
        const wrapper = mount(ScrollTo, {
            scopedSlots: {
                default: '<button @click="props.scroll">Scroll</button>'
            }
        })

        wrapper.trigger('click')

        expect(window.scrollTo).toHaveBeenCalled()
    })

})

