import React from 'react';
import { StyleSheet, Text, View, StatusBar, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
export default function CustomerRegister() {
    const navigation = useNavigation();
    return (
        <View style={styles.conatiner}>
            <StatusBar />
            <View style={styles.header}>
                <TouchableOpacity style={styles.Headericon}  onPress={() => navigation.goBack()} >
                    <FontAwesome5 name="chevron-left" size={20} color={"#F12A10"} />
                </TouchableOpacity>
                <Text style={styles.registertxt}>Register</Text>
            </View>
            <View style={styles.body}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ width: '100%', marginBottom: 10, }}>
                        <Text style={styles.nametxt}>Name</Text>
                        <TextInput
                            style={styles.Textinput}
                            placeholder="name"
                            placeholderTextColor="#C4C4C4" />
                    </View>
                    <View style={{ width: '100%', marginBottom: 10, }}>
                        <Text style={styles.nametxt}>Email</Text>
                        <TextInput
                            style={styles.Textinput}
                            placeholder="abcd@gmail.com"
                             autoCapitalize="none"
                            placeholderTextColor="#C4C4C4" />
                    </View>
                    <View style={{ width: '100%', marginBottom: 10, }}>
                        <Text style={styles.nametxt}>Address</Text>
                        <TextInput 
                            style={styles.Textinput}
                            placeholder="Address"
                            multiline={true}
                            placeholderTextColor="#C4C4C4" />
                    </View>
                    <View style={{ width: '100%', marginBottom: 30, }}>
                        <Text style={styles.nametxt}>Mobile Number</Text>
                        <TextInput
                            style={styles.Textinput}
                            placeholder="1234567890"
                            maxLength={10}
                            keyboardType="numeric"
                            placeholderTextColor="#C4C4C4" />
                    </View>
                    <View style={{ width: '100%', alignItems: 'center' }}>
                        <TouchableOpacity style={styles.btncontainer} >
                            <Text style={styles.btntxt}>Register</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'center', marginBottom: 30 }}>
                        <Text style={styles.Alredaytxt}>Alreday have an account ?  </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('CustomerLoginPage')} >
                            <Text style={styles.Logintxt}>Login</Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>
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
        // backgroundColor: '#b3cef2',
        flexDirection: 'row',
        alignItems: 'center',
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 3 },
        // shadowOpacity: 0.8,
        // shadowRadius: 2,
        // elevation: 8,
        // backgroundColor: '#fff',
        paddingHorizontal: 10
    },
    Headericon: {
        width: '10%',
    },
    body: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    registertxt: {
        width: '84%',
        textAlign: 'center',
        fontSize: 23,
        color: '#F12A10',
        fontWeight: '700'
    },
    nametxt: {
        fontSize: 18,
        color: '#F12A10',
        marginBottom: 10,
        fontWeight: '400',
        width:'50%'
    },
    Textinput: {
        // backgroundColor: '#FCD4CF',
        borderRadius: 15,
        marginBottom: 5,
        width: '100%',
        // height: 60,
        paddingHorizontal: 20,
        paddingVertical: 10,
        fontSize: 17,
        borderWidth: 1.5,
        borderColor: '#F12A10',
        color: '#F12A10'
    },
    Logintxt: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#F12A10'
    },
    Alredaytxt: {
        fontSize: 17,
        fontWeight: 'bold',
    },
    btntxt: {
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
        width: '100%',
        color: 'white',
    },
    btncontainer: {
        backgroundColor: '#F24029',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        width: '100%',
        height: 50,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { weight: 0, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 11,
        paddingVertical: 10,
        paddingHorizontal: 10,
        elevation: 5,
    },
})