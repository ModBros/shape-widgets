import React, {FunctionComponent} from 'react'
import {useColorField, useNumberField, useSelectField} from "@modbros/dashboard-sdk";

const Rectangle: FunctionComponent = () => {
  const backgroundColor = useColorField({field: 'background_color', defaultColor: '#000000', defaultAlpha: 1})
  const borderColor = useColorField({field: 'border_color'})
  const borderThickness = useNumberField({field: 'border_thickness', defaultValue: 0})
  const borderRadius = useNumberField({field: 'border_radius', defaultValue: 0})
  const borderStyle = useSelectField({field: 'border_style', defaultValue: 'solid'})

  return (
    <div style={{
      backgroundColor: backgroundColor.toRgbaCss(),
      borderColor: borderColor.toRgbaCss(),
      borderWidth: `${borderThickness}px`,
      borderRadius: `${borderRadius}px`,
      borderStyle
    }}/>
  )
}

export default Rectangle
