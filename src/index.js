import Fixed from './helpers/Fixed.vue'
import FixedTop from './helpers/FixedTop.vue'
import FixedRight from './helpers/FixedRight.vue'
import FixedBottom from './helpers/FixedBottom.vue'

export default {
    install(Vue) {
        Vue.component('iridium-fixed', Fixed)
        Vue.component('iridium-fixed-top', FixedTop)
        Vue.component('iridium-fixed-right', FixedRight)
        Vue.component('iridium-fixed-bottom', FixedBottom)
    }
}

export {
    Fixed
    Fixed,
    FixedTop,
    FixedRight,
    FixedBottom,
}
