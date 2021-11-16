import React, { useState } from 'react';
import { StyleSheet, TextInput, ScrollView, Text, View, StatusBar, TouchableOpacity, FlatList, Image } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CustomerShopitemflatlist from './CustomerShopitemflatlist';
import { useNavigation } from '@react-navigation/native';
export default function CustomerShopitem() {
    const navigation = useNavigation();
    const [search, setSearch] = useState(false)
    const HideSearchBtn = () => {
        setSearch(!search)
    }
    const ListItem = ({ CustomerShopitemflatlist, index }) => {
        return (
            <View style={styles.boxcontainer}>

                <View style={styles.box}>
                    <View style={{ width: '100%', flexDirection: 'row', marginBottom: 20, justifyContent: 'center' }}>

                        <View style={{ width: '68%' }}>
                            <Text style={styles.name}>{CustomerShopitemflatlist.name}</Text>
                            <Text style={styles.name2}>{CustomerShopitemflatlist.name2}</Text>
                            <View style={styles.prisecontainer}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={styles.orignalprise}>₹ </Text>
                                    <Text style={styles.orignalprise}>{CustomerShopitemflatlist.orignalprise}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <Text style={styles.prise}>  ₹ </Text>
                                    <Text style={styles.prise}>{CustomerShopitemflatlist.prise} </Text>
                                </View>
                                <Text style={styles.discount}>{CustomerShopitemflatlist.discount}</Text>
                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <FontAwesome name="star" size={20} color={"#ffc600"} />
                                <FontAwesome name="star" size={20} color={"#ffc600"} />
                                <FontAwesome name="star" size={20} color={"#ffc600"} />
                                <FontAwesome name="star" size={20} color={"#c4c4c4"} />
                                <FontAwesome name="star" size={20} color={"#c4c4c4"} />
                            </View>


                        </View>
                        <View style={{ width: '32%', alignItems: 'center', justifyContent: 'center' }}>

                            <Image style={styles.img} source={CustomerShopitemflatlist.image} />
                            <TouchableOpacity style={styles.btncontainer}>
                                <Text style={styles.btntxt}>Add +</Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                    {/* <TouchableOpacity style={styles.num}>
                        <Text style={{ width: '100%', textAlign: 'center', color: 'white' }}>Add +</Text>
                    </TouchableOpacity> */}
                </View>
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
                    <Text style={styles.Headertext}></Text>
                }

                <TouchableOpacity onPress={HideSearchBtn} >
                    <Ionicons name='search-sharp' size={26} color={"#F12A10"} />
                </TouchableOpacity>
            </View>
            <View style={styles.body}>
                <FlatList showsVerticalScrollIndicator={false}
                    data={CustomerShopitemflatlist}
                    numColumns={1}
                    renderItem={({ item }) => <ListItem CustomerShopitemflatlist={item} />}
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
        // paddingVertical: 10
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
        paddingHorizontal: 13,
        paddingVertical: 10,
       justifyContent:'center',
       alignItems:'center'
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
        width: 95,
        height: 95,
        borderRadius: 10,
        marginBottom: 5
    },
    btncontainer: {
        width: 80,
        height: 27,
        backgroundColor: '#F12A10',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btntxt: {
        width: '100%',
        textAlign: 'center',
        color: 'white'
    },
    
    name: {
        fontSize: 18,
        fontWeight: '400',
        width: '70%',
        marginBottom: 5
    },
    name2: {
        fontSize: 15,
        fontWeight: '400',
        width: '70%',
        marginBottom: 9,
        color: '#78889e',
    },
    prise: {
        fontSize: 14,
        fontWeight: '400',
        marginBottom: 7
    },
    orignalprise: {
        fontSize: 15,
        textDecorationLine: 'line-through',
        color: '#78889e',
        marginBottom: 7
    },
    discount: {
        fontSize: 14,
        color: '#78889e',
        marginBottom: 7
    },
    prisecontainer: {
        flexDirection: 'row',
        width: '80%',
        justifyContent: 'space-between',
        marginBottom: 4,
        alignItems: 'center'
    },
    Condition: {
        fontSize: 15,
        color: '#78889e'
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