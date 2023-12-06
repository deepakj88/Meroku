import {ParamListBase} from '@react-navigation/native';
import {ViewStyle, TextStyle, ImageStyle} from 'react-native';

export interface BaseStyle {
  container: ViewStyle;
}

export interface ItemBaseStyle {
  item: ViewStyle;
  imageContainer: ViewStyle;
  image: ImageStyle;
  text: TextStyle;
}

export interface ProductType {
  id: string;
  title: string;
  thumbnail: string;
}
export interface ProductListType {
  products: ProductType[];
}

export interface TypeListItem extends ProductType {
  onPress: (id: string) => void;
  children?: React.ReactNode;
}

export interface RootStackParamList extends ParamListBase {
  ProductList: undefined;
  ProductDetail: {item: ProductType};
}

