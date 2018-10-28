import { mount } from '@vue/test-utils'
import ScreenSM from '../../../src/helpers/ScreenSM.vue'
describe('Screen', () => {


    test('it renders the default slot', async () => {
        const wrapper = mount(ScreenSM, {
            propsData: {
                direction: 'up'
            },
            slots: {
                default: '<div>default slot</div>'
            }
        })

        await wrapper.vm.$nextTick()

        expect(wrapper.html()).toBe('<div>default slot</div>')
    })


})
