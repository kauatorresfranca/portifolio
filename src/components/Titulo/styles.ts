import styled from 'styled-components'

import { Props } from '.'

export const Titulo = styled.h3<Props>`
  color: #282a35;
  font-size: ${(props) => (props.fontsize ? props.fontsize + 'px' : '14px')};
  font-weight: bold;
`
