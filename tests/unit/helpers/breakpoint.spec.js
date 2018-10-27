import { mount } from '@vue/test-utils'
import Breakpoint from '../../../src/helpers/Breakpoint.vue'
import matchMediaMock from 'match-media-mock'

window.matchMedia = matchMediaMock.create()
window.resizeTo = (width, height) => {
    window.matchMedia.setConfig({
        type: 'screen',
        width: width
    })
}

describe('Breakpoint', () => {

    beforeEach(() => {
        window.resizeTo(1000, 1000)
    })

    test('it renders the default slot', async () => {
        const wrapper = mount(Breakpoint, {
            propsData: {
                mediaQuery: '(min-width: 400px)'
            },
            slots: {
                default: '<div>default slot</div>'
            }
        })

        await wrapper.vm.$nextTick()

        expect(wrapper.html()).toBe('<div>default slot</div>')
    })

    test('it only renders if it matches the media query', async () => {
        window.resizeTo(399, 1000)

        let wrapper = mount(Breakpoint, {
            propsData: {
                mediaQuery: '(min-width: 400px)'
            },
            slots: {
                default: '<div>component</div>'
            }
        })

        await wrapper.vm.$nextTick()

        expect(wrapper.html()).toBe(undefined)
    })

})
