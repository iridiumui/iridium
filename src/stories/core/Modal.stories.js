import Vue from "vue";
import { storiesOf } from "@storybook/vue";
import centered from "@storybook/addon-centered";
import Modal from "@/components/core/Modal";
import PortalVue from "portal-vue";

Vue.use(PortalVue);

export default storiesOf("Core|Modal", module)
    .addDecorator(centered)
    .add("It can render a toggle and content", () => ({
        components: { Modal },
        template: `
            <div>
                <Modal :use-portal="false">
                    <button
                        type="button"
                        slot="button"
                        slot-scope="{ toggle }"
                        @click="toggle"
                        class="button"
                    >
                        This is the toggle
                    </button>
                    <div
                        slot="content"
                        slot-scope="{ open, toggle }"
                        v-show="open"
                        class="absolute pin bg-black-transparent flex justify-center items-center"
                    >
                        <div class="bg-white rounded w-1/2 p-4">
                            <header class="flex justify-between items-center mb-8">
                                <h2>This is the content</h2>
                                <button
                                    type="button"
                                    @click="toggle"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.971 47.971" width="2rem" height="2rem">
                                        <path d="M28.228 23.986L47.092 5.122a2.998 2.998 0 0 0 0-4.242 2.998 2.998 0 0 0-4.242 0L23.986 19.744 5.121.88a2.998 2.998 0 0 0-4.242 0 2.998 2.998 0 0 0 0 4.242l18.865 18.864L.879 42.85a2.998 2.998 0 1 0 4.242 4.241l18.865-18.864L42.85 47.091c.586.586 1.354.879 2.121.879s1.535-.293 2.121-.879a2.998 2.998 0 0 0 0-4.242L28.228 23.986z" fill="#cfcfcf"/>
                                    </svg>
                                </button>
                            </header>
                            <main>
                                <p class="text-grey-darker">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis eveniet mollitia dolore animi necessitatibus illo temporibus distinctio molestias praesentium, dolor saepe consequuntur nihil reiciendis neque reprehenderit architecto doloremque sint veniam?
                                </p>
                            </main>
                        </div>
                    </div>
                </Modal>
            </div>
        `
    }))
    .add("It can render inside a portal", () => ({
        components: { Modal },
        template: `
            <div class="max-w-2/3 m-auto">
                <Modal :use-portal="true" portal-name="modal">
                    <button
                        type="button"
                        slot="button"
                        slot-scope="{ toggle }"
                        @click="toggle"
                        class="button mb-4"
                    >
                        Render inside portal
                    </button>
                    <div
                        slot="content"
                        slot-scope="{ open, toggle }"
                        v-show="open"
                        class="absolute pin bg-black-transparent flex justify-center items-center"
                    >
                        <div class="bg-white rounded w-1/2 p-4">
                            <header class="flex justify-between items-center mb-8">
                                <h2>This is a rendered in a portal</h2>
                                <button
                                    type="button"
                                    @click="toggle"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.971 47.971" width="2rem" height="2rem">
                                        <path d="M28.228 23.986L47.092 5.122a2.998 2.998 0 0 0 0-4.242 2.998 2.998 0 0 0-4.242 0L23.986 19.744 5.121.88a2.998 2.998 0 0 0-4.242 0 2.998 2.998 0 0 0 0 4.242l18.865 18.864L.879 42.85a2.998 2.998 0 1 0 4.242 4.241l18.865-18.864L42.85 47.091c.586.586 1.354.879 2.121.879s1.535-.293 2.121-.879a2.998 2.998 0 0 0 0-4.242L28.228 23.986z" fill="#cfcfcf"/>
                                    </svg>
                                </button>
                            </header>
                            <main>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis eveniet mollitia dolore animi necessitatibus illo temporibus distinctio molestias praesentium, dolor saepe consequuntur nihil reiciendis neque reprehenderit architecto doloremque sint veniam?
                                </p>
                            </main>
                        </div>
                    </div>
                </Modal>
                <section class="mb-12">
                    <h2 class="mb-4">This comes before the portal target</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio amet dolorum minima dignissimos velit rem natus nesciunt quaerat assumenda, perspiciatis commodi placeat nobis eligendi pariatur cum ullam libero accusantium sequi.
                    </p>
                </section>
                <h4>The portal target is down here</h4>
                <portal-target name="modal"></portal-target>
            </div>
        `
    }))
    .add("It can render outside a portal", () => ({
        components: { Modal },
        template: `
            <div>
                <Modal :use-portal="false">
                    <button
                        type="button"
                        slot="button"
                        slot-scope="{ toggle }"
                        @click="toggle"
                        class="button"
                    >
                        This will render the modal right here in the dom
                    </button>
                    <div
                        slot="content"
                        slot-scope="{ open, toggle }"
                        v-show="open"
                        class="absolute pin bg-black-transparent flex justify-center items-center"
                    >
                        <div class="bg-white rounded w-1/2 p-4">
                            <header class="flex justify-between items-center mb-8">
                                <h2>This is the modal</h2>
                                <button
                                    type="button"
                                    @click="toggle"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.971 47.971" width="2rem" height="2rem">
                                        <path d="M28.228 23.986L47.092 5.122a2.998 2.998 0 0 0 0-4.242 2.998 2.998 0 0 0-4.242 0L23.986 19.744 5.121.88a2.998 2.998 0 0 0-4.242 0 2.998 2.998 0 0 0 0 4.242l18.865 18.864L.879 42.85a2.998 2.998 0 1 0 4.242 4.241l18.865-18.864L42.85 47.091c.586.586 1.354.879 2.121.879s1.535-.293 2.121-.879a2.998 2.998 0 0 0 0-4.242L28.228 23.986z" fill="#cfcfcf"/>
                                    </svg>
                                </button>
                            </header>
                            <main>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis eveniet mollitia dolore animi necessitatibus illo temporibus distinctio molestias praesentium, dolor saepe consequuntur nihil reiciendis neque reprehenderit architecto doloremque sint veniam?
                                </p>
                            </main>
                        </div>
                    </div>
                </Modal>
            </div>
        `
    }))
    .add("It trap's focus", () => ({
        components: { Modal },
        template: `
            <div>
                <Modal :use-portal="false">
                    <button
                        type="button"
                        slot="button"
                        slot-scope="{ toggle }"
                        @click="toggle"
                        class="button"
                    >
                        The focus trap will be activated when the modal is opened
                    </button>
                    <div
                        slot="content"
                        slot-scope="{ open, toggle }"
                        v-show="open"
                        class="absolute pin bg-black-transparent flex justify-center items-center"
                    >
                        <div class="bg-white rounded w-1/2 p-4">
                            <header class="flex justify-between items-center mb-8">
                                <h2>Focus is trapped inside this modal</h2>
                                <button
                                    type="button"
                                    @click="toggle"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.971 47.971" width="2rem" height="2rem">
                                        <path d="M28.228 23.986L47.092 5.122a2.998 2.998 0 0 0 0-4.242 2.998 2.998 0 0 0-4.242 0L23.986 19.744 5.121.88a2.998 2.998 0 0 0-4.242 0 2.998 2.998 0 0 0 0 4.242l18.865 18.864L.879 42.85a2.998 2.998 0 1 0 4.242 4.241l18.865-18.864L42.85 47.091c.586.586 1.354.879 2.121.879s1.535-.293 2.121-.879a2.998 2.998 0 0 0 0-4.242L28.228 23.986z" fill="#cfcfcf"/>
                                    </svg>
                                </button>
                            </header>
                            <main class="mb-4">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis eveniet mollitia dolore animi necessitatibus illo temporibus distinctio molestias praesentium, dolor saepe consequuntur nihil reiciendis neque reprehenderit architecto doloremque sint veniam?
                                </p>
                            </main>
                            <footer>
                                <button class="button mr-4">Focusable element #1</button>
                                <button class="button">Focusable element #2</button>
                            </footer>
                        </div>
                    </div>
                </Modal>
            </div>
        `
    }))
    .add("The button knows if the modal is open", () => ({
        components: { Modal },
        template: `
            <div>
                <Modal :use-portal="false">
                    <button
                        type="button"
                        slot="button"
                        slot-scope="{ open, toggle }"
                        @click="toggle"
                        class="button block mb-4 m-auto"
                        :disabled="open"
                    >
                        <span v-if="open">
                            This is now disabled
                        </span>
                        <span v-else>
                            This will be disabled when the modal is open
                        </span>
                    </button>
                    <div
                        slot="content"
                        slot-scope="{ open, toggle }"
                        v-show="open"
                    >
                        <div class="m-auto bg-white rounded w-1/2 p-4">
                            <header class="flex justify-between items-center mb-8">
                                <h2>The button has been disabled</h2>
                                <button
                                    type="button"
                                    @click="toggle"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.971 47.971" width="2rem" height="2rem">
                                        <path d="M28.228 23.986L47.092 5.122a2.998 2.998 0 0 0 0-4.242 2.998 2.998 0 0 0-4.242 0L23.986 19.744 5.121.88a2.998 2.998 0 0 0-4.242 0 2.998 2.998 0 0 0 0 4.242l18.865 18.864L.879 42.85a2.998 2.998 0 1 0 4.242 4.241l18.865-18.864L42.85 47.091c.586.586 1.354.879 2.121.879s1.535-.293 2.121-.879a2.998 2.998 0 0 0 0-4.242L28.228 23.986z" fill="#cfcfcf"/>
                                    </svg>
                                </button>
                            </header>
                            <main>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis eveniet mollitia dolore animi necessitatibus illo temporibus distinctio molestias praesentium, dolor saepe consequuntur nihil reiciendis neque reprehenderit architecto doloremque sint veniam?
                                </p>
                            </main>
                        </div>
                    </div>
                </Modal>
            </div>
        `
    }))
    .add("It can be open by default", () => ({
        components: { Modal },
        template: `
            <div>
                <Modal :use-portal="false" :open-default="true">
                    <button
                        type="button"
                        slot="button"
                        slot-scope="{ open, toggle }"
                        @click="toggle"
                        class="button"
                    >
                        Open Modal
                    </button>
                    <div
                        slot="content"
                        slot-scope="{ open, toggle }"
                        v-show="open"
                        class="absolute pin bg-black-transparent flex justify-center items-center"
                    >
                        <div class="bg-white rounded w-1/2 p-4">
                            <header class="flex justify-between items-center mb-8">
                                <h2>Modal Content</h2>
                                <button
                                    type="button"
                                    @click="toggle"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.971 47.971" width="2rem" height="2rem">
                                        <path d="M28.228 23.986L47.092 5.122a2.998 2.998 0 0 0 0-4.242 2.998 2.998 0 0 0-4.242 0L23.986 19.744 5.121.88a2.998 2.998 0 0 0-4.242 0 2.998 2.998 0 0 0 0 4.242l18.865 18.864L.879 42.85a2.998 2.998 0 1 0 4.242 4.241l18.865-18.864L42.85 47.091c.586.586 1.354.879 2.121.879s1.535-.293 2.121-.879a2.998 2.998 0 0 0 0-4.242L28.228 23.986z" fill="#cfcfcf"/>
                                    </svg>
                                </button>
                            </header>
                            <main>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis eveniet mollitia dolore animi necessitatibus illo temporibus distinctio molestias praesentium, dolor saepe consequuntur nihil reiciendis neque reprehenderit architecto doloremque sint veniam?
                                </p>
                            </main>
                        </div>
                    </div>
                </Modal>
            </div>
        `
    }));
