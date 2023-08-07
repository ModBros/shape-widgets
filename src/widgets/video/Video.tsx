import React, { FunctionComponent } from 'react'
import {
  MissingConfigPlaceholder,
  useCheckboxField,
  useFileField,
  useStringField
} from '@modbros/dashboard-sdk'
import styled from 'styled-components'

const StyledVideo = styled.video`
  width: 100%;
  height: auto;
`

const Video: FunctionComponent = () => {
  const video = useFileField({ field: 'video' })
  const externalUrl = useStringField({ field: 'external_url' })
  const autoplay = useCheckboxField({ field: 'autoplay' })
  const controls = useCheckboxField({ field: 'controls' })
  const mute = useCheckboxField({ field: 'mute' })

  if (!video && !externalUrl) {
    return <MissingConfigPlaceholder text={'Please provide a video'} />
  }

  return (
    <StyledVideo autoPlay={autoplay} controls={controls} muted={mute}>
      <source src={externalUrl ? externalUrl : video.src} type={'video/mp4'} />
    </StyledVideo>
  )
}

export default Video
