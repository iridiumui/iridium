import { storiesOf } from '@storybook/vue';
import CookieBanner from '../../extra/CookieBanner';

const CookieBannerStyles = {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#333'
};

const CookieBannerContainerStyles = {
    maxWidth: '80vw',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
};

export default storiesOf('Extra|Cookie Banner', module)
    .add('It renders a cookie banner', () => ({
        components: { CookieBanner },
        props: {
            bannerStyles: {
                type: Object,
                default: function () {
                    return CookieBannerStyles;
                }
            },
            containerStyles: {
                type: Object,
                default: function () {
                    return CookieBannerContainerStyles;
                }
            }
        },
        template: `
            <CookieBanner>
                <div
                    slot-scope="{ accepted }"
                    v-if="!accepted"
                    :style="bannerStyles"
                >
                    <div :style="containerStyles">
                        <p style="color: #fff;">This website uses cookies.</p>
                        <button
                            type="button"
                        >
                            Accept
                        </button>
                    </div>
                </div>
            </CookieBanner>
        `
    }))
    .add('Cookies can be accepted', () => ({
        components: { CookieBanner },
        props: {
            bannerStyles: {
                type: Object,
                default: function () {
                    return CookieBannerStyles;
                }
            },
            containerStyles: {
                type: Object,
                default: function () {
                    return CookieBannerContainerStyles;
                }
            }
        },
        methods: {
            resetLocalStorage() {
                localStorage.removeItem("cookies_accepted")
            }
        },
        template: `
            <div>
                <button
                    type="button"
                    @click="resetLocalStorage"
                >
                    Reset Local Storage
                </button>
                <p>
                    (You need to reload after resetting)
                </p>
                <CookieBanner>
                    <div
                        slot-scope="{ accept, accepted }"
                        v-if="!accepted"
                        :style="bannerStyles"
                    >
                        <div :style="containerStyles">
                            <p style="color: #fff;">This website uses cookies.</p>
                            <button
                                type="button"
                                @click="accept"
                            >
                                Accept
                            </button>
                        </div>
                    </div>
                </CookieBanner>
            </div>
        `
    }))
    .add('Cookie Banner is only shown if cookies haven\'t been accepted' , () => ({
        components: { CookieBanner },
        props: {
            bannerStyles: {
                type: Object,
                default: function () {
                    return CookieBannerStyles;
                }
            },
            containerStyles: {
                type: Object,
                default: function () {
                    return CookieBannerContainerStyles;
                }
            }
        },
        methods: {
            resetLocalStorage() {
                localStorage.removeItem("cookies_accepted")
            }
        },
        template: `
            <div>
                <button
                    type="button"
                    @click="resetLocalStorage"
                >
                    Reset Local Storage
                </button>
                <p>
                    (Reload the page after clicking accept)
                </p>
                <CookieBanner>
                    <div
                        slot-scope="{ accept, accepted }"
                        v-if="!accepted"
                        :style="bannerStyles"
                    >
                        <div :style="containerStyles">
                            <p style="color: #fff;">This website uses cookies.</p>
                            <button
                                type="button"
                                @click="accept"
                            >
                                Accept
                            </button>
                        </div>
                    </div>
                </CookieBanner>
            </div>
        `
    }))
