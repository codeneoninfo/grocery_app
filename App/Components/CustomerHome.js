import React, { useState, useCallback, useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar, ScrollView, Dimensions, FlatList, TextInput, Image, TouchableOpacity } from 'react-native';
import Carousel, { Pagination } from "react-native-snap-carousel";
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CustomerShopFlatList from './CustomerShopFlatList';
import CustomerNewItemlist from './CustomerNewItemlist';
import ChooseACategoryFlatList from './ChooseACategoryFlatList';
import { useNavigation } from '@react-navigation/native';
export const SLIDER_WIDTH = Dimensions.get('window').width - 18
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH)
export default function CustomerHome() {
    const navigation = useNavigation();
    const exampleItems = [
        {
            title: "Item 1",
            img: require('../Images/Vegetable.png'),
        },
        {
            title: "Item 2",
            img: require('../Images/Fruits.png'),
        },
        {
            title: "Item 3",
            img: require('../Images/imagesadd.png'),
        },
        {
            title: "Item 4",
            img: require('../Images/farrmersmarketadd.png'),
        },

    ];

    const [index, setIndex] = React.useState(0)
    const isCarousel = React.useRef(null)
    const renderItem = useCallback(({ item, index }) => (
        <TouchableOpacity
            key={index}
            style={{
                backgroundColor: 'floralwhite',
                borderRadius: 15,
                width: ITEM_WIDTH,
                height: 180,

                position: 'relative'
            }}>
            <Image resizeMode="cover" style={{
                width: ITEM_WIDTH,
                height: '100%',
                borderRadius: 15
            }} source={item.img} />
        </TouchableOpacity>
    ), []);
    const List = ({ ChooseACategoryFlatList, index }) => {
        return (
            <View style={styles.imgcontainer}>
            <TouchableOpacity  onPress={() => navigation.navigate('CustomerShop')}>
               
                    <Image style={styles.img} source={ChooseACategoryFlatList.image} />
                
                {/* <Text style={styles.name}>{ChooseACategoryFlatList.name}</Text> */}
            </TouchableOpacity>
            </View>
        )
    }
    const Item = ({ CustomerNewItemlist, index }) => {
        return (
            <View style={styles.newitembox}>
                <TouchableOpacity style={styles.box}>
                    <Image style={styles.image} source={CustomerNewItemlist.image} />
                    <Text style={styles.itemname}>{CustomerNewItemlist.name}</Text>
                    <View style={{ width: '90%', flexDirection: 'row', }}>
                        <Text style={styles.prise}>₹ </Text>
                        <Text style={styles.prise}>{CustomerNewItemlist.prise}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
    const ListItem = ({ CustomerShopFlatList, index }) => {
        return (
            <View style={styles.shopnearbox}>
                <TouchableOpacity style={styles.shopbox} onPress={() => navigation.navigate('CustomerShopitem')}>
                    <Image style={styles.shopimage} source={CustomerShopFlatList.image} />
                    <View style={{ width: '100%', flexDirection: 'row', }}>
                        <Text style={styles.shoptxt}>{CustomerShopFlatList.shopname}</Text>
                        <View style={styles.ratingcontainer}>
                            <Text style={styles.ratingtxt}>{CustomerShopFlatList.rating}</Text>
                            <Entypo name="star" size={13} color={"#fff"} />
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View style={styles.conatiner}>
            <StatusBar />
            <View style={styles.header}>
                <TouchableOpacity style={styles.Headericon}>
                    <EvilIcons name="location" size={30} color={"#F12A10"} />
                </TouchableOpacity>
                <View style={{ width: '80%' }}>
                    <Text style={styles.Headertxt}>Anand Nagar</Text>
                    <Text style={styles.Headertext}>housing Society,house....</Text>
                </View>
                <TouchableOpacity style={{ width: '10%' }}>
                    <FontAwesome name="bell" size={30} color={"#000"} />
                </TouchableOpacity>
            </View>
            <View style={styles.body}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                        <Carousel
                            layout="default"
                            loop
                            enableSnap
                            ref={isCarousel}
                            data={exampleItems}
                            sliderWidth={SLIDER_WIDTH}
                            autoplay={true}
                            autoplayInterval={3500}
                            itemWidth={ITEM_WIDTH}
                            renderItem={renderItem}
                            onSnapToItem={(index) => setIndex(index)}
                            useScrollView={true}
                        />
                        <Pagination
                            dotsLength={exampleItems.length}
                            activeDotIndex={index}
                            carouselRef={isCarousel}
                            dotStyle={{
                                width: 10,
                                height: 10,
                                borderRadius: 5,
                                marginHorizontal: 0,
                                backgroundColor: 'rgba(0, 0, 0, 0.92)'
                            }}
                            inactiveDotOpacity={0.4}
                            inactiveDotScale={0.6}
                            tappableDots={true}
                        />
                    </View>
                    <View style={styles.txtcontainer}>
                        <Text style={styles.categoriestxt}>Categories</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('ChooseACategory')}>
                            <Text style={styles.viewalltxt}>View All</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '100%', }}>
                        <FlatList horizontal={true} showsHorizontalScrollIndicator={false}
                            data={ChooseACategoryFlatList}
                            numColumns={1}
                            renderItem={({ item }) => <List ChooseACategoryFlatList={item} />}
                            keyExtractor={(item) => item.id}
                        />
                    </View>
                    {/* <View style={styles.imgcontainer}>
                        <TouchableOpacity style={{ width: '25%', marginLeft: 10 }}>
                            <Image style={styles.img} source={require('../Images/Fruits.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: '25%' }}>
                            <Image style={styles.img} source={require('../Images/Vegetable.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: '25%' }}>
                            <Image style={styles.img} source={require('../Images/Beverages.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: '25%' }}>
                            <Image style={styles.img} source={require('../Images/Meat.png')} />
                        </TouchableOpacity>
                    </View> */}

                    <View style={styles.txtcontainer}>
                        <Text style={styles.categoriestxt}>New Item</Text>
                        <TouchableOpacity>
                            <Text style={styles.viewalltxt}>View All</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ width: '100%', }}>
                        <FlatList horizontal={true} showsHorizontalScrollIndicator={false}
                            data={CustomerNewItemlist}
                            numColumns={1}
                            renderItem={({ item }) => <Item CustomerNewItemlist={item} />}
                            keyExtractor={(item) => item.id}
                        />
                    </View>
                    <View style={styles.txtcontainer}>
                        <Text style={styles.categoriestxt}>Shops Near You</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('CustomerShop')}>
                            <Text style={styles.viewalltxt}>View All</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '100%', }}>
                        <FlatList horizontal={true} showsHorizontalScrollIndicator={false}
                            data={CustomerShopFlatList}
                            numColumns={1}
                            renderItem={({ item }) => <ListItem CustomerShopFlatList={item} />}
                            keyExtractor={(item) => item.id}
                        />
                    </View>
                </ScrollView>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.alignFooter} onPress={() => navigation.navigate('CustomerHome')}>
                    <View style={styles.footeractive}>
                        <Entypo name="home" size={30} color={"#fff"} />
                    </View>
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
    );
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
        elevation: 8,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        marginBottom: 10
    },
    Headericon: {
        width: '10%'
    },
    headerimg: {
        height: 35,
        width: 35,
        borderRadius: 100
    },
    Headertxt: {
        color: '#000',
        fontSize: 15,
        width: '100%',
        fontWeight: '600',
        // textAlign: 'center' 
    },
    Headertext: {
        color: '#000',
        fontSize: 13,
        width: '100%',
        fontWeight: '600',
        // textAlign: 'center'
    },
    body: {
        flex: 1,
        marginBottom: 50
    },
    categoriestxt: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    viewalltxt: {
        fontSize: 14,
        fontWeight: '700',
        color: '#F12A10',
        paddingHorizontal: 8
    },
    img: {
        height: 90,
        width: 90,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#c4c4c4',
        marginBottom: 10,
        // marginRight: 15
    },
    txtcontainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        paddingHorizontal: 10
    },
    imgcontainer: {
        // width: '100%',
        flexDirection: 'row',
        paddingHorizontal:7,
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        width: 150,
        shadowOffset: { weight: 1, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 8,
        paddingHorizontal: 10,
        paddingVertical: 10

    },
    image: {
        height: 120,
        width: '100%',
        marginBottom: 14,
        borderRadius: 10
    },
    newitembox: {
        flexDirection: 'row',
        // width: '33%',
        alignItems: 'center',
        marginBottom: 20,
        paddingHorizontal: 10,
        justifyContent: 'center',
        paddingVertical: 10
    },
    prise: {
        fontSize: 12,
        fontWeight: '400',
        color: '#000'
    },
    itemname: {
        width: '90%',
        fontWeight: '700',
        fontSize: 14
    },
    icon: {
        height: 22,
        width: 22,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F12A10',
    },
    ratingcontainer: {
        width: 35,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
        height: 20,
        borderRadius: 5,
    },
    ratingtxt: {
        fontSize: 10,
        fontWeight: '700',
        color: '#fff'
    },
    shoptxt: {
        width: '70%',
        color: '#000',
        fontSize: 15,
        fontWeight: '700'
    },
    shopnearbox: {
        flexDirection: 'row',
        // width: '25%',
        alignItems: 'center',
        marginBottom: 20,
        paddingHorizontal: 10,
        justifyContent: 'center',
        paddingVertical: 10
    },
    shopbox: {
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        width: 150,
        shadowOffset: { weight: 1, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 8,
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    shopimage: {
        height: 120,
        width: '100%',
        marginBottom: 14,
        borderRadius: 10
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
