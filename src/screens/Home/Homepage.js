import React, { useState } from 'react';
import { Button, Platform, TouchableOpacity, View, Text, Image, FlatList, Dimensions, ImageBackground } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import news from '../../Assets/newss.png';
import sports from '../../Assets/sports.png';
import Discover from '../../../components/Discover';
import Allnews from '../../../components/Allnewspage';
import { useNavigation } from '@react-navigation/native';



const Homepage = () => {
    const { width } = Dimensions.get("window");
    const [select, setSelect] = useState(false);
    const [open, setOpen] = useState(false);
    const [live, setLive] = useState(false);
    const [all, setAll] = useState(true);

    data = [
        {
            id: '1',
            image: news
        }, {
            id: '2',
            image: news
        }, {
            id: '3',
            image: sports
        }, {
            id: '3',
            image: news
        },
    ]


    return (
        <View style={{ flex: 1, backgroundColor: 'black' }}>
            <View style={{ height: '10%', width: '95%', paddingTop: Platform.OS === "ios" ? 40 : '', flexDirection: 'row', justifyContent: 'flex-end',}}>
                <Text style={{ color: 'red', fontSize: 19,fontWeight:'500' }}>TODAY NEWS</Text>
            </View>
            <View style={{ height: 'auto', width: '100%', flexDirection: 'row', justifyContent: 'space-around' }}>
                <TouchableOpacity onPress={() => setOpen(true)}>
                    <Text style={{ color:open? 'red':'white', fontSize: 17 }}>Discover</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setOpen(false)}>
                    <Text style={{ color:open?'white':'red', fontSize: 17 }}>All News</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity  style={{flexDirection:'row'}}>
                    <Text style={{ color: 'white', fontSize: 14  }}>Live </Text>
                    <View style={{width:12,height:12,borderRadius:10,backgroundColor:'red',margin:2}}></View>
                </TouchableOpacity> */}
            </View>
            <View style={{ height: '90%', width: '100%' }}>
                {/* <ScrollView> */}

                {
                    open === true ?
                    
                        <Discover /> :
                        <Allnews />

                }
                {/* </ScrollView> */}
            </View>


            {/* <View style={{ height:"40%", marginTop: 15, width: '100%' }}>
                <FlatList
                    style={{ alignContent: 'center', }}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    // onScroll={({ nativeEvent }) => onChange(nativeEvent)}
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={{
                            width: '50%', height: "70%",  borderRadius: 10,
                            justifyContent: 'center', alignContent: 'center', backgroundColor: 'black', shadowOffset: { width: -2, height: 4 },
                            shadowColor: 'red',
                            shadowOpacity: 0.5,
                            shadowRadius: 3,
                        }}>
                            <Text style={{ textAlign: 'center', color: 'white' }}>sports</Text>
                        </TouchableOpacity>
                    )}

                />
            </View> */}

        </View>
    );
}
export default Homepage;
