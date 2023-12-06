import 'react-native-gesture-handler';
import React from 'react';
import {View, Text} from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import styles from './styles';
import customTransition from '../../anim/transition';
import {RootStackParamList} from '../../types/types'

/**
 * Declare the file types
 */
type ProductDetailsScreenRouteProp = RouteProp<RootStackParamList, 'ProductDetail'>;
type ProductDetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ProductDetail'>;
interface DetailsScreenProps {
    route: ProductDetailsScreenRouteProp;
    navigation: ProductDetailsScreenNavigationProp;
  }



const ProductDetail: React.FC<DetailsScreenProps>  = ({route}) => {

  const {thumbnail, title, id} = route?.params?.item

  const pressed = useSharedValue(false);
  const offset = useSharedValue(0);

  /**
   * Function to handle the animation 
   * of shared transition
   */
  const pan = Gesture.Pan()
    .onBegin(() => {
      pressed.value = true;
    })
    .onChange((event) => {
      offset.value = event.translationX;
    })
    .onFinalize(() => {
      offset.value = withSpring(0);
      pressed.value = false;
    });

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [
      { translateX: offset.value },
      { scale: withTiming(pressed.value ? 1.2 : 1) },
    ],
  }));

  /**
   * Returns component with shared animation
   */
  return (
    <GestureHandlerRootView style={styles.item}>
      <GestureDetector gesture={pan}>
      <Animated.View style={[styles.item, animatedStyles]} >
     
   
      <View style={styles.imageContainer}>
        <Animated.Image
          source={{
            uri: thumbnail,
          }}
          style={styles.image}
          sharedTransitionTag={id.toString()}
          sharedTransitionStyle={customTransition}
        />
      </View>
      <Text style={styles.text}>{title}</Text>
    </Animated.View>
    </GestureDetector>
    </GestureHandlerRootView>
  );
};

export default ProductDetail;
