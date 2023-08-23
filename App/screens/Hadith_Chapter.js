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
// if(load){
//   return <Text>Loading.................</Text>
// }
  useEffect(() => {
    // console.log("Hadith_Chapter",SahihalBukhari)
    if (name == "Sahih al-Bukhari") {
      setChapter(SahihalBukhari);
      console.log("Hadith_Data");
      // setLoad(false)
    }
  });
// console.log(chapter);
  const screenWidth = Dimensions.get('window').width;
  const styles = StyleSheet.create({
    // Your styles here...
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
      {chapter.map((index) => (
        <View key={index.id}>
      
    <View >
        <View style={{flex:100,flexDirection:"row",justifyContent:"space-between",alignItems:"center",backgroundColor:"#dbdbda", marginBottom: 5 ,padding:20,marginTop:0}}>
        <View  style={{flex:60,flexDirection:"row",justifyContent:"space-evenly",alignItems:"center"}}>
<Text style={{fontSize:18,marginRight:4,color:"gray"}}>1.</Text>
<Text style={{fontSize:18,color:"gray"}}>The Number of Hadith</Text>
        </View>

        <View style={{flex:40,alignItems:"flex-end"}}><Text> <TouchableOpacity ><Ionicons onPress={()=>{navigation.navigate("Chapter_Details")}} name="chevron-forward-outline" size={20} color="gray" /></TouchableOpacity></Text></View>

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
         
        </View>
      ))}
    </ScrollView>
  );
};

export default Hadith_Chapter;


