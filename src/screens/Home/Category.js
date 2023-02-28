
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, ImageBackground, Animated, Dimensions } from 'react-native'
import React, { useState, useCallback, useRef, useEffect, useContext } from 'react'
import { FlatList } from 'react-native-gesture-handler';
import { NewsContext } from '../../../Api/Context';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'





const Allnews = () => {
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
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);


  return (


    <Animated.View style={{ opacity: fadeAnim, backgroundColor: 'black' }}>
      <View style={{ height: 'auto', width: '100%', paddingTop: Platform.OS === 'ios' ? 60 : 30 }}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image />
        </TouchableOpacity>
        {/* <Text style={{ color: 'white', fontSize: 18, fontWeight: '600' }}>Today</Text>
                <Text style={{ color: 'white', fontSize: 18, marginTop: 5, fontWeight: '600' }}>Exclusive News!</Text> */}
      </View>

      {
        articles &&
        <FlatList
          data={articles.slice(10, 20)}
          keyExtractor={item => item?.id}
          renderItem={({ item }) => (
            <View style={{ height: 'auto', width: '100%', borderWidth: 1, borderColor: 'grey', borderRadius: 5, marginVertical: 12 }}>
              <ImageBackground blurRadius={40} style={{ height: 'auto', width: "100%", }}
                source={{ uri: item.urlToImage }}
              >
                <Text style={{ color: 'white', fontSize: 16, marginTop: 3, fontWeight: '500', marginBottom: 5, paddingHorizontal: 5 }}>{item.title}</Text>
              </ImageBackground>
              <ImageBackground source={{ uri: item.urlToImage }} style={{ height: 200, width: '100%', resizeMode: 'stretch', alignItems: 'flex-end' }} >
              </ImageBackground>
              <View style={{ flexDirection: 'row', justifyContent: "space-between", marginHorizontal: 5 }}>
                <Text style={{ color: 'white', fontSize: 14, fontWeight: '500', marginTop: 5, lineHeight: 18 }}>{item.content}</Text>
                {/* <Text style={{ color: 'white', fontSize: 12, marginTop: 6 }}>12 Feb 2023</Text> */}
              </View>
              <View style={{ marginHorizontal: 5, marginBottom: 5, marginHorizontal: 5, height: 'auto', width: '100%' }}>
                <Text style={{ fontSize: 12, color: 'white', marginVertical: 5, lineHeight: 18 }} onTextLayout={onTextLayout} numberOfLines={textShown === item?.id ? undefined : 3}>
                  {item.description}
                </Text>
                {/* {lengthMore ? (
                                    <TouchableOpacity onPress={() => [toggleNumberOfLines(item?.url)]}>
                                        <Text style={{ color: 'red', fontSize: 12 }}>
                                            {textShown === item?.id ? 'Read Less' : 'Read More'}
                                        </Text>
                                    </TouchableOpacity>
                                ) : null} */}
                <Text style={{ color: 'white', fontSize: 12, marginTop: 3, fontWeight: '500', }}>Short by {item?.author}</Text>
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