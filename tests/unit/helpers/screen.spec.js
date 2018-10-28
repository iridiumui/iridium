import { mount } from '@vue/test-utils'
import ScreenSM from '../../../src/helpers/ScreenSM.vue'
import matchMediaMock from 'match-media-mock'

window.matchMedia = matchMediaMock.create()
/* eslint-disable-next-line no-unused-vars */
window.resizeTo = (width, height) => {
    window.matchMedia.setConfig({
        type: 'screen',
        width: width
    })
}

describe('Screen', () => {

    beforeEach(() => {
        window.resizeTo(1000, 1000)
    })

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

    test('the direction can be controlled', async () => {
        window.resizeTo(575, 1000)

        const wrapper = mount(ScreenSM, {
            propsData: {
                direction: 'down'
            },
            slots: {
                default: '<div>component</div>'
            }
        })

        await wrapper.vm.$nextTick()

        expect(wrapper.html()).toBe('<div>component</div>')
    })

})
