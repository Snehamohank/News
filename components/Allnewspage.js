
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, ImageBackground, Animated, Dimensions } from 'react-native'
import React, { useState, useCallback, useRef, useEffect, useContext } from 'react'
import sports from '../src/Assets/sports.png';
import news from '../src/Assets/newss.png'
import economy from '../src/Assets/eco.png'
import sportss from '../src/Assets/cri.png'
import enter from '../src/Assets/enter.png'
import black from '../src/Assets/bl.png'
import { FlatList } from 'react-native-gesture-handler';
import { NewsContext } from '../Api/Context';






const Allnews = () => {
    const [line, setLine] = useState(false)
    const {
        news: { articles },
    } = useContext(NewsContext)
    const { width } = Dimensions.get("window");
   

    const [textShown, setTextShown] = useState(-1);
    const [lengthMore, setLengthMore] = useState(false);
    const toggleNumberOfLines = (id) => {
        console.log(id)
        setTextShown(textShown === id ? -1 : id);
    };

    const onTextLayout = useCallback((e) => {
        setLengthMore(e.nativeEvent.lines.length >= 3);
    }, []);

    const fadeAnim = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    }, [fadeAnim]);


    return (


        <Animated.View style={{ opacity: fadeAnim }}>
            <View style={{ height: 'auto', width: '100%' }}>
                <Text style={{ color: 'white', fontSize: 18, fontWeight: '600' }}>Today</Text>
                <Text style={{ color: 'white', fontSize: 18, marginTop: 5, fontWeight: '600' }}>Exclusive News!</Text>
            </View>
            {
                articles &&
                <FlatList
                    data={articles.slice(6, 30)}
                    keyExtractor={item => item?.id}
                    renderItem={({ item }) => (
                        <View style={{ height: 'auto', width: '100%', borderWidth: 1, borderColor: 'grey', borderRadius: 5, marginVertical: 12 }}>
                             <ImageBackground blurRadius={40} style={{ height:'auto', width: "100%",}} 
                             source={{ uri: item.urlToImage }} 
                             >
                                <Text style={{ color: 'white', fontSize: 16, marginTop:3, fontWeight: '500', marginBottom:5,paddingHorizontal:5}}>{item.title}</Text>
                                </ImageBackground>
                            <ImageBackground source={{ uri: item.urlToImage }} style={{ height: 200, width: '100%', resizeMode: 'stretch', alignItems: 'flex-end' }} >
                            </ImageBackground>
                            <View style={{ flexDirection: 'row', justifyContent: "space-between", marginHorizontal: 5 }}>
                                <Text style={{ color: 'white', fontSize: 14, fontWeight: '500', marginTop:5,lineHeight:18 }}>{item.content}</Text>
                            </View>
                            <View style={{ marginHorizontal: 5, marginBottom: 5, marginHorizontal: 5 ,height:'auto',width:'100%'}}>
                                <Text style={{ fontSize: 12, color: 'white', marginVertical:5 ,lineHeight:18}} onTextLayout={onTextLayout} numberOfLines={textShown === item?.id ? undefined : 3}>
                                    {item.description}
                                </Text>
                                <Text style={{ color: 'white', fontSize:12, marginTop:3, fontWeight: '500', }}>Short by {item?.author}</Text>
                            </View>
                        </View>
                    )}
                />
            }
        </Animated.View>
    )
}
export default Allnews
const styles = StyleSheet.create({})