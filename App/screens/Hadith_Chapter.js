import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SahihalBukhari, SahihMuslim } from '../../hadith_book_data';

const Hadith_Chapter = ({ navigation, route }) => {
  const [chapter, setChapter] = useState([]);
  const [load,setLoad]=useState(true);
  const { name } = route.params;
  console.log(name);

  useEffect(() => {

    if (name == "Sahih al-Bukhari") {
      setChapter(SahihalBukhari);
      console.log("Hadith_Data");
    
    }
  });

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
    <ScrollView contentContainerStyle={{ marginHorizontal: 5, marginTop: 25 }}>
         <View style={styles.container}>
      <Image
        source={require("../assets/hadith_name.png")}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.text}>Hadith</Text>
    </View>
      {chapter.map((index,index2) => (
        <View key={index.id}>
      
    <View >
        <View style={{flex:100,flexDirection:"row",justifyContent:"space-between",alignItems:"center",backgroundColor:"#dbdbda", marginBottom: 5 ,paddingVertical:20,marginTop:0}}>
        {/* <View  style={{flex:80,flexDirection:"row",justifyContent:"space-evenly",alignItems:"center"}}> */}
<Text style={{color:"gray",marginRight:2,flex:10}}>{index2+1}.</Text>
<Text style={{fontSize:15,color:"gray",flex:60}}>{index.book}</Text>
        {/* </View> */}

        <View style={{flex:20,textAlign:"right"}}><Text> <TouchableOpacity onPress={()=>{navigation.navigate("Chapter_Details")}}>
          <Text> {index.hadithRange}</Text>
         </TouchableOpacity></Text></View>

        </View>
        {/* <View style={{flex:100,flexDirection:"row",justifyContent:"space-between",alignItems:"center",backgroundColor:"#dbdbda", marginBottom: 5 ,padding:20}}>
        <View  style={{flex:60,flexDirection:"row",justifyContent:"space-evenly",alignItems:"center"}}>
<Text style={{fontSize:18,marginRight:4,color:"gray"}}>1.</Text>
<Text style={{fontSize:18,color:"gray"}}>The Number of Hadith</Text>
        </View>

        <View style={{flex:40,alignItems:"flex-end"}}><Text> <Ionicons name="chevron-forward-outline" size={20} color="gray" /></Text></View>

        </View> */}
        
        {/* <View style={{flex:100,flexDirection:"row",justifyContent:"space-between",alignItems:"center",backgroundColor:"#dbdbda", marginBottom: 5 ,padding:20}}>
        <View  style={{flex:60,flexDirection:"row",justifyContent:"space-evenly",alignItems:"center"}}>
<Text style={{fontSize:18,marginRight:4,color:"gray"}}>1.</Text>
<Text style={{fontSize:18,color:"gray"}}>The Number of Hadith</Text>
        </View>

        <View style={{flex:40,alignItems:"flex-end"}}><Text> <Ionicons name="chevron-forward-outline" size={20} color="gray" /></Text></View>

        </View> */}




    </View>
         
        </View>
      ))}
    </ScrollView>
  );
};

export default Hadith_Chapter;


