import React from 'react';

import {View,Text, ScrollView, Image,Dimensions, StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TopNavbar from './TopNavbar';
const BookMark =() => {
    const screenWidth = Dimensions.get('window').width;
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor:"#e2e1e1" ,
          
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
        <>
        <SafeAreaView  style={{ marginHorizontal: 5, marginTop: 60}}>
              <View style={styles.container}>
      <Image
        source={require("../assets/hadith_name.png")}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.text}>Hadith</Text>
    </View>

    <ScrollView contentContainerStyle={{marginTop:50,backgroundColor:"#dfeccd"}} >
        <View style={{backgroundColor:"#ecf4e3",marginVertical:10,marginHorizontal:10,paddingVertical:10,paddingHorizontal:10}}>
            <View style={{flexDirection:"row",justifyContent:"space-between"}}><Text style={{fontSize:20,color:"green",fontWeight:"bold"}}>Book 30 , Hadith 3536</Text>
          <Text> <Text ><Ionicons name="bookmark-sharp" size={20} color="gray"  style={{fontSize:20,paddingVertical:5,color:"green",fontWeight:"bold"}}/></Text>
            <Text>   <Ionicons name="share-social-sharp" size={20} color="gray" style={{fontSize:20,paddingVertical:5,color:"green",fontWeight:"bold"}}/></Text>
            </Text> 
            </View>
<View>
    <Text style={{paddingVertical:15}}>Narrated It was narrated that Abu Hurairah said : </Text>
    <Text>: "Whoever does not thank people, does not thank Allah."</Text>
</View>
        </View>

    </ScrollView>
        </SafeAreaView>

        </>
    );
};

export default BookMark;
