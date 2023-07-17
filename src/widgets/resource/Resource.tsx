import React, {FunctionComponent, useCallback} from 'react'
import {
  MissingConfigPlaceholder,
  useIsMetricFieldConfigured,
  useMemoizedMetricField,
  useSelectField
} from '@modbros/dashboard-sdk'
import {StyledImage} from '../../components/StyledImage'
import {ChannelValue, createMetricResourcePath} from '@modbros/dashboard-core'

const Resource: FunctionComponent = () => {
  const metricConfigured = useIsMetricFieldConfigured({field: 'metric'})
  const size = useSelectField({field: 'size', defaultValue: 'cover'})
  const posX = useSelectField({field: 'position_x', defaultValue: 'center'})
  const posY = useSelectField({field: 'position_y', defaultValue: 'center'})

  const memo = useCallback((channelValue: ChannelValue) => {
    return createMetricResourcePath(channelValue?.value?.value?.toString());
  }, [])
  const {value, channelValue} = useMemoizedMetricField({field: 'metric', memo})

  if (!metricConfigured) {
    return <MissingConfigPlaceholder text={'Please select a metric'}/>
  }

  if (!channelValue) {
    return null
  }

  return <StyledImage size={size} posX={posX} posY={posY} style={{
    backgroundImage: `url('${value}')`
  }}/>
}

export default Resource
