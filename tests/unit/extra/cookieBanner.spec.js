import { mount } from '@vue/test-utils'
import CookieBanner from '../../../src/extra/CookieBanner.vue'

describe('Cookie Banner', () => {

    test('it can render the default scoped slot', () => {
        const wrapper = mount(CookieBanner, {
            scopedSlots: {
                default: `<div>Cookie Banner</div>`
            }
        })

        expect(wrapper.html()).toBe('<div>Cookie Banner</div>')
    })

})
