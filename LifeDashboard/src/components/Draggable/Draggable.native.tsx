import React, { useRef } from 'react';
import { Animated, PanResponder } from 'react-native';

interface DraggableProps {
  style: object;
}

// CUSTOM DRAGGABLE -- Not currently used
// TODO: Only slide up and down
// TODO: Order in list
const Draggable = ({ style }: DraggableProps): JSX.Element => {
  const pan = useRef<any>(new Animated.ValueXY()).current;

  const panResponder = React.useRef(
    PanResponder.create({
      // Ask to be the responder
      onStartShouldSetPanResponder: (event, gestureState) => true,
      onStartShouldSetPanResponderCapture: (event, gestureState) =>
        true,
      onMoveShouldSetPanResponder: (event, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (event, gestureState) =>
        true,

      onPanResponderGrant: (event, gestureState) => {
        // Gesture has started, show visual feedback 
        // gestureState.d{x,y} will be set to zero
        console.log("X VALUE: ", pan.x._value)
        console.log("Y VALUE: ", pan.y._value)
        
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value
        });
        // console.log("onPanResponderGrant: ", event);
      },
      onPanResponderMove: Animated.event([
        null,
        { dx: pan.x, dy: pan.y }
      ]),

      onPanResponderTerminationRequest: (event, gestureState) => true,
      onPanResponderRelease: (event, gestureState) => {
        // User released all touches, i.e. gesture has succeeded
        pan.flattenOffset();
      },

      onPanResponderTerminate: (event, gestureState) => {
        // Another component has become the responder, so gesture should be cancelled
        // console.log("onPanResponderTerminate: ", event);
      },
      onShouldBlockNativeResponder: (event, gestureState) => {
        // Returns whether componetn should block native comonents from being responder
        // Currently only supported on android
        // console.log("onShouldBlockNativeResponder: ", event);
        return true;
      }
    })
  ).current;

  return (
    <Animated.View 
      {...panResponder.panHandlers}
      style={{ ...style, transform: pan.getTranslateTransform() }} 
    />
  )
};

export default Draggable;