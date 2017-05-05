import Vue from 'vue'; 
import { style } from 'typestyle'

// typings (cannot be inferred unfortunately)
interface AppState extends Vue {
  message: string;
  inputHandler: (value: string) => void; 
}

const componentClass = style({
  textAlign: 'center'
})
 
// create app component
export const App = Vue.extend({
  data() { 
    return {
      message: 'VueJS ❤️ TypeStyle'
    }
  },
  methods: {
    inputHandler(evt: Event) {
      const el = evt.target as HTMLInputElement
      this.message = el.value; 
    }
  }, 
  render() {
    return (
      <div class={componentClass}>
        <h1>{this.message}</h1>
        <label> 
          <input autoFocus value={this.message} onInput={this.inputHandler} /> 
        </label>  
      </div>
    )
  }
} as Vue.ComponentOptions<AppState>) 