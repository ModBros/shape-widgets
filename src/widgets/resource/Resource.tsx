import React, {FunctionComponent} from 'react'
import {
  MissingConfigPlaceholder,
  useIsMetricFieldConfigured,
  useMetricField,
  useSelectField
} from '@modbros/dashboard-sdk'
import {StyledImage} from '../../components/StyledImage'
import {createMetricResourcePath} from '@modbros/dashboard-core'

const Resource: FunctionComponent = () => {
  const channelValue = useMetricField({field: 'metric'})
  const metricConfigured = useIsMetricFieldConfigured({field: 'metric'})
  const size = useSelectField({field: 'size', defaultValue: 'cover'})
  const posX = useSelectField({field: 'position_x', defaultValue: 'center'})
  const posY = useSelectField({field: 'position_y', defaultValue: 'center'})


  if (!metricConfigured) {
    return <MissingConfigPlaceholder text={'Please select a metric'}/>
  }

  if (!channelValue) {
    return null
  }

  return <StyledImage size={size} posX={posX} posY={posY} style={{
    backgroundImage: `url('${createMetricResourcePath(channelValue?.value?.value?.toString())}')`
  }}/>
}

export default Resource
