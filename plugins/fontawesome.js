import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

config.autoAddCss = false

library.add(faGithub, faLinkedin)

// Register the component globally
Vue.component('font-awesome-icon', FontAwesomeIcon)