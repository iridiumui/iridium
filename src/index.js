const isUndefined = require("lodash/isUndefined");

import PortalVue from "portal-vue";

import Fixed from "@/helpers/Fixed";
import FixedTop from "@/helpers/FixedTop";
import FixedRight from "@/helpers/FixedRight";
import FixedBottom from "@/helpers/FixedBottom";
import FixedLeft from "@/helpers/FixedLeft";
import FixedTopRight from "@/helpers/FixedTopRight";
import FixedTopLeft from "@/helpers/FixedTopLeft";
import FixedBottomRight from "@/helpers/FixedBottomRight";
import FixedBottomLeft from "@/helpers/FixedBottomLeft";

import Breakpoint from "@/helpers/Breakpoint";
import ScreenXS from "@/helpers/ScreenXS";
import ScreenSM from "@/helpers/ScreenSM";
import ScreenMD from "@/helpers/ScreenMD";
import ScreenLG from "@/helpers/ScreenLG";
import ScreenXL from "@/helpers/ScreenXL";

import InView from "@/helpers/InView";
import ScrollTo from "@/helpers/ScrollTo";
import ClickOutside from "@/helpers/ClickOutside";

import TransitionSlideUp from "@/transitions/TransitionSlideUp";
import TransitionSlideDown from "@/transitions/TransitionSlideDown";
import TransitionSlideRight from "@/transitions/TransitionSlideRight";
import TransitionSlideLeft from "@/transitions/TransitionSlideLeft";

import TransitionFade from "@/transitions/TransitionFade";

import TransitionFadeSlideUp from "@/transitions/TransitionFadeSlideUp";
import TransitionFadeSlideRight from "@/transitions/TransitionFadeSlideRight";
import TransitionFadeSlideDown from "@/transitions/TransitionFadeSlideDown";
import TransitionFadeSlideLeft from "@/transitions/TransitionFadeSlideLeft";

import VisuallyHidden from "@/accessibility/VisuallyHidden";
import FocusTrap from "@/accessibility/FocusTrap";

import HamburgerNav from "@/core/HamburgerNav";
import Modal from "@/core/Modal";

import CodeBlock from "@/extra/CodeBlock";
import CookieBanner from "@/extra/CookieBanner";

const standardOptions = {
    prefix: "iridium-"
};

export default {
    install(Vue, options = standardOptions) {
        Vue.use(PortalVue);

        const prefix = isUndefined(options.prefix) ? standardOptions.prefix : options.prefix;

        Vue.component(`${prefix}fixed`, Fixed);
        Vue.component(`${prefix}fixed-top`, FixedTop);
        Vue.component(`${prefix}fixed-right`, FixedRight);
        Vue.component(`${prefix}fixed-bottom`, FixedBottom);
        Vue.component(`${prefix}fixed-left`, FixedLeft);
        Vue.component(`${prefix}fixed-top-right`, FixedTopRight);
        Vue.component(`${prefix}fixed-top-left`, FixedTopLeft);
        Vue.component(`${prefix}fixed-bottom-right`, FixedBottomRight);
        Vue.component(`${prefix}fixed-bottom-left`, FixedBottomLeft);

        Vue.component(`${prefix}breakpoint`, Breakpoint);
        Vue.component(`${prefix}screen-xs`, ScreenXS);
        Vue.component(`${prefix}screen-sm`, ScreenSM);
        Vue.component(`${prefix}screen-md`, ScreenMD);
        Vue.component(`${prefix}screen-lg`, ScreenLG);
        Vue.component(`${prefix}screen-xl`, ScreenXL);

        Vue.component(`${prefix}in-view`, InView);
        Vue.component(`${prefix}scroll-to`, ScrollTo);
        Vue.component(`${prefix}click-outside`, ClickOutside);

        Vue.component(`${prefix}transition-slide-up`, TransitionSlideUp);
        Vue.component(`${prefix}transition-slide-down`, TransitionSlideDown);
        Vue.component(`${prefix}transition-slide-right`, TransitionSlideRight);
        Vue.component(`${prefix}transition-slide-left`, TransitionSlideLeft);

        Vue.component(`${prefix}transition-fade`, TransitionFade);

        Vue.component(`${prefix}transition-fade-slide-up`, TransitionFadeSlideUp);
        Vue.component(`${prefix}transition-fade-slide-right`, TransitionFadeSlideRight);
        Vue.component(`${prefix}transition-fade-slide-down`, TransitionFadeSlideDown);
        Vue.component(`${prefix}transition-fade-slide-left`, TransitionFadeSlideLeft);

        Vue.component(`${prefix}visually-hidden`, VisuallyHidden);
        Vue.component(`${prefix}focus-trap`, FocusTrap);

        Vue.component(`${prefix}hamburger-nav`, HamburgerNav);
        Vue.component(`${prefix}modal`, Modal);

        Vue.component(`${prefix}code-block`, CodeBlock);
        Vue.component(`${prefix}cookie-banner`, CookieBanner);
    }
};

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
};
