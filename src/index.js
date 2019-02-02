const isUndefined = require("lodash/isUndefined");

import PortalVue from "portal-vue";

import Fixed from "@/components/helpers/Fixed";
import FixedTop from "@/components/helpers/FixedTop";
import FixedRight from "@/components/helpers/FixedRight";
import FixedBottom from "@/components/helpers/FixedBottom";
import FixedLeft from "@/components/helpers/FixedLeft";
import FixedTopRight from "@/components/helpers/FixedTopRight";
import FixedTopLeft from "@/components/helpers/FixedTopLeft";
import FixedBottomRight from "@/components/helpers/FixedBottomRight";
import FixedBottomLeft from "@/components/helpers/FixedBottomLeft";

import Breakpoint from "@/components/helpers/Breakpoint";
import ScreenXS from "@/components/helpers/ScreenXS";
import ScreenSM from "@/components/helpers/ScreenSM";
import ScreenMD from "@/components/helpers/ScreenMD";
import ScreenLG from "@/components/helpers/ScreenLG";
import ScreenXL from "@/components/helpers/ScreenXL";

import InView from "@/components/helpers/InView";
import ScrollTo from "@/components/helpers/ScrollTo";
import ClickOutside from "@/components/helpers/ClickOutside";
import Toggle from "@/components/helpers/Toggle";

import TransitionSlideUp from "@/components/transitions/TransitionSlideUp";
import TransitionSlideDown from "@/components/transitions/TransitionSlideDown";
import TransitionSlideRight from "@/components/transitions/TransitionSlideRight";
import TransitionSlideLeft from "@/components/transitions/TransitionSlideLeft";

import TransitionFade from "@/components/transitions/TransitionFade";

import TransitionFadeSlideUp from "@/components/transitions/TransitionFadeSlideUp";
import TransitionFadeSlideRight from "@/components/transitions/TransitionFadeSlideRight";
import TransitionFadeSlideDown from "@/components/transitions/TransitionFadeSlideDown";
import TransitionFadeSlideLeft from "@/components/transitions/TransitionFadeSlideLeft";

import VisuallyHidden from "@/components/accessibility/VisuallyHidden";
import FocusTrap from "@/components/accessibility/FocusTrap";

import HamburgerNav from "@/components/core/HamburgerNav";
import Modal from "@/components/core/Modal";

import CodeBlock from "@/components/extra/CodeBlock";
import CookieBanner from "@/components/extra/CookieBanner";

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
        Vue.component(`${prefix}toggle`, Toggle);

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
    Toggle,

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
