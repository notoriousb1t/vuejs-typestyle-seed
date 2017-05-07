import { background } from 'csx/lib';
import { color, hsl } from 'csx'

export namespace colors { 
  const baseColor = hsl(0, 0, 0)
  const contrastColor = baseColor.invert().grayscale()
  
  export const background = baseColor.toHexString()
  export const foreground = contrastColor.toHexString()
  export const border = contrastColor.grayscale().darken(.2, true).toHexString()
}