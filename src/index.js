const isUndefined = require('lodash/isUndefined')

import PortalVue from 'portal-vue'

import Fixed from './helpers/Fixed.vue'
import FixedTop from './helpers/FixedTop.vue'
import FixedRight from './helpers/FixedRight.vue'
import FixedBottom from './helpers/FixedBottom.vue'
import FixedLeft from './helpers/FixedLeft.vue'
import FixedTopRight from './helpers/FixedTopRight.vue'
import FixedTopLeft from './helpers/FixedTopLeft.vue'
import FixedBottomRight from './helpers/FixedBottomRight.vue'
import FixedBottomLeft from './helpers/FixedBottomLeft.vue'

import Breakpoint from './helpers/Breakpoint.vue'
import ScreenXS from './helpers/ScreenXS.vue'
import ScreenSM from './helpers/ScreenSM.vue'
import ScreenMD from './helpers/ScreenMD.vue'
import ScreenLG from './helpers/ScreenLG.vue'
import ScreenXL from './helpers/ScreenXL.vue'

import InView from './helpers/InView.vue'
import ScrollTo from './helpers/ScrollTo.vue'
import ClickOutside from './helpers/ClickOutside.vue'

import TransitionSlideUp from './transitions/TransitionSlideUp.vue'
import TransitionSlideDown from './transitions/TransitionSlideDown.vue'
import TransitionSlideRight from './transitions/TransitionSlideRight.vue'
import TransitionSlideLeft from './transitions/TransitionSlideLeft.vue'

import TransitionFade from './transitions/TransitionFade.vue'

import TransitionFadeSlideUp from './transitions/TransitionFadeSlideUp.vue'
import TransitionFadeSlideRight from './transitions/TransitionFadeSlideRight.vue'
import TransitionFadeSlideDown from './transitions/TransitionFadeSlideDown.vue'
import TransitionFadeSlideLeft from './transitions/TransitionFadeSlideLeft.vue'

import VisuallyHidden from './helpers/VisuallyHidden.vue'
import FocusTrap from './helpers/FocusTrap.vue'

import HamburgerNav from './core/HamburgerNav.vue'
import Modal from './core/Modal.vue'

import CodeBlock from './extra/CodeBlock.vue'
import CookieBanner from './extra/CookieBanner.vue'

const standardOptions = {
    prefix: 'iridium-'
}

export default {
    install(Vue, options = standardOptions) {
        Vue.use(PortalVue)

        const prefix = isUndefined(options.prefix) ? standardOptions.prefix : options.prefix

        Vue.component(`${prefix}fixed`, Fixed)
        Vue.component(`${prefix}fixed-top`, FixedTop)
        Vue.component(`${prefix}fixed-right`, FixedRight)
        Vue.component(`${prefix}fixed-bottom`, FixedBottom)
        Vue.component(`${prefix}fixed-left`, FixedLeft)
        Vue.component(`${prefix}fixed-top-right`, FixedTopRight)
        Vue.component(`${prefix}fixed-top-left`, FixedTopLeft)
        Vue.component(`${prefix}fixed-bottom-right`, FixedBottomRight)
        Vue.component(`${prefix}fixed-bottom-left`, FixedBottomLeft)

        Vue.component(`${prefix}breakpoint`, Breakpoint)
        Vue.component(`${prefix}screen-xs`, ScreenXS)
        Vue.component(`${prefix}screen-sm`, ScreenSM)
        Vue.component(`${prefix}screen-md`, ScreenMD)
        Vue.component(`${prefix}screen-lg`, ScreenLG)
        Vue.component(`${prefix}screen-xl`, ScreenXL)

        Vue.component(`${prefix}in-view`, InView)
        Vue.component(`${prefix}scroll-to`, ScrollTo)
        Vue.component(`${prefix}click-outside`, ClickOutside)

        Vue.component(`${prefix}transition-slide-up`, TransitionSlideUp)
        Vue.component(`${prefix}transition-slide-down`, TransitionSlideDown)
        Vue.component(`${prefix}transition-slide-right`, TransitionSlideRight)
        Vue.component(`${prefix}transition-slide-left`, TransitionSlideLeft)

        Vue.component(`${prefix}transition-fade`, TransitionFade)

        Vue.component(`${prefix}transition-fade-slide-up`, TransitionFadeSlideUp)
        Vue.component(`${prefix}transition-fade-slide-right`, TransitionFadeSlideRight)
        Vue.component(`${prefix}transition-fade-slide-down`, TransitionFadeSlideDown)
        Vue.component(`${prefix}transition-fade-slide-left`, TransitionFadeSlideLeft)

        Vue.component(`${prefix}visually-hidden`, VisuallyHidden)
        Vue.component(`${prefix}focus-trap`, FocusTrap)

        Vue.component(`${prefix}hamburger-nav`, HamburgerNav)
        Vue.component(`${prefix}modal`, Modal)

        Vue.component(`${prefix}code-block`, CodeBlock)
        Vue.component(`${prefix}cookie-banner`, CookieBanner)
    }
}

export {
    Fixed,
    FixedTop,
    FixedRight,
    FixedBottom,
    FixedLeft,
    FixedTopRight,
    FixedTopLeft,
    FixedBottomRight,
    FixedBottomLeft,

    Breakpoint,
    ScreenXS,
    ScreenSM,
    ScreenMD,
    ScreenLG,
    ScreenXL,

    InView,
    ScrollTo,
    ClickOutside,

    TransitionSlideUp,
    TransitionSlideDown,
    TransitionSlideRight,
    TransitionSlideLeft,

    TransitionFade,

    TransitionFadeSlideUp,
    TransitionFadeSlideRight,
    TransitionFadeSlideDown,
    TransitionFadeSlideLeft,

    VisuallyHidden,
    FocusTrap,

    HamburgerNav,
    CodeBlock,
    CookieBanner,
}
