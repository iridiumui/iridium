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
})
