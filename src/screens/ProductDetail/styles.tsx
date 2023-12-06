import {StyleSheet} from 'react-native';
import {ItemBaseStyle} from '../../types/types';

export default StyleSheet.create<ItemBaseStyle>({
  item: {
    flex: 1,
  },

  imageContainer: {
    flex: 0.8,
  },

  image: {
    flex: 1,
    overflow: 'hidden',
  },

  text: {
    fontSize: 14,
    color: 'black',
    textAlign: 'center',
    margin: 4,
  },
});
