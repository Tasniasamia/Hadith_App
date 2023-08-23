import React from 'react';

import {View,Text, ScrollView, Image,Dimensions, StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
const BookMark =() => {
    const screenWidth = Dimensions.get('window').width;
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor:"#dbdbda" ,
          
       marginBottom:5
        },
        image: {
          width: screenWidth - 10,
          height: undefined,
          aspectRatio: 3,
        },
        text: {
          position: 'absolute',
          top: '50%', // Move the text to the vertical center of the image
          left: '50%', // Move the text to the horizontal center of the image
          transform: [{ translateX: -30 }, { translateY: -10 }], // Adjust the translation to center the text
          fontSize: 20,
          fontWeight: 'bold',
        },
      });
    return (
        <View >
              <View style={styles.container}>
      <Image
        source={require("../assets/hadith_name.png")}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.text}>Hadith</Text>
    </View>
        </View>
    );
};

export default BookMark;
