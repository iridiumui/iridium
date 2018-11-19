import { mount } from '@vue/test-utils'
import Modal from '../../../src/core/Modal.vue'

describe('Modal', () => {

    test('it renders the toggle button', () => {
        const wrapper = mount(Modal, {
            scopedSlots: {
                toggle: '<button>Toggle Button</button>',
                content: '<main>Content</main>'
            }
        })

        expect(wrapper.find('button').text()).toBe('Toggle Button')
    })

    test('it renders the content', () => {
        const wrapper = mount(Modal, {
            scopedSlots: {
                toggle: '<button>Toggle Button</button>',
                content: '<main>Content</main>'
            }
        })

        expect(wrapper.find('main').text()).toBe('Content')
    })

})
