import React, { useState } from 'react';
import { StyleSheet, TextInput, ScrollView, Text, View, StatusBar, TouchableOpacity, FlatList, Image } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CustomerMyOrderFlatList from './CustomerMyOrderFlatList';
import { useNavigation } from '@react-navigation/native';
export default function CustomerOrder() {
    const navigation = useNavigation();
    const ListItem = ({ CustomerMyOrderFlatList }) => {
        return (
            <View style={{ alignItems: 'center', width: '100%', marginBottom: 10, paddingHorizontal: 10, paddingVertical: 10 }}>

                <View style={styles.box}>
                    <View style={{ width: '100%', flexDirection: 'row', marginBottom: 10, justifyContent: 'center', borderBottomWidth: 1, borderColor: '#c4c4c4' }}>
                        <View style={{ width: '35%', marginBottom: 20 }}>
                            <Image style={styles.img} source={CustomerMyOrderFlatList.image} />
                        </View>
                        <View style={{ width: '65%', marginBottom: 20 }}>
                            <Text style={styles.name}>{CustomerMyOrderFlatList.shopname} </Text>
                            <Text style={styles.gm}>{CustomerMyOrderFlatList.gm}</Text>
                            <View style={{ width: '50%', flexDirection: 'row', marginBottom: 10, alignItems: 'center' }}>
                                <View style={{ flexDirection: 'row', width: '35%', }}>
                                    <Text style={styles.prise}>₹ </Text>
                                    <Text style={styles.prise}>{CustomerMyOrderFlatList.prise}</Text>
                                </View>
                            </View>
                            <View style={styles.deliverybtn}>
                                <Text style={styles.deliverytxt}>{CustomerMyOrderFlatList.delivery}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.btncontainer}>
                        <TouchableOpacity style={{ width: '50%', borderRightWidth: 1, borderColor: 'grey' }}>
                            <Text style={styles.canceltxt} >{CustomerMyOrderFlatList.cancel}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: '50%', }} onPress={() => navigation.navigate('CustomerOrderDetails')} >
                            <Text style={styles.canceltxt}>{CustomerMyOrderFlatList.detail}</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View >
        )
    }
    return (
        <View style={styles.container}>
            <StatusBar />
            {/* <View style={styles.header}>
                <TouchableOpacity style={styles.Headericon} onPress={() => navigation.goBack()}>
                    <AntDesign name="left" size={22} color={"#F12A10"} />
                </TouchableOpacity>
                <Text style={styles.Headertext}>MY ORDER</Text>
            </View> */}
            <View style={styles.body}>
                <FlatList showsVerticalScrollIndicator={false}
                    data={CustomerMyOrderFlatList}
                    numColumns={1}
                    renderItem={({ item }) => <ListItem CustomerMyOrderFlatList={item} />}
                    keyExtractor={(item) => item.id}
                />
            </View>
            {/* <View style={styles.footer}>
                <TouchableOpacity style={styles.alignFooter} onPress={() => navigation.navigate('CustomerHome')}>
                   
                        <Entypo name="home" size={30} color={"grey"} />
               
                    <Text style={styles.footertxt}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.alignFooter} onPress={() => navigation.navigate('CustomerCart')}>
                    <FontAwesome name="shopping-cart" size={30} color={"grey"} />
                    <Text style={styles.footertxt}>Cart</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.alignFooter} onPress={() => navigation.navigate('CustomerMyOrder')}>
                <View style={styles.footeractive}>
                    <Feather name="box" size={30} color={"#fff"} />
                    </View>
                    <Text style={styles.footertxt}> My Order</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.alignFooter} onPress={() => navigation.navigate('CustomerProfile')}>
                    <Ionicons name="ios-person-circle-outline" size={30} color={"grey"} />
                    <Text style={styles.footertxt}>Profile</Text>
                </TouchableOpacity>
            </View> */}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff'
    },
    header: {
        height: 70,
        width: '100%',
        // backgroundColor: '#b3cef2',
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 8,
        backgroundColor: '#fff',
        paddingHorizontal: 10
    },
    Headericon: {
        width: '10%'
    },
    Headertext: {
        color: '#F12A10',
        fontSize: 20,
        width: '82%',
        fontWeight: '600',
        textAlign: 'center'
    },

    body: {
        flex: 1,
        paddingHorizontal: 10,
       marginBottom:60
    },
    box: {
        width: '100%',
        // borderBottomWidth: 1,
        borderColor: '#c4c4c4',
        paddingHorizontal: 10,
        paddingVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 8,
        backgroundColor: '#fff',
        borderRadius: 7
    },
    img: {
        height: 100,
        width: 100,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#c4c4c4'
    },
    name: {
        fontSize: 18,
        fontWeight: '400',
        width: '70%',
        marginBottom: 5
    },
    gm: {
        justifyContent: 'center',
        borderColor: '#C4C4C4',
        color: '#000',
        fontSize: 14,
        marginBottom: 5,
        width: '70%',
    },

    prise: {
        fontSize: 15,
        fontWeight: '400',
    },
    offprise: {
        fontSize: 14,
        fontWeight: '400',
        color: '#C4C4C4',
        textDecorationLine: 'line-through',
    },
    shoptxt: {
        fontSize: 18,
        fontWeight: '500',
        // marginBottom:20,
        justifyContent: 'center',
        width: '80%',
        height: 40,
        paddingVertical: 5
    },

    deliverybtn: {
        height: 35,
        width: '80%',
        backgroundColor: '#F12A10',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    deliverytxt: {
        fontSize: 13,
        color: '#fff',
        fontWeight: '500',
        textAlign: 'center'
    },
    btncontainer: {
        // justifyContent:'center',
        flexDirection: 'row',
        width: '100%',
        // justifyContent:'space-evenly'
    },
    canceltxt: {
        fontSize: 15,
        fontWeight: '400',
        color: 'grey',
        textAlign: 'center',
        width: '100%',
        paddingHorizontal: 10
    },
    footer: {
        width: '100%',
        height: 70,
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: 0,
        left: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        shadowOffset: { weight: 1, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 8,
    },
    activefooter: {
        // alignItems: 'center',
        borderRadius: 100,
        padding: 5,
        backgroundColor: '#41C9F2'
    },

    footerImg: {
        width: 30,
        height: 30,
    },
    footertxt: {
        justifyContent: 'center',
        alignItems: 'center',
        color: '#677890',
        fontSize: 13
    },
    alignFooter: {
        alignItems: 'center',
    },
    footeractive: {
        width: 40,
        height: 40,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100
    },
})