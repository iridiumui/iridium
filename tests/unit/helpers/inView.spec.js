import { mount } from '@vue/test-utils'
import InView from '../../../src/helpers/InView.vue'

describe('InView', () => {

    let observe

    beforeEach(() => {
        document.body.innerHTML = ''

        observe = jest.fn(x => x)
        window.IntersectionObserver = jest.fn(function() {
            this.observe = observe
        })
    })

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

    test('it can target any element on the page', () => {
        document.body.innerHTML = `
            <div>
                <div class="some-element">some element</div>
            </div>
        `

        const wrapper = mount(InView, {
            slots: {
                default: '<div class="default">default slot</div>'
            },
            propsData: {
                element: '.some-element'
            }
        })

        expect(observe.mock.calls[0][0].classList.contains('some-element')).toBe(true)
    })

    test('it can target the slot element', () => {
        const wrapper = mount(InView, {
            slots: {
                default: '<div class="default">default slot</div>'
            }
        })

        expect(observe.mock.calls[0][0].classList.contains('default')).toBe(true)
    })

    test('the slot has access to the in-view state', () => {
        const wrapper = mount(InView, {
            scopedSlots: {
                default: `
                    <div :class="[ props.inView ? 'in-view' : 'not-in-view' ]">
                        default slot
                    </div>
                `
            }
        })

        wrapper.setData({ inView: false })

        expect(wrapper.classes()).toContain('not-in-view')

        wrapper.setData({ inView: true })

        expect(wrapper.classes()).toContain('in-view')
    })

    test('an event is emitted when the state changes', () => {
        const wrapper = mount(InView, {
            slots: {
                default: '<div class="default">default slot</div>'
            }
        })

        wrapper.setData({ inView: true })

        expect(wrapper.emitted().inView[0][0]).toBe(true)
    })

})
