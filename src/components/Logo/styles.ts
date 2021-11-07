import { LogoColor, LogoSize } from '.'
import styled, { css } from 'styled-components'

type LogoWrapperProps = {
  color: LogoColor
  size: LogoSize
}

const wrapperModifiers = {
  normal: () => css`
    width: 11rem;
    height: 3.3rem;
  `,

  large: () => css`
    width: 20rem;
    height: 5.9rem;
  `
}

export const Wrapper = styled.div<LogoWrapperProps>`
  ${({ theme, color, size }) => css`
    color: ${theme.colors[color]};
    ${wrapperModifiers[size]}
  `}
`
