const isUndefined = require('lodash/isUndefined')

import Fixed from './helpers/Fixed.vue'
import FixedTop from './helpers/FixedTop.vue'
import FixedRight from './helpers/FixedRight.vue'
import FixedBottom from './helpers/FixedBottom.vue'
import FixedLeft from './helpers/FixedLeft.vue'

import Breakpoint from './helpers/Breakpoint.vue'

const standardOptions = {
    prefix: 'iridium-'
}

export default {
    install(Vue, options = standardOptions) {
        const prefix = isUndefined(options.prefix) ? standardOptions.prefix : options.prefix

        Vue.component(`${prefix}fixed`, Fixed)
        Vue.component(`${prefix}fixed-top`, FixedTop)
        Vue.component(`${prefix}fixed-right`, FixedRight)
        Vue.component(`${prefix}fixed-bottom`, FixedBottom)
        Vue.component(`${prefix}fixed-left`, FixedLeft)

        Vue.component(`${prefix}breakpoint`, Breakpoint)
    }
}

export {
    Fixed,
    FixedTop,
    FixedRight,
    FixedBottom,
    FixedLeft,
    Breakpoint
}
