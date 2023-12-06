import React from 'react';
import {View, Pressable, Text} from 'react-native';
import Animated from 'react-native-reanimated';
import styles from './styles';
import {TypeListItem} from '../../types/types';

/**
 * 
 * @param TypeListItem object 
 * @returns React.Fc of product item
 */
const ProductItem = ({id, thumbnail, title, onPress}: TypeListItem) => {
  return (
    <Pressable style={styles.item} onPress={() => onPress(id)}>
      <View style={styles.imageContainer}>
        <Animated.Image
          source={{uri: thumbnail}}
          style={styles.image}
          sharedTransitionTag={id.toString()}
          // sharedTransitionStyle={customTransition}
        />
      </View>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default ProductItem;
