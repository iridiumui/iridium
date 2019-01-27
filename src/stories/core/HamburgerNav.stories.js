import { storiesOf } from "@storybook/vue";
import HamburgerNav from "../../core/HamburgerNav";

const HamburgerNavToggleStyles = {
    backgroundColor: "none",
    border: "none"
};

const HamburgerNavStyles = {
    width: "25vw",
    backgroundColor: "#333",
    padding: "1rem",
    position: "fixed",
    top: 0,
    left: 0,
    bottom: 0
};

const HamburgerNavLinkItemStyles = {
    display: "block",
    color: "#fff",
    marginTop: "1rem"
};

export default storiesOf("Core|Hamburger Nav", module)
    .add("It can render a toggle and content", () => ({
        components: { HamburgerNav },
        props: {
            toggleStyles: {
                type: Object,
                default: function () {
                    return HamburgerNavToggleStyles;
                }
            },
            navStyles: {
                type: Object,
                default: function () {
                    return HamburgerNavStyles;
                }
            },
            linkItemStyles: {
                type: Object,
                default: function () {
                    return HamburgerNavLinkItemStyles;
                }
            }
        },
        template: `
            <HamburgerNav>
                <button
                    type="button"
                    slot="toggle"
                    slot-scope="{ open, toggle }"
                    @click="toggle"
                    :style="toggleStyles"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 124 124">
                        <g fill="#333">
                            <path d="M112 6H12C5.4 6 0 11.4 0 18s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12zM112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12zM112 94H12c-6.6 0-12 5.4-12 12s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"/>
                        </g>
                    </svg>
                </button>
                <div
                    slot="content"
                    slot-scope="{ open, toggle }"
                    v-show="open"
                    :style="navStyles"
                >
                    <button
                        type="button"
                        @click="toggle"
                        :style="toggleStyles"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.971 47.971" width="2rem" height="2rem">
                            <path d="M28.228 23.986L47.092 5.122a2.998 2.998 0 0 0 0-4.242 2.998 2.998 0 0 0-4.242 0L23.986 19.744 5.121.88a2.998 2.998 0 0 0-4.242 0 2.998 2.998 0 0 0 0 4.242l18.865 18.864L.879 42.85a2.998 2.998 0 1 0 4.242 4.241l18.865-18.864L42.85 47.091c.586.586 1.354.879 2.121.879s1.535-.293 2.121-.879a2.998 2.998 0 0 0 0-4.242L28.228 23.986z" fill="#cfcfcf"/>
                        </svg>
                    </button>
                    <nav>
                        <a href="#" :style="linkItemStyles">Home</a>
                        <a href="#" :style="linkItemStyles">About</a>
                        <a href="#" :style="linkItemStyles">Blog</a>
                        <a href="#" :style="linkItemStyles">News</a>
                    </nav>
                </div>
            </HamburgerNav>
        `
    }))
    .add("It can render a default slot", () => ({
        components: { HamburgerNav },
        props: {
            toggleStyles: {
                type: Object,
                default: function () {
                    return HamburgerNavToggleStyles;
                }
            },
            navStyles: {
                type: Object,
                default: function () {
                    return HamburgerNavStyles;
                }
            },
            linkItemStyles: {
                type: Object,
                default: function () {
                    return HamburgerNavLinkItemStyles;
                }
            }
        },
        template: `
            <HamburgerNav>
                <div slot-scope="{ open, toggle }">
                    <button
                        type="button"
                        @click="toggle"
                        :style="toggleStyles"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 124 124">
                            <g fill="#333">
                                <path d="M112 6H12C5.4 6 0 11.4 0 18s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12zM112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12zM112 94H12c-6.6 0-12 5.4-12 12s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"/>
                            </g>
                        </svg>
                    </button>
                    <div
                        v-show="open"
                        :style="navStyles"
                    >
                        <button
                            type="button"
                            @click="toggle"
                            :style="toggleStyles"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.971 47.971" width="2rem" height="2rem">
                                <path d="M28.228 23.986L47.092 5.122a2.998 2.998 0 0 0 0-4.242 2.998 2.998 0 0 0-4.242 0L23.986 19.744 5.121.88a2.998 2.998 0 0 0-4.242 0 2.998 2.998 0 0 0 0 4.242l18.865 18.864L.879 42.85a2.998 2.998 0 1 0 4.242 4.241l18.865-18.864L42.85 47.091c.586.586 1.354.879 2.121.879s1.535-.293 2.121-.879a2.998 2.998 0 0 0 0-4.242L28.228 23.986z" fill="#cfcfcf"/>
                            </svg>
                        </button>
                        <nav>
                            <a href="#" :style="linkItemStyles">Home</a>
                            <a href="#" :style="linkItemStyles">About</a>
                            <a href="#" :style="linkItemStyles">Blog</a>
                            <a href="#" :style="linkItemStyles">News</a>
                        </nav>
                    </div>
                </div>
            </HamburgerNav>
        `
    }))
    .add("It can be open by default", () => ({
        components: { HamburgerNav },
        props: {
            toggleStyles: {
                type: Object,
                default: function () {
                    return HamburgerNavToggleStyles;
                }
            },
            navStyles: {
                type: Object,
                default: function () {
                    return HamburgerNavStyles;
                }
            },
            linkItemStyles: {
                type: Object,
                default: function () {
                    return HamburgerNavLinkItemStyles;
                }
            }
        },
        template: `
            <HamburgerNav :open-default="true">
                <button
                    type="button"
                    slot="toggle"
                    slot-scope="{ open, toggle }"
                    @click="toggle"
                    :style="toggleStyles"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 124 124">
                        <g fill="#333">
                            <path d="M112 6H12C5.4 6 0 11.4 0 18s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12zM112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12zM112 94H12c-6.6 0-12 5.4-12 12s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"/>
                        </g>
                    </svg>
                </button>
                <div
                    slot="content"
                    slot-scope="{ open, toggle }"
                    v-show="open"
                    :style="navStyles"
                >
                    <button
                        type="button"
                        @click="toggle"
                        :style="toggleStyles"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.971 47.971" width="2rem" height="2rem">
                            <path d="M28.228 23.986L47.092 5.122a2.998 2.998 0 0 0 0-4.242 2.998 2.998 0 0 0-4.242 0L23.986 19.744 5.121.88a2.998 2.998 0 0 0-4.242 0 2.998 2.998 0 0 0 0 4.242l18.865 18.864L.879 42.85a2.998 2.998 0 1 0 4.242 4.241l18.865-18.864L42.85 47.091c.586.586 1.354.879 2.121.879s1.535-.293 2.121-.879a2.998 2.998 0 0 0 0-4.242L28.228 23.986z" fill="#cfcfcf"/>
                        </svg>
                    </button>
                    <nav>
                        <a href="#" :style="linkItemStyles">Home</a>
                        <a href="#" :style="linkItemStyles">About</a>
                        <a href="#" :style="linkItemStyles">Blog</a>
                        <a href="#" :style="linkItemStyles">News</a>
                    </nav>
                </div>
            </HamburgerNav>
        `
    }));
