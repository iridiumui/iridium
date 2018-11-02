import { mount } from '@vue/test-utils'
import ScrollTo from '../../../src/helpers/ScrollTo.vue'

describe('ScrollTo', () => {

    test('it renders the default scoped slot', () => {
        const wrapper = mount(ScrollTo, {
            scopedSlots: {
                default: '<div>default slot</div>'
            }
        })

        expect(wrapper.is('div')).toBe(true)
        expect(wrapper.text()).toBe('default slot')
    })

})

