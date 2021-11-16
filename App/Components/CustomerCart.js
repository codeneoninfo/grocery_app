import React, { useState } from 'react';
import { StyleSheet, TextInput, ScrollView, Text, View, StatusBar, TouchableOpacity, FlatList, Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CustomerCartFlatlist from './CustomerCartFlatlist';
import { useNavigation } from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
export default function CustomerCart() {
    const navigation = useNavigation();
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount((prevCount) => prevCount + 1);
    };
    const handleDecrement = () => {
        setCount((prevCount) => prevCount - 1);
    };
    const [search, setSearch] = useState(false)
    const HideSearchBtn = () => {
        setSearch(!search)
    }
    const ListItem = ({ CustomerCartFlatlist, }) => {
        return (
            <View style={{ alignItems: 'center', width: '100%', marginBottom: 20, paddingHorizontal: 10 }}>

                <View style={styles.box}>
                    <View style={{ width: '100%', flexDirection: 'row', marginBottom: 20, justifyContent: 'center' }}>
                        <View style={{ width: '33%' }}>
                            <Image style={styles.img} source={CustomerCartFlatlist.image} />
                        </View>
                        <View style={{ width: '67%' }}>
                            <View style={{ width: '100%', flexDirection: 'row', marginBottom: 10, alignItems: 'center' }}>
                                <View style={{ flexDirection: 'row', width: '90%' }}>
                                    <Text style={styles.name}>{CustomerCartFlatlist.fruitname} </Text>
                                    <Text style={styles.gm}>{CustomerCartFlatlist.gm}</Text>
                                </View>
                                <TouchableOpacity style={styles.deletebtn}>
                                    <MaterialCommunityIcons name="delete" size={20} color={"#F12A10"} />
                                </TouchableOpacity>
                            </View>
                            <View style={{ width: '50%', flexDirection: 'row', marginBottom: 10, alignItems: 'center' }}>
                                <View style={{ flexDirection: 'row', width: '35%' }}>
                                    <Text style={styles.address}>₹ </Text>
                                    <Text style={styles.address}>{CustomerCartFlatlist.prise}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', width: '35%' }}>
                                    <Text style={styles.offprise}>₹ </Text>
                                    <Text style={styles.offprise}>{CustomerCartFlatlist.offprise}</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', width: '100%', }}>
                                <Text style={styles.off}>{CustomerCartFlatlist.off} </Text>

                            </View>
                            <View style={styles.num}>
                                <TouchableOpacity style={styles.icon} onPress={handleDecrement} >
                                    <Entypo name="minus" size={15} color={"#F12A10"} />
                                </TouchableOpacity>
                                <Text style={styles.number}>{count}</Text>
                                <TouchableOpacity style={styles.icon} onPress={handleIncrement} >
                                    <Entypo name="plus" size={15} color={"#F12A10"} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View >
        )
    }
    return (
        <View style={styles.container}>
            <StatusBar />
            <View style={styles.header}>
                <TouchableOpacity style={styles.Headericon} onPress={() => navigation.goBack()}>
                    <AntDesign name="left" size={22} color={"#F12A10"} />
                </TouchableOpacity>
                {search ?
                    (<TextInput autoFocus={true} style={styles.searchtext} placeholder='Search here' />) :
                    <Text style={styles.Headertext}>CART</Text>
                }

                <TouchableOpacity onPress={HideSearchBtn} >
                    <Ionicons name='search-sharp' size={26} color={"#F12A10"} />
                </TouchableOpacity>
            </View>
            <View style={styles.body}>
                {/* <View style={styles.headtxtcontainer}>
                    <Text style={styles.fruittxt}>FRUITS</Text>
                    <Text style={styles.itemtxt}> 5 items</Text>
                </View> */}
                <FlatList showsVerticalScrollIndicator={false}
                    data={CustomerCartFlatlist}
                    numColumns={1}
                    renderItem={({ item }) => <ListItem CustomerCartFlatlist={item} />}
                    keyExtractor={(item) => item.id}
                />
                <View style={{ marginBottom: 20, width: '100%', paddingHorizontal: 10 }}>
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
                <View style={{ flexDirection: 'row', width: '100%', paddingHorizontal: 10 }}>
                    <View style={{ width: '60%', flexDirection: 'row' }}>
                        <Text style={{ color: '#000' }}>
                            Delivered to : </Text>
                        <Text>
                            Home
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.Btn1} onPress={() => navigation.navigate('CustomerAddNewAddress')}>
                        <Text style={{
                            color: "#F12A10",
                            fontSize: 14,
                            // fontWeight: '700',
                            width: '100%',
                            textAlign: 'center'
                        }}>Change</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginBottom: 30, paddingHorizontal: 10 }}>
                    <Entypo name='location-pin' size={20} color={"#c2c2c2"} />
                    <Text>Anand Nagar. mumbai...
                    </Text>
                </View>
                <TouchableOpacity style={styles.Btn} onPress={() => navigation.navigate('CustomerMyorderTabscreen')}>
                    <Text style={{
                        color: "#fff",
                        fontSize: 18,
                        fontWeight: '700'
                    }}>PAY</Text>
                </TouchableOpacity>
                {/* <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', paddingVertical: 10 }}>
                    <TouchableOpacity style={styles.btncontainer} onPress={() => navigation.navigate('Searchforarealandmark')} >
                        <Text style={styles.checktxt}>CHECKOUT</Text>
                    </TouchableOpacity>
                </View> */}
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.alignFooter} onPress={() => navigation.navigate('CustomerHome')}>
                    <Entypo name="home" size={30} color={"grey"} />
                    <Text style={styles.footertxt}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.alignFooter} onPress={() => navigation.navigate('CustomerCart')}>
                    <View style={styles.footeractive}>
                        <FontAwesome name="shopping-cart" size={30} color={"#fff"} />
                    </View>
                    <Text style={styles.footertxt}>Cart</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.alignFooter} onPress={() => navigation.navigate('CustomerMyorderTabscreen')}>
                    <Feather name="box" size={30} color={"grey"} />
                    <Text style={styles.footertxt}> My Order</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.alignFooter} onPress={() => navigation.navigate('CustomerProfile')}>
                    <Ionicons name="ios-person-circle-outline" size={30} color={"grey"} />
                    <Text style={styles.footertxt}>Profile</Text>
                </TouchableOpacity>
            </View>
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
        paddingHorizontal: 10,
        marginBottom: 10
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
    searchtext: {
        color: '#F12A10',
        fontSize: 20,
        width: '82%',
        fontWeight: '600',
        // textAlign:'center'   
    },
    headtxtcontainer: {
        backgroundColor: '#F12A10B0',
        width: '100%',
        height: 45,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        paddingHorizontal: 10
    },
    fruittxt: {
        fontSize: 18,
        fontWeight: '700',
        color: '#fff',
        width: '80%'
    },
    itemtxt: {
        fontSize: 16,
        fontWeight: '700',
        color: '#fff',
        width: '20%'
    },
    body: {
        flex: 1,
        marginBottom: 65
    },
    box: {
        width: '100%',
        borderBottomWidth: 1,
        borderColor: '#c4c4c4',
        paddingHorizontal: 10,
        marginTop: 10,
    },
    img: {
        height: 90,
        width: 90,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#c4c4c4'
    },
    name: {
        fontSize: 18,
        fontWeight: '400',
        // width: '70%'
    },
    gm: {
        // borderWidth: 1,
        // height: 20,
        // width: 60,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        borderColor: '#C4C4C4',
        color: '#000',
        fontSize: 14
    },
    offtxt: {
        width: '70%',
        fontSize: 16,
        color: '#F12A10',
        fontWeight: '700'
    },
    ratingcontainer: {
        width: '20%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
        height: 20,
        borderRadius: 5,
    },
    ratingtxt: {
        fontSize: 13,
        fontWeight: '700',
        color: '#fff'
    },
    address: {
        fontSize: 14,
        fontWeight: '400',
    },
    offprise: {
        fontSize: 14,
        fontWeight: '400',
        color: '#C4C4C4',
        textDecorationLine: 'line-through',
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
        backgroundColor: '#F12A10',
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
        justifyContent: 'center',
        width: 190,
        height: 50
    },

    Btn1: {
        borderColor: '#F12A10',
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',

    },
    off: {
        fontSize: 14,
        fontWeight: '700',
        color: '#F12A10',
        width: '60%'
    },
    deletebtn: {
        borderWidth: 1,
        borderRadius: 100,
        borderColor: '#F12A10',
        height: 25,
        width: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    num: {
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: '#015dd3',
        width: '100%',
        height: 20,
        borderRadius: 5,
        justifyContent: 'space-between',
        marginBottom: 7,
        justifyContent: 'flex-end'
    },
    icon: {
        height: 25,
        width: 25,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#F12A10'
    },
    number: {
        color: '#000',
        borderWidth: 1.5,
        borderColor: '#F12A10',
        height: 25,
        width: 48,
        borderRadius: 15,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#F12A10',
        fontSize: 16
    },
    checktxt: {
        fontSize: 18,
        fontWeight: '700',
        color: '#fff'
    },
    btncontainer: {
        height: 44,
        width: '50%',
        backgroundColor: '#F12A10',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        // marginBottom:10
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
    footeractive: {
        width: 40,
        height: 40,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100
    },
})