import { mount } from '@vue/test-utils'
import ClickOutside from '../../../src/helpers/ClickOutside.vue'

describe('ClickOutside', () => {

    beforeEach(() => {
        document.body.innerHTML = ''
    })

    test('it renders the default slot', () => {
        const wrapper = mount(ClickOutside, {
            slots: {
                default: '<div>default slot</div>'
            }
        })

        expect(wrapper.is('div')).toBe(true)
        expect(wrapper.text()).toBe('default slot')
    })

    test('it will emit an event when another element is clicked', () => {
        document.body.innerHTML = `
            </div>
                <button class="other-element">Button</button>
            </div>
        `
        const wrapper = mount(ClickOutside, {
            slots: {
                default: '<div>default slot</div>'
            }
        })

        document.querySelector('.other-element').click()

        expect(wrapper.emitted().clickoutside).toBeTruthy()
    })

    test('it doesnt fire an event if the passed in element is clicked', () => {
        const wrapper = mount(ClickOutside, {
            slots: {
                default: '<button>default button</button>'
            }
        })

        wrapper.find('button').trigger('click')

        expect(wrapper.emitted().clickoutside).toBeFalsy()
    })

    test('it doesnt fire an event if its not active', () => {
        document.body.innerHTML = `
            </div>
                <button class="other-element">Button</button>
            </div>
        `
        const wrapper = mount(ClickOutside, {
            propsData: {
                active: false
            },
            slots: {
                default: '<div>default slot</div>'
            }
        })

        document.querySelector('.other-element').click()

        expect(wrapper.emitted().clickoutside).toBeFalsy()
    })

})
