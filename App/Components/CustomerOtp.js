import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, StatusBar, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
export default function CustomerOtp() {
    const navigation = useNavigation();
    const [otp, otpData] = React.useState({ 0: '', 1: '', 2: '', 3: '' });
    const setotp = (val, i) => {
        if (i == 0 && val) {
            ref_input2.current.focus()
            otpData({ ...otp, [i]: val })
        } else if (i == 1 && val) {
            ref_input3.current.focus()
            otpData({ ...otp, [i]: val })
        } else if (i == 1 && !val) {
            ref_input1.current.focus()
            otpData({ ...otp, [i]: val })
        } else if (i == 2 && val) {
            ref_input4.current.focus()
            otpData({ ...otp, [i]: val })
        } else if (i == 2 && !val) {
            ref_input2.current.focus()
            otpData({ ...otp, [i]: val })
        } else if (i == 3 && val) {
            otpData({ ...otp, [i]: val })
        } else if (i == 3 && !val) {
            ref_input3.current.focus()
            otpData({ ...otp, [i]: val })
        }
    }

    const ref_input1 = useRef();
    const ref_input2 = useRef();
    const ref_input3 = useRef();
    const ref_input4 = useRef();



    return (
        <View style={styles.conatiner}>
            <StatusBar />
            <ScrollView  showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <Text style={styles.otptxt}>OTP verification</Text>
                    <View style={styles.imgcontainer}>
                        <Image style={styles.Mobileimg} source={require('../Images/Mobile.png')} />
                    </View>
                </View>
                <View style={styles.body}>
                    <Text style={styles.Title}>Enter OTP </Text>
                    <View style={styles.textCenterView} >

                        <TextInput

                            autoFocus={true}
                            style={styles.textinput}
                            keyboardType="phone-pad"
                            placeholder="0"
                            returnKeyType="next"
                            maxLength={1}
                            placeholderTextColor="#fff"
                            ref={ref_input1}
                            onChangeText={(val) => setotp(val, 0)}
                        />
                        <TextInput
                            style={styles.textinput}
                            keyboardType="phone-pad"
                            placeholder="0"
                            maxLength={1}
                            placeholderTextColor="#fff"
                            ref={ref_input2}
                            returnKeyType="next"
                            onChangeText={(val) => setotp(val, 1)}
                        />
                        <TextInput
                            style={styles.textinput}
                            keyboardType="phone-pad"
                            placeholder="0"
                            maxLength={1}
                            placeholderTextColor="#fff"
                            onChangeText={(val) => setotp(val, 2)}
                            ref={ref_input3}
                        />
                        <TextInput
                            style={styles.textinput}
                            keyboardType="phone-pad"
                            placeholder="0"
                            maxLength={1}
                            placeholderTextColor="#fff"
                            ref={ref_input4}
                            onChangeText={(val) => setotp(val, 3)}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'center', marginBottom: 30 }}>
                        <Text style={styles.getotptxt}>Don’t get otp ?  </Text>
                        <TouchableOpacity>
                            <Text style={styles.resendtxt}>Resend </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '100%', alignItems: 'center' }}>
                        <TouchableOpacity style={styles.btncontainer}  onPress={() => navigation.navigate('CustomerBottomtab')}>
                            <Text style={styles.verifytxt}> Verify </Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </ScrollView>
        </View>
    )
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
    Mobileimg: {
        height: 90,
        width: 90,
    },
    imgcontainer: {
        backgroundColor: '#F12A10',
        height: 130,
        width: 130,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    otptxt: {
        width: '84%',
        textAlign: 'center',
        fontSize: 23,
        color: '#F24029',
        fontWeight: 'bold',
        marginBottom: 30
    },
    body: {
        width: '100%',
        flex: 1,
        paddingVertical: 20,
        paddingHorizontal: 30,
        justifyContent: 'center'
    },
    textinput: {
        textAlign: 'center',
        padding: 5,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#fff',
        width: 50,
        height: 50,
        color: '#fff',
        // backgroundColor: '#F24029',
    },
    textCenterView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 50,
    },
    Title: {
        fontSize: 18,
        fontWeight: "400",
        color: '#fff',
        marginBottom: 40,
    },
    getotptxt: {
        fontSize: 17,
        fontWeight: '500'
    },
    resendtxt: {
        fontSize: 17,
        fontWeight: '500',
        color: '#fff'
    },
    verifytxt: {
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
        borderRadius: 15,
        width: '50%',
        height: 50,
        shadowColor: '#000',
        shadowOffset: { weight: 0, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        elevation: 8,
    },


})