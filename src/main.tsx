import Vue from 'vue'
import { App } from './components'

// import base styles
import './styles'

// bootstrap application
new Vue({  
  el: '#root',
  render: (h) => h(App)
})