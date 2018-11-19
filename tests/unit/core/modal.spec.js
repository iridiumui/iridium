import { mount, createLocalVue } from '@vue/test-utils'
import Modal from '../../../src/core/Modal.vue'
import PortalVue from 'portal-vue'

const localVue = createLocalVue()
localVue.use(PortalVue)

describe('Modal', () => {

    beforeEach(() => {
        document.querySelector('body').style.overflow = 'visibile'
    })

    test('it renders the toggle button', () => {
        const wrapper = mount(Modal, {
            localVue,
            propsData: {
                usePortal: false
            },
            scopedSlots: {
                toggle: '<button>Toggle Button</button>',
                content: `
                    <main v-show="props.open">
                        <button>Focusable element</button>
                    </main>
                `
            }
        })

        expect(wrapper.find('button').text()).toBe('Toggle Button')
    })

    test('it renders the content', () => {
        const wrapper = mount(Modal, {
            localVue,
            propsData: {
                usePortal: false
            },
            scopedSlots: {
                toggle: '<button>Toggle Button</button>',
                content: `
                    <main v-show="props.open">
                        <button>Focusable element</button>
                        <p>Content</p>
                    </main>
                `
            }
        })

        expect(wrapper.find('main p').text()).toBe('Content')
    })

    test('its closed by default', () => {
        expect(typeof Modal.data).toBe('function')
        expect(Modal.data().open).toBe(false)
    })

    test('the content can control its visibility', () => {
        const wrapper = mount(Modal, {
            localVue,
            propsData: {
                usePortal: false
            },
            scopedSlots: {
                toggle: '<button>Toggle Button</button>',
                content: `
                    <main v-show="props.open">
                        <button>Focusable element</button>
                    </main>
                `
            }
        })

        wrapper.setData({ open: true })

        expect(wrapper.find('main').isVisible()).toBe(true)
    })

    test('the toggle can use the visibility', () => {
        const wrapper = mount(Modal, {
            localVue,
            propsData: {
                usePortal: false
            },
            scopedSlots: {
                toggle: '<button :disabled="props.open">Toggle Button</button>',
                content: `
                    <main v-show="props.open">
                        <button>Focusable element</button>
                    </main>
                `
            }
        })

        wrapper.setData({ open: true })

        expect(wrapper.find('button').element.disabled).toBe(true)
    })

    test('the toggle can open the modal', () => {
        const wrapper = mount(Modal, {
            localVue,
            propsData: {
                usePortal: false
            },
            scopedSlots: {
                toggle: '<button @click="props.openModal">Toggle Button</button>',
                content: `
                    <main v-show="props.open">
                        <button>Focusable element</button>
                    </main>
                `
            }
        })

        expect(wrapper.find('main').isVisible()).toBe(false)

        wrapper.find('button').trigger('click')

        expect(wrapper.find('main').isVisible()).toBe(true)
    })

    test('the content can close the modal', () => {
        const wrapper = mount(Modal, {
            localVue,
            propsData: {
                usePortal: false
            },
            scopedSlots: {
                toggle: '<button @click="props.openModal" class="open-modal">Toggle Button</button>',
                content: `
                    <div>
                        <main v-show="props.open">
                            <button @click="props.closeModal" class="close-modal">Close Modal</button>
                        </main>
                        <button>Focusable Element</button>
                    </div>
                `
            }
        })

        wrapper.setData({ open: true })

        wrapper.find('.close-modal').trigger('click')

        expect(wrapper.find('main').isVisible()).toBe(false)
    })

    test('it can be closed with the escaped button', () => {
        const wrapper = mount(Modal, {
            localVue,
            propsData: {
                usePortal: false
            },
            scopedSlots: {
                toggle: '<button @click="props.openModal">Toggle Button</button>',
                content: `
                    <div>
                        <main v-show="props.open">
                            <p>Content</p>
                        </main>
                        <button>Focusable element</button>
                    </div>
                `
            }
        })

        wrapper.find('button').trigger('click')

        const escapeKeyEvent = new KeyboardEvent('keyup', {
            keyCode: '27',
        });

        document.dispatchEvent(escapeKeyEvent)

        expect(wrapper.find('main').isVisible()).toBe(false)
    })

    test('scrolling on the body is disabled when the modal is open', () => {
        const wrapper = mount(Modal, {
            localVue,
            propsData: {
                usePortal: false
            },
            scopedSlots: {
                toggle: '<button @click="props.openModal" class="open-modal">Toggle Button</button>',
                content: `
                    <div>
                        <main v-show="props.open">
                            <button @click="props.closeModal" class="close-modal">Close Modal</button>
                        </main>
                        <button>Focusable Element</button>
                    </div>
                `
            }
        })

        wrapper.find('.open-modal').trigger('click')

        expect(document.querySelector('body').style.overflow).toBe('hidden')

        wrapper.find('.close-modal').trigger('click')

        expect(document.querySelector('body').style.overflow).toBe('visibile')
    })

})
