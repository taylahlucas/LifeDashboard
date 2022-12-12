import { WINDOW_WIDTH } from '../../../utils/constants';

  // const { onTouchStart, onTouchEnd } = useSwipe(onSwipeLeft, onSwipeRight, 6)
  
function useSwipe(onSwipeLeft?: any, onSwipeRight?: any, rangeOffset = 4) {
    let firstTouch = 0
    
    function onTouchStart(e: any) {
        firstTouch = e.nativeEvent.pageX
    }

    function onTouchEnd(e: any){
        const positionX = e.nativeEvent.pageX
        const range = WINDOW_WIDTH / rangeOffset

        // Check if position is growing positively and has reached specified range
        if(positionX - firstTouch > range){
            onSwipeRight && onSwipeRight()
        }
        // Check if position is growing negatively and has reached specified range
        else if(firstTouch - positionX > range){
            onSwipeLeft && onSwipeLeft()
        }
    }

    return {onTouchStart, onTouchEnd};
}

export default useSwipe;