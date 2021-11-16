import React from 'react';
import { StyleSheet, Text, View, StatusBar, ScrollView, Dimensions, FlatList, TextInput, Image, TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
export default function CustomerOrderDetails() {
    const navigation = useNavigation();
    return (
        <View style={styles.conatiner}>
            <StatusBar />
            <View style={styles.header}>
                <TouchableOpacity style={styles.Headericon} onPress={() => navigation.goBack()}>
                    <AntDesign name="left" size={22} color={"#F12A10"} />
                </TouchableOpacity>
                <TouchableOpacity style={{ width: '20%' }}>
                    <Text style={styles.Headertext}>Support</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.body}>
                <ScrollView showsVerticalScrollIndicator ={false}>
                    <View style={styles.name}>
                        <Text style={styles.ordertxt}>Order Summary</Text>
                        <Text style={styles.shopname}>Fresh G</Text>
                        <Text style={styles.address}>sr. no.19 gondhale nagar hadapsar pune-28</Text>
                        <TouchableOpacity style={styles.download}>
                            <Text style={styles.downtxt}>Download Summary</Text>
                            <AntDesign name="download" size={19} color={"#F12A10"} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.name}>
                        <Text style={styles.orderstatus}>This order with Fresh G was delivered</Text>
                        <Text style={styles.ordertxt}>Your Order</Text>
                    </View>

                    <View style={styles.name}>
                        <Text style={styles.youritem}>Orange</Text>
                        <View style={{ width: '100%', flexDirection: 'row' }}>
                            <View style={{ width: '70%', flexDirection: 'row' }}>
                                <Text style={styles.no}>1</Text>
                                <Entypo name="cross" size={22} color={"#000"} />
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.prise}>₹</Text>
                                    <Text style={styles.prise}>130</Text>
                                </View>
                            </View>
                            <View style={{ width: '30%', flexDirection: 'row' }}>
                                <View style={{ flexDirection: 'row', }}>
                                    <Text style={styles.rupee}>₹</Text>
                                    <Text style={styles.rupee}>130</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.rupees}>  ₹</Text>
                                    <Text style={styles.rupees}>130.00</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.name}>
                        <View style={{ width: '100%', flexDirection: 'row', paddingVertical: 5 }}>
                            <Text style={styles.totaltxt}>Item Total</Text>
                            <View style={{ width: '30%', flexDirection: 'row' }}>
                                <View style={{ flexDirection: 'row', }}>
                                    <Text style={styles.rupee}>₹</Text>
                                    <Text style={styles.rupee}>130</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.rupees}>  ₹</Text>
                                    <Text style={styles.rupees}>130.00</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ width: '100%', flexDirection: 'row' }}>
                            <Text style={styles.tax}>Taxes</Text>
                            <View style={{ flexDirection: 'row', width: '20%' }}>
                                <Text style={styles.taxs}>  ₹</Text>
                                <Text style={styles.taxs}>130.00</Text>
                            </View>
                        </View>
                        <View style={{ width: '100%', flexDirection: 'row' }}>
                            <Text style={styles.tax}>Delivery charge</Text>
                            <View style={{ flexDirection: 'row', width: '20%' }}>
                                <Text style={styles.taxs}>  ₹</Text>
                                <Text style={styles.taxs}>30.00</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ width: '100%', flexDirection: 'row', borderBottomWidth: 1, borderColor: '#c4c4c4', paddingVertical: 10, marginBottom: 10 }}>
                        <Text style={styles.total}>Grand Toatal</Text>
                        <View style={{ flexDirection: 'row', width: '20%' }}>
                            <Text style={styles.totals}>  ₹</Text>
                            <Text style={styles.totals}>130.00</Text>
                        </View>
                    </View>
                    <View style={styles.totalbtn}>
                        <Text style={styles.save}>Your Toatal Saving</Text>
                        <View style={{ flexDirection: 'row', width: '20%' }}>
                            <Text style={styles.rs}>  ₹</Text>
                            <Text style={styles.rs}>130.00</Text>
                        </View>
                    </View>



                    <Text style={styles.order}>Order Details</Text>
                    <View style={styles.details}>
                        <Text style={styles.upi}>Order number</Text>
                        <Text style={styles.add}>123456789</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.upi}>Payment</Text>
                        <Text style={styles.add}>Paid : using UPI</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.upi}>Date</Text>
                        <Text style={styles.add}>October 09,2021 at 01:11 AM</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.upi}>Delivery</Text>
                        <Text style={styles.add}>Gondhle nagar hadapsar pune - 411028</Text>
                    </View>
                    <TouchableOpacity>
                    <Text style={styles.call}> Call fresh G (+91 1234567890)</Text>
                    </TouchableOpacity>
                    {/* <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btntxt}>Repeat Order</Text>
                        <Text style={styles.btntxt}>VIEW CART ON NEXT STEP</Text>
                    </TouchableOpacity> */}
                </ScrollView>
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
    conatiner: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
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
        width: '80%'
    },
    Headertext: {
        color: '#F12A10',
        fontSize: 15,
        width: '100%',
        fontWeight: '600',
        // textAlign: 'center'
    },
    body: {
        flex: 1,
        paddingHorizontal: 10,
        marginBottom:65
    },
    ordertxt: {
        fontSize: 20,
        fontWeight: '600',
        width: '90%',
        marginBottom: 20
    },
    shopname: {
        fontSize: 18,
        fontWeight: '600',
        width: '90%',
        // marginBottom:20
    },
    address: {
        fontSize: 14,
        fontWeight: '600',
        width: '80%',
        marginBottom: 10
    },
    download: {
        width: '100%',
        flexDirection: 'row',
        marginBottom: 10
    },
    downtxt: {
        fontSize: 13,
        fontWeight: '700',
        color: '#F12A10'
    },
    name: {
        width: '100%',
        borderBottomWidth: 1,
        borderColor: '#c4c4c4',
        marginBottom: 5
    },
    orderstatus: {
        fontSize: 15,
        fontWeight: '600',
        width: '90%',
        marginBottom: 20,
        paddingVertical: 5
    },
    ordertxt: {
        fontSize: 20,
        fontWeight: '600',
        width: '90%',
        marginBottom: 10
    },
    youritem: {
        fontSize: 18,
        fontWeight: '700',
        width: '90%',
        marginBottom: 10
    },
    no: {
        fontSize: 15,
        borderWidth: 1,
        height: 20,
        width: 20,
        justifyContent: 'center',
        textAlign: 'center',
        borderColor: '#66a582',
        borderRadius: 5,
        backgroundColor: '#Eaf6ed',
        alignItems: 'center',
        marginBottom: 10
    },
    prise: {
        fontSize: 15,
        fontWeight: '600',
        color: '#000',
        marginBottom: 10
    },
    rupee: {
        fontSize: 15,
        fontWeight: '600',
        color: '#000',
        marginBottom: 10
    },
    rupees: {
        fontSize: 15,
        fontWeight: '600',
        color: '#000',
        marginBottom: 10
    },
    totaltxt: {
        fontSize: 17,
        fontWeight: '700',
        color: '#000',
        marginBottom: 10,
        width: '70%'
    },
    tax: {
        fontSize: 15,
        fontWeight: '600',
        color: 'grey',
        marginBottom: 10,
        width: '80%'
    },
    taxs: {
        fontSize: 15,
        fontWeight: '600',
        color: 'grey',
        marginBottom: 10,
    },
    total: {
        fontSize: 17,
        fontWeight: '600',
        color: 'grey',
        marginBottom: 10,
        width: '80%'
    },
    totals: {
        fontSize: 17,
        fontWeight: '600',
        color: 'grey',
        marginBottom: 10,
    },
    totalbtn: {
        width: '100%',
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: 'row',
        paddingVertical: 5,
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f6f9fe',
        borderColor: '#bcdef3'
    },
    save: {
        fontSize: 17,
        fontWeight: '600',
        color: '#4880bd',
        marginBottom: 10,
        width: '78%'
    },
    rs: {
        fontSize: 17,
        fontWeight: '600',
        color: '#4880bd',
        marginBottom: 10,
    },
    order: {
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 10,
        borderBottomWidth: 1,
        paddingVertical: 20,
        borderColor: '#c4c4c4'
    },
    details: {
        width: '100%',
        marginBottom: 20
    },
    upi: {
        width: '90%',
        fontSize: 15,
        color: 'grey',
        fontWeight: 'bold'
    },
    add: {
        width: '90%',
        fontSize: 16,
        color: '#000',
        fontWeight: '600'
    },
    call:{
        fontSize:'700',
        fontSize:17,
        textAlign:'center',
        width:'100%',
        color:'#f04f5f',
        marginBottom:10
    },
    btn:{
        width:'100%',
        backgroundColor:'#f04f5f',
        height:50,
        marginBottom:60,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
    },
    btntxt:{
        fontSize:15,
        color:'#fff',
        fontWeight:'600'
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