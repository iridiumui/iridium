import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import Modal from '../../core/Modal';
import PortalVue from 'portal-vue';

Vue.use(PortalVue);

const modalContainerStyles = {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
};

const modalStyles = {
    width: '60vw',
    backgroundColor: '#fff',
    padding: '2rem',
    boxShadow: '0px 10px 140px 0px rgba(0,0,0,0.25)'
};

const modalHeaderStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
};

const modalCloseButtonStyles = {
    backgroundColor: 'none',
    border: 'none',
};

export default storiesOf('Core|Modal', module)
    .add('It can render a toggle and content', () => ({
        components: { Modal },
        props: {
            modalContainerStyles: {
                type: Object,
                default: function() {
                    return modalContainerStyles;
                }
            },
            modalStyles: {
                type: Object,
                default: function () {
                    return modalStyles;
                }
            },
            modalHeaderStyles: {
                type: Object,
                default: function () {
                    return modalHeaderStyles;
                }
            },
            modalCloseButtonStyles: {
                type: Object,
                default: function () {
                    return modalCloseButtonStyles;
                }
            }
        },
        template: `
            <div>
                <Modal :use-portal="false">
                    <button
                        type="button"
                        slot="toggle"
                        slot-scope="{ openModal }"
                        @click="openModal"
                    >
                        This is the toggle
                    </button>
                    <div
                        slot="content"
                        slot-scope="{ open, closeModal }"
                        v-show="open"
                        :style="modalContainerStyles"
                    >
                        <div :style="modalStyles">
                            <header :style="modalHeaderStyles">
                                <h2>This is the content</h2>
                                <button
                                    type="button"
                                    @click="closeModal"
                                    :style="modalCloseButtonStyles"
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
    .add('It can render inside a portal', () => ({
        components: { Modal },
        props: {
            modalContainerStyles: {
                type: Object,
                default: function() {
                    return modalContainerStyles;
                }
            },
            modalStyles: {
                type: Object,
                default: function () {
                    return modalStyles;
                }
            },
            modalHeaderStyles: {
                type: Object,
                default: function () {
                    return modalHeaderStyles;
                }
            },
            modalCloseButtonStyles: {
                type: Object,
                default: function () {
                    return modalCloseButtonStyles;
                }
            }
        },
        template: `
            <div>
                <Modal :use-portal="true" portal-name="modal">
                    <button
                        type="button"
                        slot="toggle"
                        slot-scope="{ openModal }"
                        @click="openModal"
                    >
                        Render inside portal
                    </button>
                    <div
                        slot="content"
                        slot-scope="{ open, closeModal }"
                        v-show="open"
                        :style="modalContainerStyles"
                    >
                        <div :style="modalStyles">
                            <header :style="modalHeaderStyles">
                                <h2>This is a rendered in a portal</h2>
                                <button
                                    type="button"
                                    @click="closeModal"
                                    :style="modalCloseButtonStyles"
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
                <section>
                    <h2>This comes before the portal target</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio amet dolorum minima dignissimos velit rem natus nesciunt quaerat assumenda, perspiciatis commodi placeat nobis eligendi pariatur cum ullam libero accusantium sequi.
                    </p>
                </section>
                <h4>The portal target is down here:</h4>
                <portal-target name="modal"></portal-target>
            </div>
        `
    }))
    .add('It can render outside a portal', () => ({
        components: { Modal },
        props: {
            modalContainerStyles: {
                type: Object,
                default: function() {
                    return modalContainerStyles;
                }
            },
            modalStyles: {
                type: Object,
                default: function () {
                    return modalStyles;
                }
            },
            modalHeaderStyles: {
                type: Object,
                default: function () {
                    return modalHeaderStyles;
                }
            },
            modalCloseButtonStyles: {
                type: Object,
                default: function () {
                    return modalCloseButtonStyles;
                }
            }
        },
        template: `
            <div>
                <Modal :use-portal="false">
                    <button
                        type="button"
                        slot="toggle"
                        slot-scope="{ openModal }"
                        @click="openModal"
                    >
                        This will render the modal right here in the dom
                    </button>
                    <div
                        slot="content"
                        slot-scope="{ open, closeModal }"
                        v-show="open"
                        :style="modalContainerStyles"
                    >
                        <div :style="modalStyles">
                            <header :style="modalHeaderStyles">
                                <h2>This is the modal</h2>
                                <button
                                    type="button"
                                    @click="closeModal"
                                    :style="modalCloseButtonStyles"
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
        props: {
            modalContainerStyles: {
                type: Object,
                default: function() {
                    return modalContainerStyles;
                }
            },
            modalStyles: {
                type: Object,
                default: function () {
                    return modalStyles;
                }
            },
            modalHeaderStyles: {
                type: Object,
                default: function () {
                    return modalHeaderStyles;
                }
            },
            modalCloseButtonStyles: {
                type: Object,
                default: function () {
                    return modalCloseButtonStyles;
                }
            }
        },
        template: `
            <div>
                <Modal :use-portal="false">
                    <button
                        type="button"
                        slot="toggle"
                        slot-scope="{ openModal }"
                        @click="openModal"
                    >
                        The focus trap will be activated when the modal is opened
                    </button>
                    <div
                        slot="content"
                        slot-scope="{ open, closeModal }"
                        v-show="open"
                        :style="modalContainerStyles"
                    >
                        <div :style="modalStyles">
                            <header :style="modalHeaderStyles">
                                <h2>Focus is trapped inside this modal</h2>
                                <button
                                    type="button"
                                    @click="closeModal"
                                    :style="modalCloseButtonStyles"
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
                            <footer>
                                <button>Focusable element #1</button>
                                <button>Focusable element #2</button>
                            </footer>
                        </div>
                    </div>
                </Modal>
            </div>
        `
    }))
    .add("The toggle knows if the modal is open", () => ({
        components: { Modal },
        props: {
            modalContainerStyles: {
                type: Object,
                default: function() {
                    return modalContainerStyles;
                }
            },
            modalStyles: {
                type: Object,
                default: function () {
                    return modalStyles;
                }
            },
            modalHeaderStyles: {
                type: Object,
                default: function () {
                    return modalHeaderStyles;
                }
            },
            modalCloseButtonStyles: {
                type: Object,
                default: function () {
                    return modalCloseButtonStyles;
                }
            }
        },
        template: `
            <div>
                <Modal :use-portal="false">
                    <button
                        type="button"
                        slot="toggle"
                        slot-scope="{ open, openModal }"
                        :style="open ? 'background-color: red' : ''"
                        @click="openModal"
                    >
                        This will change color when it's open
                    </button>
                    <div
                        slot="content"
                        slot-scope="{ open, closeModal }"
                        v-show="open"
                        :style="modalContainerStyles"
                    >
                        <div :style="modalStyles">
                            <header :style="modalHeaderStyles">
                                <h2>The have changed color</h2>
                                <button
                                    type="button"
                                    @click="closeModal"
                                    :style="modalCloseButtonStyles"
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
