import { View, Text, Animated, Image } from 'react-native'
import React, { useEffect, useRef, useState } from 'react';
import page from '../../Assets/gl.png'
import Arrow from '../../Assets/arr.png'
import { ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Blink = () => {
  const [isShowingText, setIsShowingText] = useState(true);

  useEffect(() => {
    const toggle = setInterval(() => {
      setIsShowingText(!isShowingText);
    }, 2000);
    return () => clearInterval(toggle);
  });

  if (!isShowingText) {
    return null;
  }
  return <Image source={Arrow} style={{ height: 22, width: 25, }} />


};

const Splashscreen = () => {
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: false,
    }).start();

    // navigation.navigate('Home')
  }, []);
  return (
    <Animated.View style={{ opacity: fadeAnim, flex: 1, alignContent: 'center', backgroundColor: 'black', }}>
      {/* <Text>Splashscreen</Text> */}
      <View style={{ height: "20%", width: '100%', flexdirection: 'row', justifyContent: 'center', alignContent: 'center', marginTop: "40%", marginHorizontal: '30%' }}>
        <Image source={page} style={{ height: 150, width: 150, }} />
      </View>
      <Text style={{ color: 'red', textAlign: 'center', fontSize: 27 }}>Today News</Text>
      <View style={{ height: '20%', width: '100%', alignContent: 'center', marginHorizontal: '40%', marginVertical: 20 }}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{ height: 40, width: 65, backgroundColor: 'red',
         borderRadius: 10,
         shadowOffset: { width: -2, height: 4 },
                                shadowColor: 'grey',
                                shadowOpacity: 0.5,
                                shadowRadius: 3, }}>
          <Text style={{ textAlign: 'center', margin: 10, fontSize: 15, fontWeight: '400' }}>Start</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  )
}

export default Splashscreen