import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
import { style } from 'typestyle'
import { viewHeight } from 'csx'
import { colors } from '../styles'

const heroHeight = viewHeight(35)

@Component
export class Hero extends Vue {
  @Prop() message: string
  componentClass = style({
    backgroundColor: colors.foreground,
    color: colors.background, 
    height: heroHeight,
    lineHeight: heroHeight,
    textAlign: 'center',
    width: '100%'
  })
  heroClass = style({ 
    fontSize: '1.8rem'
  }) 
  render() {
    return (<div class={this.componentClass}>
      <h1 class={this.heroClass}>
        {this.message}
      </h1>
    </div>)  
  }
}
