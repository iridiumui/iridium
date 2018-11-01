import { mount } from '@vue/test-utils'
import TransitionBase from '../../../src/transitions/TransitionBase.vue'

describe('TransitionBase', () => {

    test('it renders the default slot', () => {
        const wrapper = mount(TransitionBase, {
            propsData: {
                name: 'slide'
            },
            slots: {
                default: '<div>default slot</div>'
            }
        })

        expect(wrapper.is('div')).toBe(true)
        expect(wrapper.text()).toBe('default slot')
    })

})
