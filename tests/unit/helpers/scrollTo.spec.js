import { mount } from '@vue/test-utils'
import ScrollTo from '../../../src/helpers/ScrollTo.vue'

describe('ScrollTo', () => {

    beforeEach(() => {
        document.body.innerHTML = ''
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

    test('it accepts a specific top value to scroll to', () => {
        const wrapper = mount(ScrollTo, {
            scopedSlots: {
                default: '<button @click="props.scroll">Scroll</button>'
            },
            propsData: {
                top: 200
            }
        })

        wrapper.trigger('click')

        expect(window.scrollTo).toBeCalledWith(
            expect.objectContaining({ top: 200 })
        )
    })

    test('it accepts an element to scroll to', () => {
        document.body.innerHTML = `
            <div>
                <div class="scroll-to-here">some element</div>
            </div>
        `

        const wrapper = mount(ScrollTo, {
            scopedSlots: {
                default: '<button @click="props.scroll">Scroll</button>'
            },
            propsData: {
                element: '.scroll-to-here'
            }
        })

        wrapper.vm.target.getBoundingClientRect = jest.fn(() => {
            return {
                top: 300
            }
        })

        wrapper.trigger('click')

        expect(window.scrollTo).toBeCalledWith(
            expect.objectContaining({ top: 300 })
        )
    })

    test('it accepts a scroll behavior', () => {
        const wrapper = mount(ScrollTo, {
            scopedSlots: {
                default: '<button @click="props.scroll">Scroll</button>'
            },
            propsData: {
                behavior: 'auto'
            }
        })

        wrapper.trigger('click')

        expect(window.scrollTo).toBeCalledWith(
            expect.objectContaining({ behavior: 'auto' })
        )
    })

    test('it accepts an offset', () => {
        const wrapper = mount(ScrollTo, {
            scopedSlots: {
                default: '<button @click="props.scroll">Scroll</button>'
            },
            propsData: {
                top: 200,
                offset: 50
            }
        })

        wrapper.trigger('click')

        expect(window.scrollTo).toBeCalledWith(
            expect.objectContaining({ top: 150 })
        )
    })

})
