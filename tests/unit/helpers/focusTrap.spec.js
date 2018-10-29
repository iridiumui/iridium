import { mount } from '@vue/test-utils'
import FocusTrap from '../../../src/helpers/FocusTrap.vue'

describe('FocusTrap', () => {

    test('it renders the default slot', () => {
        const wrapper = mount(FocusTrap, {
            propsData: {
                active: false
            },
            slots: {
                default: '<div>default slot</div>'
            }
        })

        expect(wrapper.html()).toBe('<div>default slot</div>')
    })

    test('it can be activated and deactivated', () => {
        const wrapper = mount(FocusTrap, {
            propsData: {
                active: false
            },
            slots: {
                default: `
                    <div>
                        <button>focusable</button>
                        <input type="text">
                    </div>
                `
            }
        })

        wrapper.vm.focusTrap.activate = jest.fn(x => x)
        wrapper.vm.focusTrap.deactivate = jest.fn(x => x)

        wrapper.setProps({
            active: true
        })

        expect(wrapper.vm.focusTrap.activate.mock.calls).toHaveLength(1)

        wrapper.setProps({
            active: false
        })

        expect(wrapper.vm.focusTrap.deactivate.mock.calls).toHaveLength(1)

    })

    test('it accepts options', () => {
        const onActivateCallback = jest.fn(x => x)

        mount(FocusTrap, {
            propsData: {
                active: true,
                options: {
                    onActivate: onActivateCallback
                }
            },
            slots: {
                default: `
                    <div>
                        <button>focusable</button>
                        <input type="text">
                    </div>
                `
            }
        })

        expect(onActivateCallback.mock.calls).toHaveLength(1)
    })

})
