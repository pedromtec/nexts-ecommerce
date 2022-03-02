import styled, { css } from 'styled-components'
import { DefaultBreakpoints } from 'styled-media-query'

type Breakpoint = keyof DefaultBreakpoints

export type MediaMatchProps = {
  lessThen?: Breakpoint
  greaterThen?: Breakpoint
}

export default styled.div<MediaMatchProps>`
  ${({lessThen, greaterThen}) => css`
    display: none;
  `}
`
