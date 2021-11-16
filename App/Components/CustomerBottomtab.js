import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomerHome from './CustomerHome';
import CustomerCart from './CustomerCart';
import CustomerShop from './CustomerShop';
import CustomerMyOrder from './CustomerOrder';
import CustomerProfile from './CustomerProfile'
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
const Tab = createMaterialBottomTabNavigator();
function MyTabs() {
    return (

        <Tab.Navigator
            initialRouteName="CustomerHome"
            activeColor="#F12A10"
            barStyle={{ backgroundColor: '#fff',width:'100%',height:70,justifyContent:'center',}}
        >

            <Tab.Screen
                name="Home"
                component={CustomerHome}
                options={{
                    // tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Cart"
                component={CustomerCart}
                options={{
                    // tabBarLabel: 'CustomerCart',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="shopping-cart" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Shop"
                component={CustomerShop}
                options={{
                    // tabBarLabel: 'CustomerCart',
                    tabBarIcon: ({ color }) => (
                        <Entypo name="shop" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="My Order"
                component={CustomerMyOrder}
                options={{
                    // tabBarLabel: 'CustomerCart',
                    tabBarIcon: ({ color }) => (
                        <Feather name="box" color={color} size={25} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={CustomerProfile}
                options={{
                    // tabBarLabel: 'CustomerCart',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="ios-person-circle-outline" color={color} size={25} />
                    ),
                }}
            />

        </Tab.Navigator>
    );
}
export default function CustomerBottomtab() {
    const navigation = useNavigation();
    return (
       
            <View style={styles.container}>
                <MyTabs />
            </View>
       


    );
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
   
})
