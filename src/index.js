import Fixed from './helpers/Fixed.vue'
import FixedTop from './helpers/FixedTop.vue'
import FixedRight from './helpers/FixedRight.vue'

export default {
    install(Vue) {
        Vue.component('iridium-fixed', Fixed)
        Vue.component('iridium-fixed-top', FixedTop)
        Vue.component('iridium-fixed-right', FixedRight)
    }
}

export {
    Fixed
    Fixed,
    FixedTop,
    FixedRight,
}
