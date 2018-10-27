import Fixed from './helpers/Fixed.vue'
import FixedTop from './helpers/FixedTop.vue'

export default {
    install(Vue) {
        Vue.component('iridium-fixed', Fixed)
        Vue.component('iridium-fixed-top', FixedTop)
    }
}

export {
    Fixed
    Fixed,
    FixedTop,
}
