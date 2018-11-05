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

})
