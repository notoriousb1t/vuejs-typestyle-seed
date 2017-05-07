import Vue from 'vue'; 
import Component from 'vue-class-component'
import { style } from 'typestyle'
import { Entry, Hero } from '.'
import { colors } from '../styles'

@Component
export class App extends Vue {
  message = ''
  styles = style({
    backgroundColor: colors.background,
    color: colors.foreground,
    height: '100%',
    width: '100%'
  })
  
  created() {
    const messages = [
      'I ❤️ VueJS',
      'I ❤️ TypeStyle',
      'I ❤️ one file',
    ]
    
    const randomIndex = Math.floor(Math.random() * messages.length)
    this.message = messages[randomIndex]
  }
  
  onMessageChanged(message: string) { 
    this.message = message;
  }
  render() {
    return (
      <div class={this.styles}> 
        <Hero message={this.message} />
        <Entry message={this.message} onChange={this.onMessageChanged} /> 
      </div>
    )
  }
}