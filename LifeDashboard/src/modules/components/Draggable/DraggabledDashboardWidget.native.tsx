import React from 'react';
import { View } from 'react-native';
import { WINDOW_WIDTH } from '../../../utils/constants';

interface DraggableDashboardWidgetProps {
  index: number;
  backgroundColor?: string
}

const DraggabledDashboardWidget = ({ index, backgroundColor = '#70D3EE' }: DraggableDashboardWidgetProps) => {
  return(
    <View
      style={{ 
        width: WINDOW_WIDTH-20, 
        height: 200, 
        marginTop: index >= 1 ? 20 : 0,
        borderRadius: 10,
        backgroundColor: backgroundColor
      }}
    />
  )
};

export default DraggabledDashboardWidget;