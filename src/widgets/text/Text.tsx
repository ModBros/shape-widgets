import React, {FunctionComponent} from 'react';
import {useColorField, useFontField, useNumberField, useSelectField, useStringField} from '@modbros/dashboard-sdk';

const Text: FunctionComponent = () => {
  const text = useStringField({field: 'text'});
  const alignHorizontal = useSelectField({field: 'align_horizontal', defaultValue: 'flex-start'});
  const alignVertical = useSelectField({field: 'align_vertical', defaultValue: 'flex-start'});
  const textColor = useColorField({field: 'text_color', defaultColor: '#000000'});
  const font = useFontField({field: 'font'});
  const fontSize = useNumberField({field: 'font_size'});

  return (
    <div
      style={{
        display: 'flex',
        alignItems: alignVertical,
        justifyContent: alignHorizontal
      }}
    >
      <span
        style={{
          fontFamily: font,
          color: textColor.toRgbaCss(),
          fontSize: fontSize ? `${fontSize}px` : undefined
        }}
      >
        {text}
      </span>
    </div>
  );
};

export default Text;
