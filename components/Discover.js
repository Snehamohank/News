import React, { useState, useEffect, useRef, useContext } from 'react';
import { Button, Platform, TouchableOpacity, View, Text, Image, FlatList, Dimensions, ImageBackground, Animated } from 'react-native';
import sports from '../src/Assets/sports.png';
import news from '../src/Assets/newss.png'
import economy from '../src/Assets/eco.png'
import sportss from '../src/Assets/cri.png'
import enter from '../src/Assets/enter.png'
import strike from '../src/Assets/ss.png'
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'
import { getNewsAPI } from '../Api/api';
import { NewsContext } from '../Api/Context';
import { categories, sources } from '../Api/api';
import Allnews from './Allnewspage';

const Blink = () => {
    const [isShowingText, setIsShowingText] = useState(true);

    useEffect(() => {
        const toggle = setInterval(() => {
            setIsShowingText(!isShowingText);
        }, 500);
        return () => clearInterval(toggle);
    });


    if (!isShowingText) {   
        return null;
    }
    return <View style={{ width: 12, height: 12, borderRadius: 10, backgroundColor: 'red', marginTop: 14 }}></View>;
};


const Discover = () => {
    const navigation = useNavigation();
    
    const { width } = Dimensions.get("window");
    const [select, setSelect] = useState(false);
    const [newss, setNews] = useState([]);
    // const {} =useContext(NewsContext)
    const { setCategory, setSource,
        news: { articles },
    } = useContext(NewsContext)
    data = [
        {
            id: '1',
            title: '',
            image: sportss,
            channel:'BBC News'
        },
        {
            id: '2',
            title: '',
            image: economy,
            channel:'CNN News'

        },
        {
            id: '3',
            title: '',
            image: enter,
            channel:'Fox News'

        },
        {
            id: '4',
            title: '',
            image: strike,
            channel:'CNN News'

        },

    ]





    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {

        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    }, [fadeAnim]);


    return (
        <Animated.View style={{ height: '100%', width: '100%', backgroundColor: 'black', opacity: fadeAnim }}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: 'white', fontSize: 17, margin: 8 }}>Today's Live </Text>
                <Blink />
            </View>
            <View style={{ height: '20%', marginTop: 5, width: '100%', }}>
                <FlatList
                    style={{ alignContent: 'center',marginTop:5 }}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={data}
                    keyExtractor={item => item?.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity disabled={true}
                            style={{ width: width * 0.80, height: "80%", marginHorizontal: 15, borderRadius: 10, }}>
                            <ImageBackground borderTopLeftRadius={10} borderTopRightRadius={10} style={{ resizeMode: 'stretch', height: '100%', width: '100%', borderRadius: 10, }} source={item?.image} >
                                <Text ellipsizeMode="tail" numberOfLines={2} style={{ color: 'white', fontSize: 16, marginTop: 3, fontWeight: '500', marginBottom: 5, paddingHorizontal: 5 }}>{item.title}</Text>
                            </ImageBackground>
                            <ImageBackground blurRadius={40} borderBottomLeftRadius={10} borderBottomRightRadius={10} style={{ height: 'auto', width: "100%", }}
                                source={item?.image}
                            >
                               <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
                               <Text style={{ color: 'white', fontSize: 16, marginTop: 3, fontWeight: '500', marginBottom: 5, paddingHorizontal: 5 ,justifyContent:'flex-end'}}>{item?.channel}</Text>
                               </View>
                            </ImageBackground>

                        </TouchableOpacity>
                    )}

                />
            </View>
            <Text style={{ color: 'white', fontSize: 17, marginTop: 15 }}>Categories</Text>
            <View style={{ height: 105, marginTop: 15, width: '100%', }}>
                <FlatList
                    style={{ alignContent: 'center', }}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={categories}
                    keyExtractor={item => item.id}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity onPress={() => [navigation.navigate('Allnews'), setCategory(item?.name)]}
                            style={{
                                width: width * 0.30, height: "100%", marginHorizontal: 5, borderRadius: 10,
                                justifyContent: 'center', alignContent: 'center', backgroundColor: 'black', shadowOffset: { width: -2, height: 4 },
                                // shadowColor: 'red',
                                shadowOpacity: 0.5,
                                shadowRadius: 3,
                            }}><Image source={{ uri: item?.pic }} style={{ height: '85%', width: '100%', resizeMode: 'stretch', backgroundColor: 'black', borderRadius: 10 }} />
                            <View style={{ height: 25, width: '100%', }}>
                                <Text style={{ color: 'white', textAlign: 'center' }}>{item?.name}</Text>
                            </View>
                        </TouchableOpacity>
                    )}

                />
            </View>
            <View style={{
                height: "100%", width: '90%', display: 'flex', marginHorizontal: 15,
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: "space-around",
                flexWrap: 'wrap',
                marginTop: 10
                // marginHorizontal: 10,
            }}>
                {sources?.map((item) => {
                    return (
                        <TouchableOpacity
                            onPress={() => [navigation.navigate('Allnews'), setSource(item?.id)]}
                            style={{
                                height: "20%", width: '45%', display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 5,
                                borderWidth: 1,
                                borderColor: 'grey',
                                marginTop: 20,

                            }}>
                            <ImageBackground borderTopLeftRadius={10} borderTopRightRadius={10} style={{ resizeMode: 'stretch', height: '90%', width: '100%', }}
                                source={{ uri: item?.pic }} >
                            </ImageBackground>
                            <View style={{ marginBottom: 10,height:'auto' }}>
                                <Text style={{ color: 'white', textAlign: 'center', }}>{item?.name}</Text>
                            </View>
                        </TouchableOpacity>

                    )
                })}

            </View>


        </Animated.View>
    );
}
export default Discover;
