import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, StatusBar, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
export default function CustomerOtpScreen() {
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
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <View style={styles.imgcontainer}>
                        <Image style={styles.Mobileimg} source={require('../Images/Mobile.png')} />
                    </View>
                </View>
                <View style={styles.body}>
                    <Text style={styles.Title}>Please enter OTP to send your Mobile number </Text>
                    <View style={styles.textCenterView} >

                        <TextInput

                            autoFocus={true}
                            style={styles.textinput}
                            keyboardType="phone-pad"
                            placeholder="0"
                            returnKeyType="next"
                            maxLength={1}
                            placeholderTextColor="#000"
                            ref={ref_input1}
                            onChangeText={(val) => setotp(val, 0)}
                        />
                        <TextInput
                            style={styles.textinput}
                            keyboardType="phone-pad"
                            placeholder="0"
                            maxLength={1}
                            placeholderTextColor="#000"
                            ref={ref_input2}
                            returnKeyType="next"
                            onChangeText={(val) => setotp(val, 1)}
                        />
                        <TextInput
                            style={styles.textinput}
                            keyboardType="phone-pad"
                            placeholder="0"
                            maxLength={1}
                            placeholderTextColor="#000"
                            onChangeText={(val) => setotp(val, 2)}
                            ref={ref_input3}
                        />
                        <TextInput
                            style={styles.textinput}
                            keyboardType="phone-pad"
                            placeholder="0"
                            maxLength={1}
                            placeholderTextColor="#000"
                            ref={ref_input4}
                            onChangeText={(val) => setotp(val, 3)}
                        />
                    </View>
                    <View style={{ width: '100%', justifyContent: 'center', marginBottom: 30, alignItems: 'center' }}>
                        <Text style={styles.resendtxt}>0.24</Text>
                    </View>
                    <View style={{ width: '100%', alignItems: 'center',marginBottom:30 }}>
                        <TouchableOpacity style={styles.btncontainer} onPress={() => navigation.navigate('CustomerHome')}>
                            <Text style={styles.verifytxt}> VERIFY </Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={{ flexDirection: 'row', width: '100%', justifyContent: 'center', marginBottom: 30 }}>

                        <Text style={styles.resendtxt}>Resend OTP</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    conatiner: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
    },
    header: {
        width: '100%',
        height: 300,
        backgroundColor: '#F12A10',
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
        backgroundColor: '#89c54b',
        height: 130,
        width: 130,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    body: {
        width: '100%',
        flex: 1,
        paddingVertical: 20,
        paddingHorizontal: 30,
        justifyContent: 'center',
        // backgroundColor: '#F12A10',
    },
    textinput: {
        textAlign: 'center',
        padding: 5,
        borderColor: '#fff',
        width: 50,
        color: '#000',
        borderBottomWidth: 1.5,
        borderColor: '#000'
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
        color: '#000',
        marginBottom: 40,
    },
    getotptxt: {
        fontSize: 17,
        fontWeight: '500'
    },
    resendtxt: {
        fontSize: 17,
        fontWeight: '500',
        color: '#000'
    },
    verifytxt: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        width: '100%',
        color: '#fff',
    },
    btncontainer: {
        backgroundColor: '#F12A10',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        width: '50%',
        height: 50,
       
    },


})
