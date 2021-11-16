import React, { useState,useEffect } from 'react';
import {ActivityIndicator, StyleSheet, TextInput, ScrollView, Text, View, StatusBar, TouchableOpacity, FlatList, Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ChooseACategoryFlatList from './ChooseACategoryFlatList';
import { useNavigation } from '@react-navigation/native';
export default function ChooseACategory() {
    const navigation = useNavigation();
    const [search, setSearch] = useState(false)
    const HideSearchBtn = () => {
        setSearch(!search)
    }
    const [data, setData] = useState([])
    // const STORAGE_KEY = 'Token'
    const [isLoading, setIsLoading] = useState(false);
    const category = async () => {
        setIsLoading(true)
        // var DEMO_TOKEN = await AsyncStorage.getItem(STORAGE_KEY);
        // console.log(DEMO_TOKEN)
        await fetch('https://covicaregroup.com/Grocery/public/api/Categoryshow', {
            method: 'GET',
            headers: {
                'Content-Type': 'appli cation/json',
                'Accept': 'application/json',
                // 'Authorization': 'Bearer ' + DEMO_TOKEN
            },
        }).then(res => res.json())
            .then(resData => {
                console.log(resData)
                setIsLoading(false)
                setData(resData)

            }).catch((error) => {
                // console.log(error)
                alert(error)
                setIsLoading(false)
            })

    }

    useEffect(() => {
        category();
    }, [])

    if (isLoading) {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
                <ActivityIndicator size="large" color="#F12A10" />
                <Text>Loading</Text>
            </View>
        )
    }

    const ListItem = ({ data }) => {



        return (
            <TouchableOpacity style={{ width: '33%', paddingHorizontal: 10, alignItems: 'center', justifyContent: 'center' }} onPress={() => navigation.navigate('CustomerShop')}>
                <View>
                    <Image style={styles.img}  source={{uri:`https://covicaregroup.com/Grocery/${data.image}`}} />
                </View>
                <Text style={styles.name}>{data.name}</Text>
            </TouchableOpacity>
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
                    <Text style={styles.Headertext}>Choose  A Category</Text>
                }
                <TouchableOpacity onPress={HideSearchBtn} >
                    <Ionicons name='search-sharp' size={26} color={"#F12A10"} />
                </TouchableOpacity>
            </View>
            <View style={styles.body}>
                <FlatList showsVerticalScrollIndicator={false}
                    data={data}
                    numColumns={3}
                    renderItem={({ item }) => <ListItem data={item} />}
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
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 15,
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
    },
    body: {
        flex: 1,
      marginBottom:60
    },
    img: {
        height: 100,
        width: 100,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#c4c4c4',
        marginBottom: 10
    },
    name: {
        fontSize: 16,
        fontWeight: '700',
        width: '80%',
        // color:'#000',
        marginBottom: 10,
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