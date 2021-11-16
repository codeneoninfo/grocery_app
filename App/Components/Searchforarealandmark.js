import React, { useState } from 'react';
import { StyleSheet, TextInput, ScrollView, Text, View, StatusBar, TouchableOpacity, FlatList, Image } from 'react-native';
// import CheckBox from 'react-native-checkbox';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SearchforarealandmarkFlatlist from './SearchforarealandmarkFlatlist';
import { useNavigation } from '@react-navigation/native';
export default function Searchforarealandmark() {
    const navigation = useNavigation();
    const [isSelected, setSelection] = useState(false);
    const ListItem = ({ SearchforarealandmarkFlatlist, }) => {
        return (
            <View style={{ alignItems: 'center', width: '100%', marginBottom: 15, paddingHorizontal: 10, paddingVertical: 10 }}>
                <View style={styles.box}>
                    {/* <View style={styles.checkboxContainer}>
                        <CheckBox
                            label=''
                            value={isSelected}
                            onValueChange={setSelection}
                            checkedColor={"#41C9F2"}
                            onChange={(checked) => console.log('checked', checked)}
                        />
                    </View> */}
                    <View style={{ width: '80%' }}>
                        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }} >
                            <View style={{ width: '90%', flexDirection: 'row' }} >
                                <Text style={styles.defaulttxt}>Default address</Text>
                                <Text style={styles.addresstypetxt}>{SearchforarealandmarkFlatlist.addresstype} </Text>
                            </View>
                            <View style={{ alignItems: 'flex-end', width: '10%', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <TouchableOpacity >
                                    <Feather name="edit-3" size={20} color={"#000"} />
                                </TouchableOpacity>
                                <TouchableOpacity >
                                    <MaterialCommunityIcons name="delete" size={20} color={"#000"} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Text style={styles.addresstxt}>{SearchforarealandmarkFlatlist.address} </Text>
                        <View style={{ width: '80%', flexDirection: 'row' }}>
                            <Text style={styles.mobnotxt}>Mob.- </Text>
                            <Text style={styles.mobnotxt}>{SearchforarealandmarkFlatlist.mobno} </Text>
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
                <TouchableOpacity style={styles.Headericon} onPress={() => navigation.goBack()}>
                    <AntDesign name="left" size={22} color={"#F12A10"} />
                </TouchableOpacity>
                <Text style={styles.Headertext}>Search for area, landmark </Text>
            </View>
            <View style={styles.body}>
                <View style={styles.searchlocation}>
                    <View style={{ width: '10%', }}>
                        <MaterialIcons name="my-location" size={25} color={"grey"} />
                    </View>
                    <TextInput style={styles.Textinput} placeholder="Choose current location " />
                </View>
                <View style={styles.headcontainer}>
                    <Text style={styles.saveaddtxt}>Saved Address</Text>
                    <TouchableOpacity style={{ flexDirection: 'row', width: '100%', alignItems: 'flex-end' }} onPress={() => navigation.navigate('CustomerAddNewAddress')} >
                        <AntDesign name="plus" size={22} color={"#F12A10"} />
                        <Text style={styles.addtxt}> Add address</Text>
                    </TouchableOpacity>
                </View>
                <FlatList showsVerticalScrollIndicator={false}
                    data={SearchforarealandmarkFlatlist}
                    numColumns={1}
                    renderItem={({ item }) => <ListItem SearchforarealandmarkFlatlist={item} />}
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
    headcontainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    addtxt: {
        fontSize: 15,
        color: '#F12A10',
        fontWeight: '600',
        // width:'50%'
    },
    saveaddtxt: {
        fontSize: 15,
        fontWeight: '600',
        width: '65%'
    },
    Textinput: {
        // backgroundColor: 'white',
        borderRadius: 10,
        // marginBottom: 5,
        width: '90%',
        // height: 70,
        // paddingHorizontal: 20,
        // paddingVertical: 10,
        fontSize: 17,
        borderWidth: 1,
        borderColor: '#fff'
    },
    searchlocation: {
        borderWidth: 1,
        flexDirection: 'row',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        borderRadius: 5,
        borderColor: '#000',
        width: '90%'
    },
    body: {
        flex: 1,
        marginBottom:60,
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center'

    },
    box: {
        width: '100%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 8,
        backgroundColor: '#fff',
        borderRadius: 7,
        paddingHorizontal: 10,
        marginBottom: 20,
        flexDirection: 'row',
        paddingVertical: 8,
        paddingHorizontal: 10
    },
    addresstypetxt: {
        fontSize: 14,
        fontWeight: '700',
        color: '#000'
    },
    defaulttxt: {
        fontSize: 14,
        fontWeight: '400',
        color: '#000',
        width: '60%'
    },
    addresstxt: {
        fontSize: 14,
        fontWeight: '400',
        width: '50%'
    },
    mobnotxt: {
        fontSize: 14,
        fontWeight: '400',

    },
    checkboxContainer: {
        width: '10%',
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