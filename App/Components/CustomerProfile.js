import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
export default function CustomerProfile() {
    const navigation = useNavigation();
    const [userInfo, setUserInfo] = useState({
        image: '',
    })
    const [image, setImage] = useState(null);
    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            base64: true,
            aspect: [4, 3],
            quality: 1,
        });
        console.log(result);
        if (!result.cancelled) {
            setImage(result.uri);
            var pieces = result.uri.split(".");
            var l = pieces.length;
            var extention = pieces[l - 1]
            let imageUrl = result ? `data:image/${extention};base64,${result.base64}` : null;
            setUserInfo({ ...userInfo, ['image']: imageUrl })
        }
    };
    return (
        <View style={styles.conatiner}>
            <StatusBar />
            <View style={styles.header}>
                <TouchableOpacity style={styles.Headericon} onPress={() => navigation.goBack()}>
                    <AntDesign name="left" size={22} color={"#F12A10"} />
                </TouchableOpacity>
                <Text style={styles.Headertext}>PROFILE</Text>
            </View>
            <View style={styles.body}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ alignItems: 'flex-end', width: '60%', flexDirection: 'row', justifyContent: 'flex-end', paddingVertical: 20 }}>
                        <View style={{ position: 'relative' }}>
                            {image ? <Image source={{ uri: image }} style={styles.img} /> : <Image style={styles.img} source={require('../Images/profileuser.png')} />}
                            <TouchableOpacity style={styles.icon} onPress={pickImage} >
                                <SimpleLineIcons name="camera" size={22} color={'#011E46'} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text style={styles.nametxt}>Name</Text>
                    <View style={styles.intext}>
                        <TextInput
                            style={styles.Textinput}
                            placeholder="codeneon solution"
                            placeholderTextColor="#C4C4C4" />
                    </View>

                    <Text style={styles.nametxt}>Number</Text>
                    <View style={styles.intext}>
                        <TextInput
                            style={styles.Textinput}
                            placeholder="1234567890"
                            maxLength={10}
                            keyboardType="numeric"
                            placeholderTextColor="#C4C4C4" />
                    </View>
                    <Text style={styles.nametxt}>Address</Text>
                    <View style={styles.intext}>
                        <View style={{ flexDirection: 'row', width: '97%', alignItems: 'center', paddingHorizontal: 10 }}>
                            <TextInput
                                style={styles.textinput}
                                placeholder="Address"
                                multiline={true}
                                placeholderTextColor="#C4C4C4" />
                            <TouchableOpacity style={styles.changecontainer} onPress={() => navigation.navigate('CustomerAddNewAddress')} >
                                <Text style={styles.changetxt}>CHANGE</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <Text style={styles.nametxt}>Email</Text>
                    <View style={styles.intext}>
                        <TextInput
                            style={styles.Textinput}
                            placeholder="codeneonsolution@gmail.com"
                            placeholderTextColor="#C4C4C4"
                        />
                    </View>
                    <View style={{ width: '100%', alignItems: 'center' }}>
                        <TouchableOpacity style={styles.btncontainer} >
                            <Text style={styles.btntxt}>SAVE</Text>
                        </TouchableOpacity>
                    </View>
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
                <View style={styles.footeractive}>
                    <Ionicons name="ios-person-circle-outline" size={30} color={"#fff"} />
                    </View>
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
        // backgroundColor: '#b3cef2',
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 8,
        backgroundColor: '#fff',
        paddingHorizontal: 10
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
    body: {
        flex: 1,
        paddingHorizontal: 20,
        marginBottom:60
    },
    img: {
        height: 80,
        width: 80,
        borderRadius: 100,
        position: 'relative',
    },
    icon: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: '#C4C4C4',
        borderRadius: 100,
        height: 32,
        width: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    nametxt: {
        fontSize: 18,
        color: '#000',
        marginBottom: 10,
        fontWeight: '400',
        width: '50%',
        paddingHorizontal: 15
    },
    Textinput: {
        marginBottom: 5,
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 10,
        fontSize: 17,
        // color: '#F12A10'
    },
    textinput: {
        marginBottom: 5,
        width: '75%',
        paddingHorizontal:10,
        paddingVertical: 10,
        fontSize: 17,
        // color: '#F12A10'
    },
    changetxt: {
        fontWeight: '400',
        fontSize: 12,
        height: 20,
        width: 70,
        textAlign: 'center',
        color: '#F12A10'
    },
    changecontainer: {
        width: '25%',
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#F12A10',
        justifyContent: 'center',
        alignItems: 'center'
    },
    intext: {
        width: '100%',
        marginBottom: 10,
        borderWidth: 1.5,
        borderColor: 'grey',
        borderRadius: 15,
        marginBottom: 30
    },
    btntxt: {
        fontSize: 18,
        fontWeight: '700',
        textAlign: 'center',
        width: '100%',
        color: 'white',
    },
    btncontainer: {
        backgroundColor: '#F24029',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        width: '60%',
        height: 50,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { weight: 0, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 11,
        paddingVertical: 10,
        paddingHorizontal: 10,
        elevation: 8,
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