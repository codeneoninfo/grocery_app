import * as React from "react";
import { View, Text, TextInput, TouchableOpacity, StatusBar, StyleSheet, ScrollView } from 'react-native';
import MapView from "react-native-maps";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location'
const { useState, useEffect } = React
export default function LiveTracking() {
    const navigation = useNavigation();

    const [sliderValue, setSliderValue] = useState(15);

    const [mapRegion, setRegion] = useState(null)
    const [userLocation, setCurrentLoaction] = useState({
        latitude: 39.97343096953564,
        latitudeDelta: 1,
        longitude: -75.12520805829233,
        longitudeDelta: 1,
    })
    const [hasLocationPermissions, setLocationPermission] = useState(false)
    const [locationResult, setLocation] = useState(null)
    const getLocationAsync = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
        } else {
            setLocationPermission(true);
        }

        let { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync({});
        setLocation(JSON.stringify({ latitude, longitude }))

        // Center the map on the location we just fetched.
        setRegion({ latitude, longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421 });
        setCurrentLoaction({ ...userLocation, ['latitude']: latitude, ['longitude']: longitude })
    }
    useEffect(() => {
        getLocationAsync()
    }, [])
    if (locationResult === null) {
        return <Text>Finding your current location...</Text>
    }

    if (hasLocationPermissions === false) {
        return <Text>Location permissions are not granted.</Text>
    }

    if (mapRegion === null) {
        return <Text>Map region doesn't exist.</Text>
    }

    return (
        <View style={styles.Conatiner}>
            <StatusBar />
            <View style={styles.header}>
            <TouchableOpacity style={styles.Headericon} onPress={() => navigation.goBack()}>
                    <AntDesign name="left" size={22} color={"#F12A10"} />
                </TouchableOpacity>
                <Text style={styles.Headertext}>Live Tracking</Text>
            </View>
            <View style={{ width: '100%', height: '55%', borderBottomRightRadius: 20 }}>
                <MapView
                    showsUserLocation={true}
                    style={styles.Conatiner}
                    region={mapRegion}
                    zoomEnabled={true}
                    zoomControlEnabled={true}
                    initialRegion={userLocation}
                    followsUserLocation
                    userLocationUpdateInterval

                >
                    {/* {books.map((items , index)=>(
                <MapView.Marker
                key={index}
                title={`User Location ${index + 1}`}
                coordinate={{ latitude: parseFloat(items.latitude), longitude: parseFloat(items.longitude) }} */}
                    {/* /> */}
                    {/* ))} */}


                </MapView>

            </View>
            <View style={styles.box2}>
                <View style={styles.Box}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width:'100%' }}>
                        <Octicons name="primitive-dot" size={25} color="#1ca8d6" />
                        <Text style={styles.Text}>PICK UP</Text>
                    </View>
                  
                    {/* <Octicons name="primitive-dot" size={15} color="#f12a10" /> */}
                   
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}>
                        <FontAwesome name="circle-o" size={20} color="#ee958c" />
                        <Text style={styles.Text2}>MUMBAI 25 HOUSE,GHJH</Text>
                    </View>
                </View>
                <View style={styles.Box2}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}>
                        <Octicons name="primitive-dot" size={20} color="#9D918F" />
                        <Text style={styles.Text}>DROPOFF</Text>
                    </View>
                  
                    {/* <Octicons name="primitive-dot" size={15} color="#f12a10" /> */}
                   
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}>
                    <Octicons name="primitive-dot" size={20} color="#FFAE10" />
                        <Text style={styles.Text2}>BESILA 25 HOUSE,GHJH</Text>
                    </View>
                </View>
            </View>
            {/* <View style={{width:'100%'}}>
         <Octicons name="primitive-dot" size={20} color="#f12a10" />
         <Entypo name="dot-single" size={20} color="#f12a10" />
         <FontAwesome name="circle-o" size={20} color="#f12a10" />
         </View> */}
        </View>
    )
}
const styles = StyleSheet.create({
    Conatiner: {
        height: '100%',
        width: '100%',
        position: 'relative',
        // backgroundColor: '#fff'
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
    Box: {
        width: '90%',
        backgroundColor: '#e9f8fd',
        paddingHorizontal: 20,
        marginBottom: 10,
        borderRadius: 10,
        paddingVertical: 15,
        // justifyContent:'center',
        alignItems:'center'
    },
    Box2:{
        width: '90%',
        backgroundColor: '#feeae7',
        paddingHorizontal: 20,
        marginBottom: 10,
        borderRadius: 10,
        paddingVertical: 15,
        // justifyContent:'center',
        alignItems:'center'
    },
    box2: {
        alignItems: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: '#fff',
        height: '40%',
        paddingVertical: 20,
        width: '100%'

    },
    Text: {
        fontSize: 14,
        color: '#727a7c',
        paddingHorizontal: 10,
        marginBottom:10,
        alignItems:'center'
    },
    Text2:{
        fontSize: 14,
        color: '#000',
        paddingHorizontal: 10,
        marginBottom:10,
        fontWeight:'bold'
    }
})