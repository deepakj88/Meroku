import React, {useState, useEffect, useCallback} from 'react';
import {View, FlatList, Alert} from 'react-native';
import styles from './styles';
import {CallProductListAPI} from '../../utility/callProductList';
import {ProductType} from '../../types/types';
import ProductItem from '../../components/ProductItem';


/**
 * Load the product list screen 
 * @param navigation object
 * @returns React.FC
 */
const ProductList: React.FC<any> = ({navigation}) => {
  const [listProduct, setListProduct] = useState<ProductType[] | []>([]);

  //Handle api call to fetch products
  useEffect(() => {
    CallProductListAPI().then(res => {
      if (res?.products && res?.products.length > 0) {
        setListProduct(res?.products);
      }
    }).catch((error) => {
      Alert.alert(error.message)
    })
  }, []);

  //Function to render the product item ina list
  const renderListItem = ({item}: {item: ProductType}) => {
    return (
      <ProductItem
        id={item.id}
        thumbnail={item.thumbnail}
        title={item.title}
        onPress={handleOnItemPress}
      />
    );
  };

  //Handles the navigation on click of product item
  const handleOnItemPress = useCallback((id:string) => {
    const productIndex = listProduct.findIndex(item => item.id == id)

    navigation.navigate('ProductDetail',{
      item: listProduct[productIndex]
    });
  }, [listProduct]);

  return (
    <View style={styles.container}>
      <FlatList
        data={listProduct}
        keyExtractor={item => item.id}
        renderItem={renderListItem}
        numColumns={2}
      />
    </View>
  );
};

export default ProductList;
