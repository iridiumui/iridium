import { mount } from '@vue/test-utils'
import CodeBlock from '../../../src/extra/CodeBlock.vue'

describe('Code Block', () => {

    test('it can render the content', () => {
        const wrapper = mount(CodeBlock, {
            slots: {
                content: `
                    <pre>
                        <code>
                            Code
                        </code>
                    </pre>
                `
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
                content: `
                    <pre>
                        <code>
                            Code
                        </code>
                    </pre>
                `
            },
            scopedSlots: {
                button: '<button>copy</button>'
            }
        })

        expect(wrapper.contains('button')).toBe(true)
        expect(wrapper.find('button').text()).toBe('copy')
    })

})
