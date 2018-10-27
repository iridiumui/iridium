import Vue from 'vue'
import Iridium from '../../src/index.js'

describe('Plugin Options', () => {

    test('the component prefix can be overwritten', () => {
        Vue.use(Iridium, {
            'prefix': ''
        })

        expect(Vue.options.components['iridium-fixed']).toBeUndefined()
        expect(Vue.options.components['fixed']).toBeDefined()
    })

})
