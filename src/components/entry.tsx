import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
import { style } from 'typestyle'
import { colors } from '../styles' 

@Component
export class Entry extends Vue {
  @Prop() message: string 
  componentClass = style({
    textAlign: 'center',
    paddingTop: '1rem'
  })
  inputClass = style({
    backgroundColor: colors.background,
    border: 'none',
    color: colors.foreground,
    fontSize: '1.2rem',
    marginLeft: '1rem',
    outline: 'none',
    $nest: {
      '&:focus': {
        outline: `dashed thin ${colors.border}`
      }
    }
  })
  mounted() {
    const input = this.$el.querySelector('input')
    const len = input.value.length
    input.setSelectionRange(len, len)
  }
  onInputChanged(evt: Event) {
    const el = evt.target as HTMLInputElement
    this.$emit('change', el.value) 
  }
  render() {
    return (
      <div class={this.componentClass}>
        <label> 
          Write something:  
          <input class={this.inputClass} value={this.message} onInput={this.onInputChanged} autofocus />
        </label>   
      </div>
    )
  }
}