import { configure } from '@storybook/vue'
import Vue from 'vue'

import ClickOutside from '../src/helpers/ClickOutside'

Vue.component('click-outside', ClickOutside)

function loadStories() {
    require('../src/stories')
}

configure(loadStories, module)
