import React, { FunctionComponent } from 'react'
import {
  useFileField,
  useSelectField,
  useStringField
} from '@modbros/dashboard-sdk'
import ImageIcon from '../../assets/image.png'
import styled from 'styled-components'
import { StyledImage } from '../../components/StyledImage'

const StyledPlaceholder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: #efefef;

  img {
    width: 3rem;
  }

  span {
    text-align: center;
  }
`

const ImagePlaceholder: FunctionComponent = () => {
  return (
    <StyledPlaceholder>
      <img src={ImageIcon} alt={'No image selected'} />
      <span>No image selected yet</span>
    </StyledPlaceholder>
  )
}

const Image: FunctionComponent = () => {
  const image = useFileField({ field: 'image' })
  const externalUrl = useStringField({ field: 'external_url' })
  const size = useSelectField({ field: 'size', defaultValue: 'contain' })
  const posX = useSelectField({ field: 'position_x', defaultValue: 'center' })
  const posY = useSelectField({ field: 'position_y', defaultValue: 'center' })

  if (!image && !externalUrl) {
    return <ImagePlaceholder />
  }

  return (
    <StyledImage
      size={size}
      posX={posX}
      posY={posY}
      style={{
        backgroundImage: `url('${externalUrl ? externalUrl : image.src}')`
      }}
    />
  )
}

export default Image
