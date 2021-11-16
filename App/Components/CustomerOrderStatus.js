import React, { useState, useCallback, useEffect } from 'react';
import { View, TextInput, Text, Dimensions, TouchableOpacity, StatusBar, ImageBackground, StyleSheet, ScrollView, Image, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import StepIndicator from 'react-native-step-indicator';
const { width, height } = Dimensions.get('window');
const labels = ["Cart", "Delivery Address", "Order Summary",];
const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: '#F12A10',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: '#fe7013',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#fe7013',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#fe7013',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: '#fe7013',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 13,
    currentStepLabelColor: '#fe7013'
}

export default function CustomerOrderStatus() {
    const navigation = useNavigation();
    const [search, setSearch] = useState(false)
    const HideSearchBtn = () => {
        setSearch(!search)
    }
    const [currentPosition, setCurrentPosition] = useState(0);

    const data = [
        {
            label: 'Order  Accepted',
            status: 'We have accept your order',
            date: '12/1/1111',
            time: '12pm'
        },
        {
            label: 'Order  Out of  Delivery',
            status: ' Out of  Delivery',
            date: '12/1/1111',
            time: '12pm'
        },
        {
            label: 'Order  Delivered',
            status: 'order delivered successfully',
            date: '12/1/1111',
            time: '12pm'
        },
        // {
        //     label: 'abcd',
        //     status: 'bbbbbb',
        //     date: '12/1/1111',
        //     time: '12pm'
        // },
        // {
        //     label: 'abcd',
        //     status: 'bbbbbb',
        //     date: '12/1/1111',
        //     time: '12pm'
        // },
    ];
    console.disableYellowBox = true;
    return (
        <View style={styles.container}>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.body}>
                    <View style={{ flexDirection: 'row', marginBottom: 15 }}>
                        <Text style={styles.ordertxt}>Order ID : </Text>
                        <Text style={{  color: '#F12A10',fontWeight:'700',fontSize:16 }}>2345423432</Text>
                    </View>
                    <Image style={styles.img1} source={require('../Images/Apple.png')} />
                    <Text style={{ marginBottom: 15, fontSize: 20, fontWeight: '700' }}>Apple</Text>
                    <View style={styles.indicatorContainer}>
                        <StepIndicator
                            customStyles={customStyles}
                            currentPosition={currentPosition}
                            labels={labels}
                            direction='vertical'
                            renderLabel={({ position, stepStatus, label, crntPosition }) => {
                                return (
                                    <View style={styles.lblcontainer}>
                                        <Text style={styles.lbltext}>{data[position].label}</Text>

                                        <Text style={styles.status}>{data[position].status}</Text>

                                        <Text style={styles.status}>{data[position].date}</Text>

                                        <Text style={styles.status}>{data[position].time}</Text>

                                    </View>
                                )
                            }}
                        />
                    </View>
                    <TouchableOpacity style={styles.Btn} onPress={() => navigation.navigate('LIveTracking')}>
                        <Text style={{
                            color: "white",
                            fontSize: 20
                        }}>Track Order</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        paddingBottom: 60,

    },
    header: {
        height: 70,
        width: '100%',
        backgroundColor: '#41C9F2',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    Headericon: {
        width: '10%'
    },
    Headertext: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
        width: '84%'
    },
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        paddingVertical:10
    },
    ordertxt:{
        fontSize:16,
        fontWeight:'700'
    },
    img1: {
        height: 110,
        width: 120,
        marginBottom: 14,
        borderRadius: 100
    },
    Btn: {
        backgroundColor: '#F12A10',
        height: 50,
        width: 190,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { weight: 1, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 5,

        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },

    indicatorContainer: {
        height: height - 200,
        width: width - 30,
        padding: 20,
        margin: 15,
        // paddingTop: 0,
        // top:120,
        elevation: 10,
        borderRadius: 20,
        backgroundColor: '#fff'
    },
    lblcontainer: {
        height: 120,
        marginTop: 30,
        padding: 10,
        paddingLeft: 5,
        width: '100%',
    },
    lbltext: {
        fontSize: 17,
        width: '100%',
        color: '#F12A10',
        fontWeight: '700',

    },
    status: {
        fontSize: 15,
        color: 'gray'
    },
    footer: {
        width: '100%',
        height: 70,
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: 0,
        shadowColor: '#000',
        shadowOffset: { weight: 1, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 5,
        // paddingVertical: 10,
        paddingHorizontal: 10,
        left: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16
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
})