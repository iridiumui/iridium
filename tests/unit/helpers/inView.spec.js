import { mount } from '@vue/test-utils'
import InView from '../../../src/helpers/InView.vue'

describe('InView', () => {

    test('it renders the default slot', () => {
        const wrapper = mount(InView, {
            slots: {
                default: '<div>default slot</div>'
            }
        })

        expect(wrapper.is('div')).toBe(true)
        expect(wrapper.text()).toBe('default slot')
    })

})
