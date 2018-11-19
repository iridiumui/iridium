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

    test('its closed by default', () => {
        expect(typeof Modal.data).toBe('function')
        expect(Modal.data().open).toBe(false)
    })

    test('the content can control its visibility', () => {
        const wrapper = mount(Modal, {
            scopedSlots: {
                toggle: '<button>Toggle Button</button>',
                content: '<main v-show="props.open">Content</main>'
            }
        })

        wrapper.setData({ open: true })

        expect(wrapper.find('main').isVisible()).toBe(true)
    })

    test('the toggle can use the visibility', () => {
        const wrapper = mount(Modal, {
            scopedSlots: {
                toggle: '<button :disabled="props.open">Toggle Button</button>',
                content: '<main>Content</main>'
            }
        })

        wrapper.setData({ open: true })

        expect(wrapper.find('button').element.disabled).toBe(true)
    })

    test('the toggle can open the modal', () => {
        const wrapper = mount(Modal, {
            scopedSlots: {
                toggle: '<button @click="props.openModal">Toggle Button</button>',
                content: '<main v-show="props.open">Content</main>'
            }
        })

        expect(wrapper.find('main').isVisible()).toBe(false)

        wrapper.find('button').trigger('click')

        expect(wrapper.find('main').isVisible()).toBe(true)
    })

})
