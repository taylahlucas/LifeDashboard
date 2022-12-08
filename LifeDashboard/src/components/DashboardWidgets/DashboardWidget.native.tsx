import React from 'react';
import { Animated, View } from 'react-native';
import { WINDOW_WIDTH } from '../../utils/constants';
import Draggable from '../Draggable/Draggable.native';

interface DashboardWidgetProps {
  backgroundColor?: string
}

// TODO: This is just a placeholder widget
// TODO: Drag and drop functionality
const DashboardWidget = ({ backgroundColor = '#70D3EE' }: DashboardWidgetProps) => {
  return(
    <Draggable
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

export default DashboardWidget;