import styled from 'styled-components'

export interface StyledImageProps {
  size: string;
  posX: string;
  posY: string;
}

export const StyledImage = styled.div<StyledImageProps>`
  background-repeat: no-repeat;
  background-size: ${props => props.size};
  background-position-x: ${props => props.posX};
  background-position-y: ${props => props.posY};
`
