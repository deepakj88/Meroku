import {
  StyleSheet,
  ViewStyle,
  TextStyle,
  ImageStyle,
  Platform,
} from 'react-native';
import {BaseStyle} from '../../types/types';

interface ItemBaseStyle {
  item: ViewStyle;
  imageContainer: ViewStyle;
  image: ImageStyle;
  text: TextStyle;
}

export default StyleSheet.create<ItemBaseStyle>({
  item: {
    flex: 1,
    height: 180,
    margin: 12,
    borderRadius: 8,
    backgroundColor: 'white',
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.4,
        shadowRadius: 6,
      },
      android: {
        elevation: 6,
      },
    }),
  },

  imageContainer: {
    flex: 0.8,
    borderRadius: 8,
    overflow: 'hidden',
  },

  image: {
    flex: 1,
    overflow: 'hidden',
    borderRadius: 8,
  },

  text: {
    fontSize: 14,
    color: 'black',
    textAlign: 'center',
    margin: 4,
  },
});
