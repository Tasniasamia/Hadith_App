import React from 'react';
import {View,Text, ScrollView, Image,Dimensions, StyleSheet} from 'react-native';

const Hadith_Chapter =() => {
    const screenWidth = Dimensions.get('window').width;
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
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
        
        <ScrollView contentContainerStyle={{ marginHorizontal: 5, marginTop: 25,backgroundColor:"#dbdbda" }}>
             <View style={styles.container}>
      <Image
        source={require("../assets/hadith_name.png")}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.text}>Hadith</Text>
    </View>
        {/* Other content */}
      </ScrollView>
    );
};


  
  
  
  
  
export default Hadith_Chapter;
