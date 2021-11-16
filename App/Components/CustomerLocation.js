import React from 'react';
import { StyleSheet, Text, View, StatusBar, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native';
export default function CustomerLocation() {
    return (
        <View style={styles.conatiner}>
            <StatusBar />

            <View style={styles.body}>
                <ScrollView showsVerticalScrollIndicator={false}>

                    <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginBottom: 30 }}>
                        <View style={styles.imgcontainer}>
                            <Image style={styles.tigerimg} source={require('../Images/Locationimg.png')} />
                        </View>
                        <Text style={styles.locationtxt}>Allow your location</Text>
                        <Text style={styles.expriencetxt}> We will need your location to give you better exprience</Text>
                    </View>
                    <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity style={styles.btncontainer}>
                            <Text style={styles.btntxt}>Sure,I’d  like that</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btncontainer}>
                            <Text style={styles.btntxt}>Not now</Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>
            </View>
            <View style={styles.footer}>

                <TouchableOpacity style={styles.alignFooter} onPress={() => navigation.navigate('CustomerHome')}>
                    <View style={styles.footeractive}>
                        <Image resizeMode="contain" style={styles.footerImg} source={require('../Images/Homeactive.png')} />
                    </View>
                    <Text style={styles.footertxt}>Home</Text>

                </TouchableOpacity>
                <TouchableOpacity style={styles.alignFooter} onPress={() => navigation.navigate('CustomerCart')}>

                    <Image resizeMode="contain" style={styles.footerImg} source={require('../Images/Cart.png')} />

                    <Text style={styles.footertxt}>Cart</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.alignFooter} onPress={() => navigation.navigate('CustomerShop')}>
                    <Image resizeMode='contain' style={styles.footerImg} source={require('../Images/Shop.png')} />

                    <Text style={styles.footertxt}>Shop</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.alignFooter} onPress={() => navigation.navigate('CustomerMyOrder')}>
                    <Image resizeMode='contain' style={styles.footerImg} source={require('../Images/Shop.png')} />

                    <Text style={styles.footertxt}> My Order</Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.alignFooter} onPress={() => navigation.navigate('CustomerProfile')}>

                    <Image resizeMode="contain" style={styles.footerImg} source={require('../Images/Profile.png')} />

                    <Text style={styles.footertxt}>Profile</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    conatiner: {
        width: '100%',
        height: '100%',
        backgroundColor: '#F12A10',
        justifyContent: 'center',
        alignItems: 'center'
    },

    body: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    tigerimg: {
        height: 170,
        width: 195,
        marginBottom: 60
    },
    imgcontainer: {
        backgroundColor: '#F12A10',
        // height: 180,
        width: '100%',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },

    locationtxt: {
        fontSize: 20,
        color: '#fff',
        marginBottom: 60,
        width: '90%',
        textAlign: 'center'
    },
    expriencetxt: {
        fontSize: 15,
        color: '#fff',
        width: '90%',
        textAlign: 'center',
        fontWeight: '600',
        marginBottom: 60
    },
    btncontainer: {
        backgroundColor: '#F9A89D',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        width: '60%',
        height: 50,
        marginBottom: 30
    },
    btntxt: {
        fontSize: 15,
        color: '#fff',
        fontWeight: '600'
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
    footeractive: {
        width: 40,
        height: 40,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100
    },
})
