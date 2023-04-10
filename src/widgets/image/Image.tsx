import React, {FunctionComponent} from "react";
import {useFileField, useSelectField} from "@modbros/dashboard-sdk";
import ImageIcon from '../../assets/image.png'
import styled from "styled-components";

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

interface StyledImageProps {
  size: string;
  posX: string;
  posY: string;
}

const StyledImage = styled.div<StyledImageProps>`
  background-repeat: no-repeat;
  background-size: ${props => props.size};
  background-position-x: ${props => props.posX};
  background-position-y: ${props => props.posY};
`

const ImagePlaceholder: FunctionComponent = () => {
  return (
    <StyledPlaceholder>
      <img src={ImageIcon} alt={'No image selected'}/>
      <span>No image selected yet</span>
    </StyledPlaceholder>
  )
}

const Image: FunctionComponent = () => {
  const image = useFileField({field: 'image'})
  const size = useSelectField({field: 'size', defaultValue: 'cover'})
  const posX = useSelectField({field: 'position_x', defaultValue: 'center'})
  const posY = useSelectField({field: 'position_y', defaultValue: 'center'})


  if (!image) {
    return <ImagePlaceholder/>
  }

  return <StyledImage size={size} posX={posX} posY={posY} style={{
    backgroundImage: `url('${image.src}')`,
  }}/>;
}

export default Image
