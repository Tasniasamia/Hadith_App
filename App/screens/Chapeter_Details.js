import React, { useEffect, useState } from 'react';

import {View,Text, ScrollView, Image,Dimensions, StyleSheet, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SahihalBukhari } from '../../hadith_Chapter.js';
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


// const bookmark = async (id) => {
//     try {
//       const selectedHadith = pagesdata.find((index) => index.id === id);
//       console.log('Selected Hadith:', selectedHadith);
  
//       if (selectedHadith && selectedHadith.page !== null) {
//         console.log('Selected Hadith page:', selectedHadith.page);
  
//         const asyncData = await AsyncStorage.getItem("StoreData");
//         const existingData = asyncData ? JSON.parse(asyncData) : [];
  
//         const existDataIndex = existingData.findIndex((item) => item.page === selectedHadith.page);
  
//         if (existDataIndex === -1) {
//           existingData.push({
//             id: selectedHadith.id,
//             name: selectedHadith.book,
//             narrate: selectedHadith.narration,
//             text: selectedHadith.english_meaning,
//             page: selectedHadith.page,
//           });
  
//           await AsyncStorage.setItem("StoreData", JSON.stringify(existingData));
//           console.log("Data added to AsyncStorage:", existingData);
//         } else {
//           existingData[existDataIndex] = {
//             ...existingData[existDataIndex],
//             id: selectedHadith.id,
//             name: selectedHadith.book,
//             narrate: selectedHadith.narration,
//             text: selectedHadith.english_meaning,
//           };
  
//           await AsyncStorage.setItem("StoreData", JSON.stringify(existingData));
//           console.log("Data updated in AsyncStorage:", existingData);
//         }
//       } else {
//         console.log("Selected Hadith is null or has null page");
//       }
//     } catch (error) {
//       console.error("Error adding/updating data to AsyncStorage:", error);
//     }
//   };
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
      const removeitem=async()=>{
        console.log(await AsyncStorage.removeItem("StoreData"))
      }
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

    <ScrollView contentContainerStyle={{ marginTop: 50, backgroundColor: "#dfeccd" }}>
          {pagesdata.map((index, idx) => (
            <View key={idx} style={{ backgroundColor: "#ecf4e3", marginVertical: 10, marginHorizontal: 10, paddingVertical: 10, paddingHorizontal: 10 }}>
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ fontSize: 20, color: "green", fontWeight: "bold" }}>
                {index.book}   {index.page}
                </Text>
                <View style={{ flexDirection: "row" }}>
                  {/* ... (TouchableOpacity components) */}
                </View><View style={{ flexDirection: "row" }}>
    <TouchableOpacity onPress={()=>bookmark(index.id)}>
      <Ionicons name="bookmark-outline" size={20} color="gray" style={{ paddingVertical: 5, color: "green", fontWeight: "bold" }} />
    </TouchableOpacity>
    <TouchableOpacity style={{marginLeft:10}} onPress={()=>{navigation.navigate("Bookmark")}}>
        <Ionicons name="share-social-sharp" size={20} color="gray" style={{ paddingVertical: 5, color: "green", fontWeight: "bold" }} />
    </TouchableOpacity>
  </View>
              </View>
              <View>
                <Text style={{ paddingVertical: 15 }}>{index.narration} </Text>
                <Text>{index.english_meaning}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
        </SafeAreaView>
        </>

    );
};

export default Chapeter_Details;
