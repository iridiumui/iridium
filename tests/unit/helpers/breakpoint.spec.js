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

    test('it renders the default slot', () => {
        const wrapper = mount(Breakpoint, {
            propsData: {
                mediaQuery: '(min-width: 400px)'
            },
            slots: {
                default: '<div>default slot</div>'
            }
        })

        expect(wrapper.html()).toBe('<div>default slot</div>')
    })

    test('it only renders if it matches the media query', () => {
        window.resizeTo(399, 1000)

        let wrapper = mount(Breakpoint, {
            propsData: {
                mediaQuery: '(min-width: 400px)'
            },
            slots: {
                default: '<div>component</div>'
            }
        })

        expect(wrapper.html()).toBe(undefined)
    })

            slots: {
                default: '<div>component</div>'
            }
        })

        expect(wrapper.is('div')).toBe(true)
        expect(wrapper.text()).toBe('default slot')
    })

})
