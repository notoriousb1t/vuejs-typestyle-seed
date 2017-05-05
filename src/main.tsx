import Vue from 'vue'
import './styles/layout'
import { App } from './components'

// bootstrap application
new Vue({  
  el: '#root',
  render: (h) => h(App)
})