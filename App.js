// import React from 'react';
// import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
// import CustomerOrderDetails from './App/Components/CustomerOrderDetails';
// export default function App() {
//   return (
//     <View>
//       <CustomerOrderDetails/>
//     </View>
//   )
// }
import React from 'react';
import { StyleSheet, Text, View, LogBox } from 'react-native';
import CustomerLoginPage from './App/Components/CustomerLoginPage';
import CustomerOtpScreen from './App/Components/CustomerOtpScreen';
import CustomerRegister from './App/Components/CustomerRegister';
import CustomerLocation from './App/Components/CustomerLocation';
import CustomerBottomtab from './App/Components/CustomerBottomtab';
import ChooseACategory from './App/Components/ChooseACategory';
import CustomerFruits from './App/Components/CustomerFruits';
import Searchforarealandmark from './App/Components/Searchforarealandmark';
import CustomerAddNewAddress from './App/Components/CustomerAddNewAddress';
import CustomerOrderStatus from './App/Components/CustomerOrderStatus';
import CustomerCart from './App/Components/CustomerCart';
import CustomerHome from './App/Components/CustomerHome';
import CustomerShop from './App/Components/CustomerShop';
import CustomerMyOrder from './App/Components/CustomerOrder';
import CustomerProfile from './App/Components/CustomerProfile';
import CustomerShopitem from './App/Components/CustomerShopitem';
import CustomerOrderDetails from './App/Components/CustomerOrderDetails';
import CustomerMyorderTabscreen from './App/Components/CustomerMyorderTabscreen';
import LIveTracking from './App/Components/LIveTracking';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();
export default function App() {
  LogBox.ignoreLogs(['Remote debugger']);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={CustomerLoginPage}
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name='CustomerLoginPage' component={CustomerLoginPage} />
        <Stack.Screen name='CustomerOtpScreen' component={CustomerOtpScreen} />
        <Stack.Screen name='CustomerRegister' component={CustomerRegister} />
        <Stack.Screen name='CustomerLocation' component={CustomerLocation} />
        <Stack.Screen name='CustomerBottomtab' component={CustomerBottomtab} />
        <Stack.Screen name='ChooseACategory' component={ChooseACategory} />
        <Stack.Screen name='CustomerFruits' component={CustomerFruits} />
        <Stack.Screen name='Searchforarealandmark' component={Searchforarealandmark} />
        <Stack.Screen name='CustomerAddNewAddress' component={CustomerAddNewAddress} />
        <Stack.Screen name='CustomerOrderStatus' component={CustomerOrderStatus} />
        <Stack.Screen name='CustomerCart' component={CustomerCart} />
        <Stack.Screen name='CustomerHome' component={CustomerHome} />
        <Stack.Screen name='CustomerShop' component={CustomerShop} />
        <Stack.Screen name='CustomerMyOrder' component={CustomerMyOrder} />
        <Stack.Screen name='CustomerProfile' component={CustomerProfile} />
        <Stack.Screen name='CustomerShopitem' component={CustomerShopitem} />
        <Stack.Screen name='CustomerOrderDetails' component={CustomerOrderDetails} />
        <Stack.Screen name='CustomerMyorderTabscreen' component={CustomerMyorderTabscreen} />
        <Stack.Screen name='LIveTracking' component={LIveTracking} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
