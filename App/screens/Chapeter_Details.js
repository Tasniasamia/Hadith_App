import React, { useEffect, useState } from 'react';

// import { Share } from 'react-native';
import {View,Text, ScrollView, Image,Dimensions, StyleSheet, TouchableOpacity, Modal} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SahihalBukhari } from '../../hadith_Chapter.js';
import { Share } from 'react-native';
import { TextInput } from 'react-native';
const Chapeter_Details =({navigation,route}) => {
    const[pagesdata,setPagesdata]=useState([])
    const[bookmarked,setBookmark]=useState(null);
    const { page,name,book } = route.params;
    const pageData={id:1,name:"Book 30 , Hadith 3536",narrate:"Narrated It was narrated that Abu Hurairah said ",text:"Whoever does not thank people, does not thank Allah.",page:page}
    // const hadithChapterAll = SahihalBukhari.filter(
    //     (index) => index.category === name && index.page === page && index.book === book
    //   );
    console.log("name   page book", name ,  page , book)
    useEffect(() => {
        const hadithChapterAll = SahihalBukhari.filter(
            (index) => index.category === name && index.page === page && index.book === book
        );

        setPagesdata(hadithChapterAll);
    }, [name, page, book]);
console.log("All_Hadith_description",pagesdata);

const BOOKMARK_KEY ='bookmark';

const setData = async (key, value)=>{
   try {
    const jsonData = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonData);
    return true;
   } catch (error) {
    return false;
   }
}

const getData = async (key)=>{
    try {
        const res =await AsyncStorage.getItem(key);
        return JSON.parse(res);
    } catch (error) {
        return null;
    }
}

const bookmark = async(id)=>{
    try {
        // console.log({id});
        // await setData(BOOKMARK_KEY, id);
    //   await  AsyncStorage.clear()

        const exData = await getData(BOOKMARK_KEY);

        let newData = [];

        console.log(2222,exData);
        if (exData) {
            newData = exData;
        }
        const selectedHadith = pagesdata.find((index) => index.id === id);

    const dataIsExit =newData.find(index=>index.page === selectedHadith.page)
   if(dataIsExit){
    return console.log("Data already exit");
   }

        
        newData.push(selectedHadith);

        await setData(BOOKMARK_KEY, newData);
        console.log('Successfully Bookmarked');
    } catch (error) {
        console.log(error)
    }
}
// Share Hadith
// const SocialShareScreen = () => {
//     onShare();
    const onShare = async () => {
        try {
          const result = await Share.share({
            message:
            'https://play.google.com/store/apps/details?id=com.qitca.qwikmedic', // (pass your hadith text here)
        
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          Alert.alert(error.message);
        }
      };

//Modal Section
const [isModalVisible, setModalVisible] = useState(false);

const toggleModal = () => {
  setModalVisible(!isModalVisible);
};

const [modal,setModal]=useState("english")
//search Data  Processing
const [inputValue, setInputValue] = useState('');

const handleInputChange = (text) => {
  setInputValue(text);
  searchData(text);
};
console.log(inputValue);
const searchData = (name) => {
    const filteredData = pagesdata.filter((index) =>
      index.page.toLowerCase().includes(name.toLowerCase())
    );
    setPagesdata(filteredData);
  };
 
   //CSS Style
    const screenWidth = Dimensions.get('window').width;
    const styles = StyleSheet.create({
        container: {
          flexDirection:"row",
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor:"rgba(7, 103, 52, 1)" ,
          paddingHorizontal:10,
         top:0,
          height:80,
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
        modalContainer: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
        },
        modalContent: {
          backgroundColor: 'white',
          width: '50%', // Customize the width as needed
           // Customize the height as needed
          borderRadius: 10,
          padding: 20,
          // alignItems: 'center',
          padding:15,
          elevation: 5,
        },
        closeButton: {
          position: 'absolute',
          top: -10,
          right: -10,
          backgroundColor:"green",
          borderRadius:50,
          height:30,
          width:30,
          alignItems:"center",
          justifyContent:"center"

        },
        hoveredContainer: {
          backgroundColor: 'white',
        },
        translate_text: {
        padding:5,
        },
        textHover:{
          backgroundColor:"green",
          color:"white"
        }
        
      });
      const removeitem=async()=>{
        console.log(await AsyncStorage.removeItem("StoreData"))
      }
    return (
        <>
        <SafeAreaView  style={{ paddingHorizontal: 5,backgroundColor:"rgba(0, 0, 0, 0.5)" }}>
        <View
        style={[
          styles.container

        ]} >

      <Image
        source={require("../assets/original.png")}
        
        resizeMode="contain"
      />
      {/* <Text style={{fontSize:18,color:"white"}}>{name}</Text> */}
      <TextInput
        style={{ borderColor: 'gray',color:"black", borderWidth: 1, paddingVertical: 10,paddingHorizontal:20 ,borderRadius:10,backgroundColor:"white"}}
        placeholder="Search here..."
        value={inputValue}
        onChangeText={handleInputChange}
      />
    </View>

    <ScrollView contentContainerStyle={{  backgroundColor: "#dfeccd" }}>
          {pagesdata.map((index, idx) => (
            <View key={idx} style={{ backgroundColor: "#ecf4e3", marginVertical: 10, marginHorizontal: 10, paddingVertical: 10, paddingHorizontal: 10 }}>
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ fontSize: 20, color: "green", fontWeight: "bold" }}>
                {index.book}   {index.page}
                </Text>
                <View style={{ flexDirection: "row" }}>
                  {/* ... (TouchableOpacity components) */}
                </View><View style={{ flexDirection: "row",alignItems:"center" }}>

                <TouchableOpacity onPress={toggleModal}>
                <Ionicons name="caret-forward-circle-outline" size={25} color="gray" style={{ paddingVertical: 5, color: "green", fontWeight: "bold",marginRight:5 }} />
      </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate("Bookmark")}>
      <Ionicons name="caret-forward-circle-outline" size={25} color="gray" style={{ paddingVertical: 5, color: "green", fontWeight: "bold",marginRight:5 }} />
    </TouchableOpacity>

    <TouchableOpacity onPress={()=>bookmark(index.id)}>
      <Ionicons name="bookmark-outline" size={20} color="gray" style={{ paddingVertical: 5, color: "green", fontWeight: "bold" }} />
    </TouchableOpacity>
    <TouchableOpacity style={{marginLeft:10}} onPress={onShare}>
        <Ionicons name="share-social-sharp" size={20} color="gray" style={{ paddingVertical: 5, color: "green", fontWeight: "bold" }} />
    </TouchableOpacity>
  </View>
              </View>
              <View>
                <Text style={{ paddingVertical: 15 }}>{index.narration} </Text>
                <Text> {
    modal === "Bengali" ? index.bengali_meaning :
    modal === "English" ? index.english_meaning :
    modal === "Arabic" ? index.arabic_meaning :
    modal === "Urdu" ? index.urdu_meaning :
    index.english_meaning
  }</Text>
              </View>
            </View>
          ))}
        </ScrollView>


        {/* Translate Part */}
        <View >
    
      
        <Modal visible={isModalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>

          <View style={styles.modalContent}>
        <Text style={{textAlign:"center"}}>Languages</Text>


        <TouchableOpacity  style={styles.translate_text} onPress={()=>{setModal("Bengali")}}>
              <Text>Bengali</Text>
            </TouchableOpacity>

            <TouchableOpacity   style={styles.translate_text}  onPress={()=>{setModal("English")}}>
              <Text>English</Text>
            </TouchableOpacity>


            <TouchableOpacity   style={styles.translate_text}  onPress={()=>{setModal("Arabic")}}>
              <Text >Arabic</Text>
            </TouchableOpacity>


            <TouchableOpacity   style={styles.translate_text}  onPress={()=>{setModal("Urdu")}}>
              <Text  >Urdu</Text>
            </TouchableOpacity>




            <View>

            </View>
            <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
              <Ionicons name="close" size={18} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
        </SafeAreaView>
        </>

    );
};

export default Chapeter_Details;
