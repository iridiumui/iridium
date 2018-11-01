import { mount } from '@vue/test-utils'
import CodeBlock from '../../../src/extra/CodeBlock.vue'

const content = `
    <pre>
        <code>
            Code
        </code>
    </pre>
`

describe('Code Block', () => {

    test('it can render the content', () => {
        const wrapper = mount(CodeBlock, {
            slots: {
                content: content
            },
            scopedSlots: {
                button: '<button>copy</button>'
            }
        })

        expect(wrapper.contains('pre')).toBe(true)
        expect(wrapper.contains('code')).toBe(true)
        expect(wrapper.find('code').text()).toBe('Code')
    })

    test('it can render the button', () => {
        const wrapper = mount(CodeBlock, {
            slots: {
                content: content
            },
            scopedSlots: {
                button: '<button>copy</button>'
            }
        })

        expect(wrapper.contains('button')).toBe(true)
        expect(wrapper.find('button').text()).toBe('copy')
    })

    test('the button can copy the content', () => {
        const wrapper = mount(CodeBlock, {
            slots: {
                content: content
            },
            scopedSlots: {
                button: '<button @click="props.copy">copy</button>'
            }
        })

        const copyStub = jest.fn(x => x)

        wrapper.setMethods({ copy: copyStub })

        wrapper.find('button').trigger('click')

        expect(copyStub.mock.calls).toHaveLength(1)
    })

    test('the button has access to all the states', () => {
        const wrapper = mount(CodeBlock, {
            slots: {
                content: content
            },
            scopedSlots: {
                button: `
                    <button>
                        <span v-if="props.copied" class="success-message">Copied</span>
                        <span v-else-if="props.error" class="error-message">Error</span>
                        <span v-else class="default-message">Copy</span>
                    </button>
                `
            }
        })

        wrapper.setData({
            copied: false,
            error: false
        })

        expect(wrapper.contains('.success-message')).toBe(false)
        expect(wrapper.contains('.error-message')).toBe(false)
        expect(wrapper.find('.default-message').isVisible()).toBe(true)


        wrapper.setData({
            copied: true,
            error: false
        })

        expect(wrapper.find('.success-message').isVisible()).toBe(true)
        expect(wrapper.contains('.error-message')).toBe(false)
        expect(wrapper.contains('.default-message')).toBe(false)


        wrapper.setData({
            copied: false,
            error: true
        })

        expect(wrapper.contains('.success-message')).toBe(false)
        expect(wrapper.find('.error-message').isVisible()).toBe(true)
        expect(wrapper.contains('.default-message')).toBe(false)
    })

    test('a callback can be run when the copy was successful', () => {
        const callback = jest.fn(x => x)

        const wrapper = mount(CodeBlock, {
            slots: {
                content: content
            },
            scopedSlots: {
                button: '<button @click="props.copy">copy</button>'
            },
            propsData: {
                successCallback: callback
            }
        })

        const copyStub = jest.fn(() => {
            wrapper.setData({ copied: true })
        })

        wrapper.setMethods({ copy: copyStub })

        wrapper.find('button').trigger('click')

        expect(callback.mock.calls).toHaveLength(1)
        expect(callback.mock.calls[0][0] instanceof Function).toBe(true)
    })

    test('a callback can be run when the copy failed', () => {
        const callback = jest.fn(x => x)

        const wrapper = mount(CodeBlock, {
            slots: {
                content: content
            },
            scopedSlots: {
                button: '<button @click="props.copy">copy</button>'
            },
            propsData: {
                errorCallback: callback
            }
        })

        const copyStub = jest.fn(() => {
            wrapper.setData({ error: true })
        })

        wrapper.setMethods({ copy: copyStub })

        wrapper.find('button').trigger('click')

        expect(callback.mock.calls).toHaveLength(1)
        expect(callback.mock.calls[0][0] instanceof Function).toBe(true)
    })

})
