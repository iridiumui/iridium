const isUndefined = require('lodash/isUndefined')

import Fixed from './helpers/Fixed.vue'
import FixedTop from './helpers/FixedTop.vue'
import FixedRight from './helpers/FixedRight.vue'
import FixedBottom from './helpers/FixedBottom.vue'
import FixedLeft from './helpers/FixedLeft.vue'

import Breakpoint from './helpers/Breakpoint.vue'
import ScreenXS from './helpers/ScreenXS.vue'
import ScreenSM from './helpers/ScreenSM.vue'
import ScreenMD from './helpers/ScreenMD.vue'
import ScreenLG from './helpers/ScreenLG.vue'
import ScreenXL from './helpers/ScreenXL.vue'

import VisuallyHidden from './helpers/VisuallyHidden.vue'
import FocusTrap from './helpers/FocusTrap.vue'

import HamburgerNav from './core/HamburgerNav.vue'

import CodeBlock from './extra/CodeBlock.vue'

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
        Vue.component(`${prefix}screen-xs`, ScreenXS)
        Vue.component(`${prefix}screen-sm`, ScreenSM)
        Vue.component(`${prefix}screen-md`, ScreenMD)
        Vue.component(`${prefix}screen-lg`, ScreenLG)
        Vue.component(`${prefix}screen-xl`, ScreenXL)

        Vue.component(`${prefix}visually-hidden`, VisuallyHidden)
        Vue.component(`${prefix}focus-trap`, FocusTrap)

        Vue.component(`${prefix}hamburger-nav`, HamburgerNav)

        Vue.component(`${prefix}code-block`, CodeBlock)
    }
}

export {
    Fixed,
    FixedTop,
    FixedRight,
    FixedBottom,
    FixedLeft,
    Breakpoint,
    ScreenXS,
    ScreenSM,
    ScreenMD,
    ScreenLG,
    ScreenXL,
    VisuallyHidden,
    FocusTrap,
    HamburgerNav,
    CodeBlock,
}
