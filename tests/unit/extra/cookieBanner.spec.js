import { mount } from '@vue/test-utils'
import CookieBanner from '../../../src/extra/CookieBanner.vue'

describe('Cookie Banner', () => {

    beforeEach(() => {
        localStorage.clear()
    })

    test('it can render the default scoped slot', () => {
        const wrapper = mount(CookieBanner, {
            scopedSlots: {
                default: `<div>Cookie Banner</div>`
            }
        })

        expect(wrapper.html()).toBe('<div>Cookie Banner</div>')
    })

    test('its visible by default', () => {
        const wrapper = mount(CookieBanner, {
            scopedSlots: {
                default: `<div v-show="!props.accepted">Cookie Banner</div>`
            }
        })

        expect(wrapper.isVisible()).toBe(true)
    })

    test('it doesnt show up if cookies are already accepted', () => {
        localStorage.setItem('cookies_accepted', true)

        const wrapper = mount(CookieBanner, {
            scopedSlots: {
                default: `<div v-show="!props.accepted">Cookie Banner</div>`
            }
        })

        expect(wrapper.isVisible()).toBe(false)
    })

    })

})
