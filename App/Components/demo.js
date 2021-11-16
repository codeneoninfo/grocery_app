import React, { useState,useEffect } from 'react';
import {ActivityIndicator, StyleSheet, ScrollView, TextInput, Text, View, StatusBar, TouchableOpacity, FlatList, Image } from 'react-native';

import { useNavigation } from '@react-navigation/core';

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
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';
import TopOfferFoodList from './TopOfferFoodList';
export default function TopOfferFood() {
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
                'Content-Type': 'application/json',
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
                <ActivityIndicator size="large" color="#0016d3" />
                <Text>Loading</Text>
            </View>
        )
    }
    const navigation = useNavigation();
    const ListItem = ({ data }) => {
        return (
            <View style={{ alignItems: 'center', width: '100%', marginTop: 10, }} >
                <TouchableOpacity style={styles.boxWithShadow} onPress={() => navigation.navigate('Food')}>


                    <Image style={styles.img}   source={{uri:`https://covicaregroup.com/Grocery/${data.image}`}} />

                    <View style={{ width: '100%', paddingHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.booknametxt}>{data.name}</Text>

                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Entypo name="star" size={19} color={"#ff8c00"} />
                            <Text style={styles.name}>{data.rate}</Text>


                        </View>
                    </View>
                    <Text style={styles.food}>{data.food}</Text>
                    <View style={{ width: '100%', paddingHorizontal: 10, marginBottom: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.addresstxt}>{data.address}</Text>

                        <View style={{ flexDirection: 'row' }}>

                            <Text style={styles.name1}>{data.time}</Text>


                        </View>
                    </View>
                </TouchableOpacity>
            </View>


        )
    }
    return (
        <View style={styles.container}>
            <StatusBar />


            {/* <ScrollView showsVerticalScrollIndicator={false}> */}
            <View style={styles.body}>
                <View style={styles.featuredrow}>
                    <Text style={styles.category}>Top Eateries</Text>
                    <TouchableOpacity style={{ flexDirection: 'row', }} onPress={() => navigation.navigate('AllFood')}>
                        <Text style={{ color: '#41C9F2', fontSize: 15, fontWeight: 'bold' }}>View all </Text>
                        <MaterialIcons name="double-arrow" size={20} color={"#41C9F2"} />
                    </TouchableOpacity>

                </View>

                <FlatList showsVerticalScrollIndicator={false}
                    data={data}
                    numColumns={1}
                    renderItem={({ item }) => <ListItem data={item} />}
                    keyExtractor={(item) => item.id}
                />


            </View >

            {/* </ScrollView> */}

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',

    },
    Header: {
        height: 70,
        paddingHorizontal: 10,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#41C9F2',
        width: '100%',
        flexDirection: 'row',
        // marginBottom: 20
    },
    input: {
        fontSize: 15,
        color: '#677890',
        width: '90%',

    },
    boxshadow: {
        borderRadius: 10,

        height: 40,
        width: '85%',
        backgroundColor: '#f2f7fd',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 14,
    },
    Headericon: {
        width: '10%'
    },
    category: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#011E46',
        width: '70%',
    },
    featuredrow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    body: {
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: '#fff'
    },
    boxWithShadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        backgroundColor: '#fff',
        marginBottom: 5,
        borderRadius: 10,
        width: '98%',
        alignItems: 'center',
    },
    img: {
        width: '98%',
        height: 200,
        marginBottom: 17,
        borderRadius: 10,
        margin: 5,
    },


    booknametxt: {
        fontSize: 18,
        fontWeight: '700',

    },
    addresstxt: {
        fontSize: 13,
        fontWeight: '300',
    },
    name: {
        fontSize: 18,
        fontWeight: '700',

    },
    name1: {
        fontSize: 13,
        fontWeight: '600',

    },
    food: {
        fontSize: 13,
        fontWeight: '600',
        width: '100%',
        paddingHorizontal: 10,
        marginBottom: 2
    },
    footertxt: {
        justifyContent: 'center',
        alignItems: 'center',
        color: '#677890',
        fontSize: 13
    },



})