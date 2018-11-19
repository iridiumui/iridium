import { mount } from '@vue/test-utils'
import Modal from '../../../src/core/Modal.vue'

describe('Modal', () => {

    test('it renders the toggle button', () => {
        const wrapper = mount(Modal, {
            scopedSlots: {
                toggle: '<button>Toggle Button</button>'
            }
        })

        expect(wrapper.find('button').text()).toBe('Toggle Button')
    })

})
