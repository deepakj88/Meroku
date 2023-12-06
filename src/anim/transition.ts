import { SharedTransition, withSpring,withDecay } from 'react-native-reanimated';


const customTransition: SharedTransition = SharedTransition.custom((values) => {
    'worklet';
    return {
      height: withSpring(values.targetHeight),
      width: withSpring(values.targetWidth),
      originX: withSpring(values.targetOriginX),
      originY: withSpring(values.targetOriginY),
    };
  });

  export default customTransition
  