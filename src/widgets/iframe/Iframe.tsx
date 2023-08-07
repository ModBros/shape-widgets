import React from 'react'
import {
  MissingConfigPlaceholder,
  useStringField
} from '@modbros/dashboard-sdk'
import styled from 'styled-components'

const StyledIframe = styled.iframe`
  border: none;
  width: 100%;
  height: 100%;
`

export const Iframe = () => {
  const externalUrl = useStringField({ field: 'external_url' })

  if (!externalUrl) {
    return <MissingConfigPlaceholder text={'Provide an Url'} />
  }

  return <StyledIframe src={externalUrl} />
}

export default Iframe
