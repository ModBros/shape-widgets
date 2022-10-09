import React, {FunctionComponent, useEffect} from 'react'
import {useColorField, useNumberField, useSelectField, useSetItemSize} from "@modbros/dashboard-sdk";

const Line: FunctionComponent = () => {
  const {setHeight} = useSetItemSize()
  const lineColor = useColorField({field: 'line_color', defaultColor: '#000000', defaultAlpha: 1})
  const lineThickness = useNumberField({field: 'line_thickness', defaultValue: 3})
  // const cornerStart = useSelectField({field: 'corner_start', defaultValue: 'normal'})
  // const cornerEnd = useSelectField({field: 'corner_end', defaultValue: 'normal'})

  useEffect(() => {
    console.log(setHeight);
    setHeight(lineThickness)
  }, [lineThickness])

  return (
    <div style={{
      height: `${lineThickness}px`,
      backgroundColor: lineColor.toRgbaCss(),
    }}/>
  )
}

export default Line
