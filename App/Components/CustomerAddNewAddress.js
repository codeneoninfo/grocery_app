import React, { useState } from 'react';
import { StyleSheet, ScrollView, TextInput, Text, View, StatusBar, TouchableOpacity, FlatList, Image } from 'react-native';
// import CheckBox from 'react-native-checkbox';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
export default function CustomerAddNewAddress() {
    const navigation = useNavigation();
    const [isSelected, setSelection] = useState(false);
    return (
        <View style={styles.container}>
            <StatusBar />
            <View style={styles.header}>
                <TouchableOpacity style={styles.Headericon} onPress={() => navigation.goBack()} >
                    <AntDesign name="left" size={20} color={"#F12A10"} />
                </TouchableOpacity>
                <Text style={styles.Headertext}>ADD NEW ADDRESS</Text>

            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.body}>

                    <Text style={styles.addresstext}>Address Details</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginBottom: 25 }}>
                        <TextInput style={styles.textinputHome} placeholder="House no">

                        </TextInput>
                        <TextInput style={styles.textinputApartment} placeholder="Apartment Name">

                        </TextInput>

                    </View>
                    <TextInput style={styles.textinputlandmark} placeholder="Landmark For easy reach out">

                    </TextInput>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginBottom: 25 }}>
                        <TextInput style={styles.textinputHome} placeholder="City">

                        </TextInput>
                        <TextInput style={styles.textinputApartment}
                            maxLength={6}
                            keyboardType="numeric"
                            placeholder="Pincode">

                        </TextInput>

                    </View>
                    <Text style={styles.choosetext}>Choose for this address</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', marginBottom: 60, justifyContent: 'space-between' }}>
                        <TouchableOpacity style={styles.box} >

                            <Text style={styles.boxtext}>Home</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.box} >

                            <Text style={styles.boxtext}>Office</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.box} >

                            <Text style={styles.boxtext}>Other</Text>
                        </TouchableOpacity>
                    </View>
                    {/* <View style={styles.checkboxContainer}>
                        <CheckBox
                            label='Set as my default delivery address'
                            value={isSelected}
                            onValueChange={setSelection}
                            checkedColor={"#41C9F2"}
                            onChange={(checked) => console.log('checked', checked)}
                        />
                    </View> */}
                    <View style={{ width: '100%', alignItems: 'center' }}>
                        <TouchableOpacity style={styles.btncontainer} onPress={() => navigation.navigate('Searchforarealandmark')}  >
                            <Text style={styles.addtxt}> Add Address </Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </ScrollView>
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
        width: "100%",
        height: "100%",
        backgroundColor: '#fff'
    },
    header: {
        height: 70,
        width: '100%',
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        shadowColor: '#000',
        shadowOffset: { weight: 0, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        elevation: 8,
        // marginBottom: 20
    },
    Headericon: {
        width: '10%'
    },
    Headertext: {
        color: '#F12A10',
        fontSize: 18,
        width: '84%',
        fontWeight: '600'
    },
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginBottom:70
    },
    box: {
        borderColor: '#c4c4c4',
        borderWidth: 1,
        height: 45,
        borderRadius: 5,
        backgroundColor: '#C4C4C48F',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        width: '30%'
    },
    boxtext: {
        justifyContent: 'center',
        alignItems: 'center',
        color: '#000',
        fontSize: 17
    },
    textinputHome: {
        borderBottomWidth: 1,
        borderColor: '#000',
        width: '35%',
        fontSize: 15,
        fontWeight: '400',
        marginBottom: 25,
    },
    textinputApartment: {
        borderBottomWidth: 1,
        borderColor: '#000',
        width: '55%',
        fontSize: 15,
        fontWeight: '400',
        marginBottom: 25,
    },
    textinputlandmark: {
        borderBottomWidth: 1,
        borderColor: '#000',
        width: '100%',
        marginBottom: 50,
        fontSize: 15,
        fontWeight: '400'
    },
    labelStyle: {
        color: 'black',
        fontSize: 15,
        fontWeight: '400',
        width: '90%'
    },
    checkboxContainer: {
        flexDirection: "row",
        alignItems: 'center',
        marginTop: 45,
        justifyContent: "center",
        width: '90%',
        marginBottom: 20
    },
    checkbox: {
        width: '10%',
    },
    addtxt: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        width: '100%',
        color: 'white',
    },
    btncontainer: {
        backgroundColor: '#F12A10',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        width: '60%',
        height: 50,

    },
    addresstext: {
        width: '100%',
        fontSize: 19,
        fontWeight: '500',
        marginBottom: 25
    },
    choosetext: {
        width: '100%',
        fontSize: 18,
        fontWeight: '900',
        marginBottom: 20
    },
    checkboxStyle: {
        color: 'red'
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
