import React, { useState } from 'react';
import { StyleSheet, ScrollView, TextInput, Text, View, StatusBar, TouchableOpacity, FlatList, Image } from 'react-native';

import Foundation from 'react-native-vector-icons/Foundation';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/core';
import Icon from 'react-native-vector-icons/Ionicons';
import AddToCartList from './AddToCartList';
export default function AddToCart() {
    const navigation = useNavigation();
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount((prevCount) => prevCount + 1);
    };
    const handleDecrement = () => {
        setCount((prevCount) => prevCount - 1);
    };
    const [state, setState] = React.useState(false);

    const onStateChange = () => {
        setState(!state)
    }
    const [search, setSearch] = useState(false)
    const HideSearchBtn = () => {
        setSearch(!search)
    }
    const ListItem = ({ AddToCartList}) => {
        return (
            <View style={{ alignItems: 'center', width: '100%', marginTop: 20, }}>

                <View style={styles.boxWithShadow}>

                    <View style={{ width: '40%' }}>
                        <Image style={styles.img} source={AddToCartList.image} />
                    </View>
                    <View style={{ width: '60%' }}>
                        <TouchableOpacity style={{ alignItems: 'flex-end', width: '94%' }}>
                            <Ionicons name='close-circle-outline' size={22} color={'black'} />
                        </TouchableOpacity>

                        <Text style={styles.booknametxt}>{AddToCartList.name}</Text>
                        <Text style={styles.name}>{AddToCartList.name}</Text>

                        <View style={{ flexDirection: 'row', width: '80%', justifyContent: 'space-between', marginBottom: 4, alignItems: 'center' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                <Text style={{ fontSize: 18, color: '#015dd3' }}>₹ </Text>
                                <Text style={styles.prise}>{AddToCartList.prise}</Text>
                            </View>
                            <View style={styles.num}>
                                <TouchableOpacity style={styles.icon} onPress={handleDecrement} >
                                    <Entypo name="minus" size={15} color={"#000"} />
                                </TouchableOpacity>
                                <Text style={styles.number}>{count}</Text>
                                <TouchableOpacity style={styles.icon} onPress={handleIncrement} >
                                    <Entypo name="plus" size={15} color={"#000"} />
                                </TouchableOpacity>
                            </View>
                        </View>


                    </View>


                </View>

            </View>
        )
    }
    return (
        <View style={styles.container}>
            <StatusBar />
            <View style={styles.header}>
                <TouchableOpacity style={styles.Headericon} onPress={() => navigation.goBack()} >
                    <AntDesign name="left" size={20} color={"#FFF"} />
                </TouchableOpacity>
                {search ?
                    (<TextInput autoFocus={true} style={styles.Headertext} placeholder='Search here' />) :
                    <Text style={styles.Headertext}> MY CART</Text>
                }


                <TouchableOpacity onPress={HideSearchBtn} >
                    <Ionicons name='search-sharp' size={25} color={"#fff"} />
                </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.body}>


                    {/* <View style={styles.head}>
                            <Text style={{ fontSize: 16 }}>Items(5) </Text>
                            <Text style={{ fontSize: 16 }}>Total( ₹10908 ) </Text>
                        </View> */}
                    <FlatList showsVerticalScrollIndicator={false}
                        data={AddToCartList}
                        numColumns={1}
                        renderItem={({ item }) => <ListItem AddToCartList={item} />}
                        keyExtractor={(item) => item.id}
                    />





                    {/* <View style={styles.head}>
                            <Text style={{ fontSize: 16 }}>Items(5) </Text>
                            <Text style={{ fontSize: 16 }}>Total( ₹10908 ) </Text>
                        </View> */}
                    {/* <FlatList showsVerticalScrollIndicator={false}
                            data={data}
                            numColumns={1}
                            renderItem={({ item }) => <ListItem carts={item} />}
                            keyExtractor={(item) => item.id}
                        /> */}
                    <View style={{ marginBottom: 20, }}>
                        <View>
                            <Text style={{ marginBottom: 10, color: '#011E46', fontSize: 18, fontWeight: 'bold', paddingHorizontal: 5 }}>Price(items)</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 5, marginBottom: 10 }}>
                                <Text style={styles.pricetxt}>Item total</Text>
                                <Text style={styles.pricetxt}> ₹ 115</Text>
                            </View>
                            {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 5, marginBottom: 10 }}>
                                    <Text style={styles.pricetxt}>CGST</Text>
                                    <Text style={styles.pricetxt}> ₹ 50</Text>
                                </View> */}
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 5, marginBottom: 15, borderBottomWidth: 1, borderBottomStyle: "dotted", borderColor: '#b3bbc7', width: '100%' }}>
                                <Text style={styles.pricetxt}>Delivery </Text>
                                <Text style={styles.pricetxt}>free</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 5, marginBottom: 10, borderBottomWidth: 1, borderColor: '#b3bbc7', }}>
                                <Text style={styles.totaltxt}>Total</Text>
                                <Text style={styles.totaltxt}>₹ 300</Text>
                            </View>
                        </View>
                    </View>

                    {/* <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginBottom: 20 }}>
                            <TouchableOpacity style={styles.button1}>

                                <Text style={styles.btntxt1}>Add More</Text>

                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: '44%' }}  >
                                <TouchableOpacity colors={['#015DD3', '#011E46']} style={styles.btn1}>
                                    <Text style={styles.btntxt}>Buy</Text>
                                </TouchableOpacity>
                            </TouchableOpacity>
                        </View> */}



                    {/* <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
                        <TouchableOpacity style={styles.Btn}>
                            <Text style={{ color: '#fff' }}>BUY</Text>
                        </TouchableOpacity>
                    </View> */}
                    <View style={{ flexDirection: 'row', width: '100%' }}>
                        <View style={{ width: '60%', flexDirection: 'row' }}>
                            <Text>
                                Delivered to :
                            </Text>
                            <Text>
                                Home
                            </Text>
                        </View>
                        <TouchableOpacity style={styles.Btn1} onPress={() => navigation.navigate('AddNewAddress')}>
                            <Text style={{
                                color: "#41C9F2",
                                fontSize: 14,
                                // fontWeight: '700',
                                width: '100%',
                                textAlign: 'center'
                            }}>Change</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', marginBottom: 30 }}>
                        <Entypo name='location-pin' size={20} color={"#c2c2c2"} />
                        <Text>Anand Nagar. mumbai...
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.Btn} onPress={() => navigation.navigate('OrderStatus')}>
                        <Text style={{
                            color: "#fff",
                            fontSize: 18,
                            fontWeight: '700'
                        }}>Confirm Order</Text>
                    </TouchableOpacity>


                </View >







            </ScrollView>
            <View
                style={styles.footer}
            >

                <TouchableOpacity style={styles.alignFooter}
                    onPress={() => navigation.navigate('OfferKiranawala')}
                >
                    {/* <View style={styles.activefooter}> */}
                    <Ionicons name='home' size={22} color={'#677890'} />
                    {/* </View> */}
                    <Text style={styles.footertxt}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.alignFooter}
                    onPress={() => navigation.navigate('TopTabNavigation')}
                >

                    <AntDesign name='dropbox' size={22} color={'#677890'} />
                    <Text style={styles.footertxt}>My order</Text>
                </TouchableOpacity>




                <TouchableOpacity style={styles.alignFooter}
                    onPress={() => navigation.navigate('AddToCart')}
                >
                    <View style={styles.activefooter}>
                        <Ionicons name='md-cart' size={22} color={'#fff'} />
                    </View>
                    <Text style={styles.footertxt}>My Cart</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.alignFooter}
                    onPress={() => navigation.navigate('Profile')}
                >

                    <FontAwesome name='user-circle' size={22} color={'#677890'} />
                    <Text style={styles.footertxt}>Profile</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        paddingBottom: 70
    },
    header: {
        height: 70,
        width: '100%',
        backgroundColor: '#41C9F2',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    Headericon: {
        width: '10%'
    },
    Headertext: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
        width: '84%'
    },

    body: {
        flex: 1,
        paddingHorizontal: 20,
    },

    boxWithShadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        backgroundColor: '#fff',
        marginBottom: 20,
        padding: 10,
        borderRadius: 10,
        width: '98%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 100
    },
    icon: {
        height: 30,
        width: 30,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    num: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'orange',
        width: '50%',
        height: 30,
        borderRadius: 15,
        justifyContent: 'space-between',
        marginBottom: 7
    },
    booknametxt: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 7
    },
    name: {
        fontSize: 15,
        fontWeight: '600',
        marginBottom: 10
    },
    pricetxt: {
        fontSize: 18,
        marginBottom: 10,
        color: '#677890'
    },
    totaltxt: {
        fontSize: 18,
        color: 'blue',
        marginBottom: 10,
        color: '#015dd3'
    },


    Btn: {
        backgroundColor: '#41C9F2',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { weight: 1, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 5,
        alignSelf: 'center',
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },

    Btn1: {
        borderColor: '#41C9F2',
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    number: {
        color: '#fff'
    },
    footer: {
        width: '100%',
        height: 70,
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: 0, shadowColor: '#000',
        shadowOffset: { weight: 1, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 5,
        left: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16
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

})