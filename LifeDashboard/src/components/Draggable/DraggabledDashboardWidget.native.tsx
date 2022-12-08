import React from 'react';
import { View } from 'react-native';
import { WINDOW_WIDTH } from '../../utils/constants';

interface DraggableDashboardWidgetProps {
  backgroundColor?: string
}

// TODO: Drag and drop functionality
const DraggabledDashboardWidget = ({ backgroundColor = '#70D3EE' }: DraggableDashboardWidgetProps) => {
  return(
    <View
      style={{ 
        width: WINDOW_WIDTH-20, 
        height: 200, 
        marginTop: 20,
        borderRadius: 10,
        backgroundColor: backgroundColor
      }}
    />
  )
};

export default DraggabledDashboardWidget;