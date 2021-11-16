import React, { useState } from 'react';
import { StyleSheet, TextInput, ScrollView, Text, View, StatusBar, TouchableOpacity, FlatList, Image } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CustomerShopFlatList from './CustomerShopFlatList';
import { useNavigation } from '@react-navigation/native';
export default function CustomerShop() {
    const navigation = useNavigation();
    const [search, setSearch] = useState(false)
    const HideSearchBtn = () => {
        setSearch(!search)
    }
    const ListItem = ({ CustomerShopFlatList, index }) => {
        return (
            <View style={styles.boxcontainer}>

                <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('CustomerShopitem')}>
                    <View style={{ width: '100%', flexDirection: 'row', marginBottom: 20, justifyContent: 'center' }}>
                        <View style={{ width: '33%' }}>
                            <Image style={styles.img} source={CustomerShopFlatList.image} />
                        </View>
                        <View style={{ width: '67%' }}>
                            <View style={{ width: '100%', flexDirection: 'row', marginBottom: 5 }}>
                                <Text style={styles.name}>{CustomerShopFlatList.shopname}</Text>
                                <Text style={styles.time}>{CustomerShopFlatList.time}</Text>
                            </View>
                            <Text style={styles.address}>{CustomerShopFlatList.address}</Text>
                            <View style={{ width: '100%', flexDirection: 'row' }}>
                                <Text style={styles.offtxt}>{CustomerShopFlatList.off}</Text>
                                <View style={styles.ratingcontainer}>
                                    <Text style={styles.ratingtxt}>{CustomerShopFlatList.rating}</Text>
                                    <Entypo name="star" size={15} color={"#fff"} />
                                </View>

                            </View>

                        </View>
                    </View>
                </TouchableOpacity>
            </View>
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
                    <Text style={styles.Headertext}>SHOP</Text>
                }

                <TouchableOpacity onPress={HideSearchBtn} >
                    <Ionicons name='search-sharp' size={26} color={"#F12A10"} />
                </TouchableOpacity>
            </View>
            <View style={styles.body}>
                <Text style={styles.shoptxt}>Shop (04)</Text>
                <FlatList showsVerticalScrollIndicator={false}
                    data={CustomerShopFlatList}
                    numColumns={1}
                    renderItem={({ item }) => <ListItem CustomerShopFlatList={item} />}
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
        marginBottom: 60

    },
    box: {
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { weight: 1, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 8,
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    boxcontainer: {
        alignItems: 'center',
        width: '100%',
        marginBottom: 10,
        paddingHorizontal: 10,
        justifyContent: 'center',
        paddingVertical: 10
    },
    img: {
        height: 90,
        width: 90,
        borderRadius: 10
    },
    name: {
        fontSize: 18,
        fontWeight: '400',
        width: '70%'
    },
    time: {
        borderWidth: 1,
        height: 20,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        borderColor: '#C4C4C4',
        color: '#000',
        fontSize: 12
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
        fontSize: 13,
        fontWeight: '300',
        marginBottom: 20
    },
    shoptxt: {
        fontSize: 18,
        fontWeight: '500',
        // marginBottom:20,
        justifyContent: 'center',
        width: '80%',
        height: 40
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