import React, { useState } from 'react';
import { StyleSheet, TextInput, ScrollView, Text, View, StatusBar, TouchableOpacity, FlatList, Image } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomerFruitsFlatlist from './CustomerFruitsFlatlist';
export default function CustomerFruits() {
    const [search, setSearch] = useState(false)
    const HideSearchBtn = () => {
        setSearch(!search)
    }
    const ListItem = ({ CustomerFruitsFlatlist, index }) => {
        return (
            <View style={{ alignItems: 'center', width: '100%', marginBottom: 20, }}>

                <View style={styles.box}>
                    <View style={{ width: '100%', flexDirection: 'row', marginBottom: 20, justifyContent: 'center' }}>
                        <View style={{ width: '30%' }}>
                            <Image style={styles.img} source={CustomerFruitsFlatlist.image} />
                        </View>
                        <View style={{ width: '70%' }}>
                            <View style={{ width: '90%', flexDirection: 'row', marginBottom: 10, alignItems: 'center' }}>
                                <Text style={styles.name}>{CustomerFruitsFlatlist.shopname} </Text>
                                <Text style={styles.gm}>{CustomerFruitsFlatlist.gm}</Text>
                            </View>
                            <View style={{ width: '50%', flexDirection: 'row', marginBottom: 10, alignItems: 'center' }}>
                                <View style={{ flexDirection: 'row', width: '35%' }}>
                                    <Text style={styles.prise}>₹ </Text>
                                    <Text style={styles.prise}>{CustomerFruitsFlatlist.prise}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', width: '35%' }}>
                                    <Text style={styles.offprise}>₹ </Text>
                                    <Text style={styles.offprise}>{CustomerFruitsFlatlist.offprise}</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', width: '100%' }}>
                                <Text style={styles.off}>{CustomerFruitsFlatlist.off} </Text>
                                <TouchableOpacity style={styles.addbtn}>
                                    <Text style={styles.addtxt}>{CustomerFruitsFlatlist.add}</Text>
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
                <TouchableOpacity style={styles.Headericon}>
                    <AntDesign name="left" size={22} color={"#F12A10"} />
                </TouchableOpacity>
                {search ?
                    (<TextInput autoFocus={true} style={styles.searchtext} placeholder='Search here' />) :
                    <Text style={styles.Headertext}>FRUITS</Text>
                }

                <TouchableOpacity onPress={HideSearchBtn} >
                    <Ionicons name='search-sharp' size={26} color={"#F12A10"} />
                </TouchableOpacity>
            </View>
            <View style={styles.body}>
                <Text style={styles.shoptxt}>Fruits (13)</Text>
                <FlatList showsVerticalScrollIndicator={false}
                    data={CustomerFruitsFlatlist}
                    numColumns={1}
                    renderItem={({ item }) => <ListItem CustomerFruitsFlatlist={item} />}
                    keyExtractor={(item) => item.id}
                />
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.alignFooter} onPress={() => navigation.navigate('CustomerHome')}>
                    <Entypo name="home" size={30} color={"grey"} />
                    <Text style={styles.footertxt}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.alignFooter} onPress={() => navigation.navigate('CustomerCart')}>
                    <FontAwesome name="shopping-cart" size={30} color={"grey"} />
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
    searchtext: {
        color: '#F12A10',
        fontSize: 20,
        width: '82%',
        fontWeight: '600',
        // textAlign:'center'   
    },
    body: {
        flex: 1,
        paddingHorizontal: 10,
        // paddingVertical: 10
    },
    box: {
        width: '100%',
        borderBottomWidth: 1,
        borderColor: '#c4c4c4',
        paddingHorizontal: 10,
        paddingVertical: 10
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
    prise: {
        fontSize: 14,
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
    off: {
        fontSize: 14,
        fontWeight: '700',
        color: '#F12A10',
        width: '80%'
    },
    addbtn: {
        height: 25,
        width: 60,
        backgroundColor: '#F12A10',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    addtxt: {
        fontSize: 12,
        color: '#fff',
        fontWeight: '500',
        textAlign: 'center'
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