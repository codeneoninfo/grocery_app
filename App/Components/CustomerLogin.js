import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function CustomerLogin() {
    const navigation = useNavigation();
  
    return (
        <View style={styles.conatiner}>
            <StatusBar />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    {/* {error ? (<Text style={{ color: 'red', fontSize: 16, marginBottom: 10, width: '100%' }}>{error}</Text>) : null} */}
                    <Text style={styles.logintxt}>Login</Text>
                    <Text style={styles.Welcometxt}> Hello!Welcome Back to Account</Text>
                    <View style={styles.imgcontainer}>
                        <Ionicons name="ios-person-circle-outline" size={120} color={"#F12A10"} />
                    </View>
                </View>
                <View style={styles.body}>


                    <View style={{ width: '100%', marginBottom: 10 }}>
                        <Text style={styles.enteremailtxt}>Enter your Email</Text>
                        <TextInput
                            style={styles.Textinput}
                            placeholder="codeneonsolution@gmail.com"
                            placeholderTextColor="#C4C4C4" />
                    </View>
                    <View style={{ width: '100%', marginBottom: 20, }}>
                        <Text style={styles.enteremailtxt}>Enter mobile number</Text>
                        <TextInput
                            style={styles.Textinput}
                            placeholder="+91 ********10"
                            maxLength={10}
                            keyboardType="numeric"
                            placeholderTextColor="#C4C4C4"
                            // value={userInfo.phone}
                            // onChangeText={(value) => setUserInfo({ ...userInfo, ['phone']: value })} 
                            />
                    </View>

                    <View style={{ width: '100%', alignItems: 'center', marginBottom: 20 }}>
                        <TouchableOpacity style={styles.btncontainer} onPress={login}>
                            <Text style={styles.otptxt}> Get OTP </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'center', marginBottom: 30 }}>
                        <Text style={styles.Alredaytxt}>Don’t have an account ? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('CustomerRegister')}>
                            <Text style={styles.registertxt}>Register</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    conatiner: {
        width: '100%',
        height: '100%',
        backgroundColor: '#F12A10',
    },
    header: {
        width: '100%',
        height: 350,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 165,
        borderBottomRightRadius: 165
    },
    logintxt: {
        fontSize: 24,
        fontWeight: '700',
        color: '#F12A10',
        marginBottom: 10,
        width: '90%',
        textAlign: 'center'
    },
    Welcometxt: {
        fontSize: 18,
        fontWeight: '400',
        color: '#F12A10',
        marginBottom: 10,
        width: '90%',
        textAlign: 'center'
    },
    body: {
        flex: 1,
        paddingHorizontal: 30,
        paddingVertical: 10
    },
    enteremailtxt: {
        fontSize: 18,
        color: 'white',
        marginBottom: 10,
        fontWeight: 'bold'
    },
    Textinput: {
        // backgroundColor: 'white',
        borderRadius: 10,
        marginBottom: 5,
        width: '100%',
        height: 70,
        paddingHorizontal: 20,
        paddingVertical: 10,
        fontSize: 17,
        borderWidth: 1,
        borderColor: '#fff',
        color: '#fff'
    },
    imgcontainer: {
        width: 150,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#F12A10',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 8,
        backgroundColor: '#fff',
        borderRadius: 100
    },
    Groceryimg: {
        height: 150,
        width: 150,
        borderRadius: 100
    },
    registertxt: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#fff'
    },
    Alredaytxt: {
        fontSize: 17,
        // fontWeight: 'bold',
        color: '#fff'
    },
    otptxt: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        width: '100%',
        color: '#F12A10',
    },
    btncontainer: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        width: '50%',
        height: 50,
        shadowColor: '#000',
        shadowOffset: { weight: 0, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 11,
        paddingVertical: 10,
        paddingHorizontal: 10,
        elevation: 5,
    },
})
