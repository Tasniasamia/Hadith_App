import React from 'react';
import {View,Text, ScrollView, Image,Dimensions, StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Hadith_Chapter =() => {
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
        
        <ScrollView contentContainerStyle={{ marginHorizontal: 5, marginTop: 25}}>

            {/* Banner */}
             <View style={styles.container}>
      <Image
        source={require("../assets/hadith_name.png")}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.text}>Hadith</Text>
    </View>
    <View >
        <View style={{flex:100,flexDirection:"row",justifyContent:"space-between",alignItems:"center",backgroundColor:"#dbdbda", marginBottom: 5 ,padding:20,marginTop:0}}>
        <View  style={{flex:60,flexDirection:"row",justifyContent:"space-evenly",alignItems:"center"}}>
<Text style={{fontSize:18,marginRight:4,color:"gray"}}>1.</Text>
<Text style={{fontSize:18,color:"gray"}}>The Number of Hadith</Text>
        </View>

        <View style={{flex:40,alignItems:"flex-end"}}><Text> <Ionicons name="chevron-forward-outline" size={20} color="gray" /></Text></View>

        </View>
        <View style={{flex:100,flexDirection:"row",justifyContent:"space-between",alignItems:"center",backgroundColor:"#dbdbda", marginBottom: 5 ,padding:20}}>
        <View  style={{flex:60,flexDirection:"row",justifyContent:"space-evenly",alignItems:"center"}}>
<Text style={{fontSize:18,marginRight:4,color:"gray"}}>1.</Text>
<Text style={{fontSize:18,color:"gray"}}>The Number of Hadith</Text>
        </View>

        <View style={{flex:40,alignItems:"flex-end"}}><Text> <Ionicons name="chevron-forward-outline" size={20} color="gray" /></Text></View>

        </View>
        
        <View style={{flex:100,flexDirection:"row",justifyContent:"space-between",alignItems:"center",backgroundColor:"#dbdbda", marginBottom: 5 ,padding:20}}>
        <View  style={{flex:60,flexDirection:"row",justifyContent:"space-evenly",alignItems:"center"}}>
<Text style={{fontSize:18,marginRight:4,color:"gray"}}>1.</Text>
<Text style={{fontSize:18,color:"gray"}}>The Number of Hadith</Text>
        </View>

        <View style={{flex:40,alignItems:"flex-end"}}><Text> <Ionicons name="chevron-forward-outline" size={20} color="gray" /></Text></View>

        </View>




    </View>
      
      </ScrollView>
    );
};


  
  
  
  
  
export default Hadith_Chapter;
