import { storiesOf } from "@storybook/vue";
import CookieBanner from "@/components/extra/CookieBanner";

export default storiesOf("Extra|Cookie Banner", module)
    .add("It renders a cookie banner", () => ({
        components: { CookieBanner },
        template: `
            <CookieBanner>
                <div
                    slot-scope="{ accepted }"
                    v-if="!accepted"
                    class="fixed pin-b w-full bg-black py-4"
                >
                    <div class="w-3/4 mx-auto flex justify-between items-center">
                        <p class="text-white text-lg">This website uses cookies.</p>
                        <button
                            type="button"
                            class="button"
                        >
                            Accept
                        </button>
                    </div>
                </div>
            </CookieBanner>
        `
    }))
    .add("Cookies can be accepted", () => ({
        components: { CookieBanner },
        methods: {
            resetLocalStorage() {
                localStorage.removeItem("cookies_accepted");
            }
        },
        template: `
            <div>
                <div class="p-4">
                    <button
                        type="button"
                        @click="resetLocalStorage"
                        class="button mb-2"
                    >
                        Reset Local Storage
                    </button>
                    <p>
                        (You need to reload after resetting)
                    </p>
                </div>
                <CookieBanner>
                    <div
                        slot-scope="{ accept, accepted }"
                        v-if="!accepted"
                        class="fixed pin-b w-full bg-black py-4"
                    >
                        <div class="w-3/4 mx-auto flex justify-between items-center">
                            <p class="text-white text-lg">This website uses cookies.</p>
                            <button
                                type="button"
                                @click="accept"
                                class="button"
                            >
                                Accept
                            </button>
                        </div>
                    </div>
                </CookieBanner>
            </div>
        `
    }))
    .add("Cookie Banner is only shown if cookies haven't been accepted" , () => ({
        components: { CookieBanner },
        methods: {
            resetLocalStorage() {
                localStorage.removeItem("cookies_accepted");
            }
        },
        template: `
            <div>
                <div class="p-4">
                    <button
                        type="button"
                        @click="resetLocalStorage"
                        class="button mb-2"
                    >
                        Reset Local Storage
                    </button>
                    <p>
                        (Reload the page after clicking accept)
                    </p>
                </div>
                <CookieBanner>
                    <div
                        slot-scope="{ accept, accepted }"
                        v-if="!accepted"
                        class="fixed pin-b w-full bg-black py-4"
                    >
                        <div class="w-3/4 mx-auto flex justify-between items-center">
                            <p class="text-white text-lg">This website uses cookies.</p>
                            <button
                                type="button"
                                @click="accept"
                                class="button"
                            >
                                Accept
                            </button>
                        </div>
                    </div>
                </CookieBanner>
            </div>
        `
    }));
