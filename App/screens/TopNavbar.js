import React from 'react';
import {View,Text,Image, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TopNavbar =({navigation}) => {
    const navigateToScreen = () => {
        navigation.navigate('Hadith_Chapter'); // Make sure 'OtherScreen' is a valid screen name
      };
    return (
        <View style={{ backgroundColor: "green", flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 15, marginHorizontal: 5, paddingVertical: 10 }}>
        <View style={{ flex: 1 }}>
          <TouchableOpacity onPress={navigateToScreen}>
            <Image style={{ height: 30, aspectRatio: 1, borderColor: "white", borderRadius: 50 }} source={require('../assets/hadith_logo2.png')} />
          </TouchableOpacity>
        </View>
      
        <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
          <TouchableOpacity onPress={() => { /* Handle onPress for search icon */ }}>
            <Text><Ionicons name="search" size={25} color="white" /></Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { /* Handle onPress for aperture icon */ }} style={{ marginLeft: 15 }}>
            <Text><Ionicons name="aperture-outline" size={25} color="white" /></Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { /* Handle onPress for book icon */ }} style={{ marginLeft: 15 }}>
            <Text><Ionicons name="book-outline" size={25} color="white" /></Text>
          </TouchableOpacity>
        </View>
      </View>
    );
};

export default TopNavbar;
