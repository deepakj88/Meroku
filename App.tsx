import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Import the file types
import { RootStackParamList } from './src/types/types';

/**
 * import all the screens
 */
import ProductList from './src/screens/ProductList';
import ProductDetail from './src/screens/ProductDetail';

//Create the Stack navigator
const Stack = createNativeStackNavigator<RootStackParamList>();



const App:  React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ProductList"
        screenOptions={{
          headerShown: false
        }}
       >
        <Stack.Screen name="ProductList" component={ProductList} />
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetail}
          
          
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
