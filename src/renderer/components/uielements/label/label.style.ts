import styled from 'styled-components'
import { palette, key } from 'styled-theme'

import { Size, Color, FontSettings, Colors, TextTransform, TextAlignment } from './types'

export type Props = {
  align?: TextAlignment
  size?: Size
  color?: Color
  weight?: string
  textTransform?: TextTransform
  onClick?: () => void
}

const fontSettings: FontSettings = {
  tiny: {
    size: key('sizes.font.tiny', '8px'),
    spacing: '0.36px'
  },
  small: {
    size: key('sizes.font.small', '10px'),
    spacing: '0.42px'
  },
  normal: {
    size: key('sizes.font.normal', '12px'),
    spacing: '1px'
  },
  big: {
    size: key('sizes.font.big', '15px'),
    spacing: '1px'
  },
  large: {
    size: key('sizes.font.large', '18px'),
    spacing: '1px'
  }
}

const colors: Colors = {
  primary: palette('primary', 0),
  success: palette('success', 0),
  warning: palette('warning', 0),
  error: palette('error', 0),
  normal: palette('text', 0),
  light: palette('text', 2),
  dark: palette('text', 1),
  gray: palette('text', 2),
  input: palette('text', 2),
  white: '#fff'
}

export const LabelWrapper = styled.div<Props>`
  padding: 10px 0;
  font-size: ${({ size = 'normal' }) => fontSettings[size].size};
  text-transform: ${({ textTransform = 'none' }) => textTransform};
  font-weight: ${({ weight }) => weight};
  letter-spacing: ${({ size = 'normal' }) => fontSettings[size].spacing};
  color: ${({ color }) => colors[color || 'normal']};
  cursor: ${({ onClick }) => onClick && 'pointer'};
  text-align: ${({ align = 'left' }) => align};
`
