import React, { useState, useEffect,useRef } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
  StyleSheet,
  Animated,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SahihalBukhari, SahihMuslim,SunanNasai,Sahih_Abi_Daud,Jamih_Tirmidhi,subh_ibne_majah  } from '../../hadith_book_data';
import TopNavbar from './TopNavbar';

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
    else if(name == "Sahih Muslim"){
      setChapter(SahihMuslim);
      console.log("SahihMuslim");
    }
    else if(name == "Sunan an-Nasa'i"){
      setChapter(SunanNasai);
      console.log("Sunan an-Nasa'i");
    }
    else if(name == "Sunan Abi Dawud"){
      setChapter(Sahih_Abi_Daud);
      console.log("Sunan Abi Dawud")
    }
    else if(name == "Jami` at-Tirmidhi"){
      setChapter(Jamih_Tirmidhi);
      console.log("Jamih_Tirmidhi");
    }
    else if(name == "Sunan Ibn Majah"){
      setChapter(subh_ibne_majah );
      console.log("subh_ibne_majah ");
    }


  });

  const screenWidth = Dimensions.get('window').width;
  const styles = StyleSheet.create({
      container: {
flexDirection:"row",
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor:"rgba(7, 103, 52, 1)" ,
        paddingHorizontal:10,
       
     
      },
      image: {
        width: screenWidth ,
        height: undefined,
        aspectRatio: 3,
      },
      text: {
        position: 'absolute',
        top: '50%', // Move the text to the vertical center of the image
        left: '50%', // Move the text to the horizontal center of the image
        transform: [{ translateX: -50 }, { translateY: -10 }], // Adjust the translation to center the text
        fontSize: 14,
        fontWeight: 'bold',
      },
    });

    const Header_Max_Height = 110;
    const Header_Min_Height = 100;
    const scrollOffsetY = useRef(new Animated.Value(0)).current;
    const Scroll_Distance = Header_Max_Height - Header_Min_Height;
    const animatedHeaderHeight = scrollOffsetY.interpolate({
      inputRange: [0, Scroll_Distance],
      outputRange: [Header_Max_Height, Header_Min_Height],
      extrapolate: 'clamp',
    });
    const animateHeaderBackgroundColor = scrollOffsetY.interpolate({
      inputRange: [0, Scroll_Distance],
      outputRange: ['rgba(7, 103, 52, 1)','rgba(7, 103, 52, 1)'],
      extrapolate: 'clamp',
    });
    // let scrollOffsetY = useRef(new Animated.Value(0)).current;  

 //search Data  Processing
 const [inputValue, setInputValue] = useState('');

 const handleInputChange = (text) => {
   setInputValue(text);
   searchData(text);
 };
 console.log(inputValue);
 const searchData = (name) => {
     const filteredData = chapter.filter((index) =>
       index.book.toLowerCase().includes(name.toLowerCase())
     );
     setChapter(filteredData);
   };
  
  return (
<>





    
    <SafeAreaView   style={{ paddingHorizontal: 5,backgroundColor:"rgba(7, 103, 52, 1)"}}>
         <Animated.View
        style={[
          styles.container,
          {
            height: animatedHeaderHeight,
            backgroundColor: animateHeaderBackgroundColor
          }

        ]} >

      <Image
        source={require("../assets/original.png")}
        
        resizeMode="contain"
      />
      <Text style={{fontSize:18,color:"white"}}>{name}</Text>
      <TextInput
        style={{ borderColor: 'gray', borderWidth: 1, paddingVertical: 10,paddingHorizontal:20 ,borderRadius:10,backgroundColor:"white"}}
        placeholder="Search here..."
        value={inputValue}
        onChangeText={handleInputChange}
      />
    </Animated.View>


    <ScrollView 
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }],
          { useNativeDriver: false }
        )}
        
        >
      {chapter.map((index,index2) => (
        <View key={index.id}>
      
    <View >
        <View style={{flex:100,borderRadius:10,flexDirection:"row",justifyContent:"space-between",alignItems:"center",backgroundColor:"white", marginBottom: 10 ,paddingVertical:20,marginTop:0}}>
        {/* <View  style={{flex:80,flexDirection:"row",justifyContent:"space-evenly",alignItems:"center"}}> */}
<Text style={{color:"black",flex:10,marginLeft:8}}>{index2+1}.</Text>
<Text style={{fontSize:15,color:"black",flex:60}}>{index.book}</Text>
        {/* </View> */}

        <View style={{flex:20,textAlign:"right"}}><Text> <TouchableOpacity onPress={()=>{navigation.navigate("Chapter_Details",{ page:index.hadithRange,name:name ,book:index.book})}}>
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


    </SafeAreaView></>
  );
};

export default Hadith_Chapter;


