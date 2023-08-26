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
    
    useEffect(() => {
        const hadithChapterAll = SahihalBukhari.filter(
            (index) => index.category === name && index.page === page && index.book === book
        );

        setPagesdata(hadithChapterAll);
    }, [name, page, book]);
console.log("All_Hadith_description",pagesdata);

const bookmark = async (id) => {
     pagesdata.find((index) => {
        if(index.id==id){
            setBookmark({
                id:index.id,
                name:index.book,
                narrate:index.narration,
                text:index.english_meaning,
                page:index.page
            })
        }
    });

    
        try {
            const asyncData = await AsyncStorage.getItem("StoreData");
            const existingData = asyncData ? JSON.parse(asyncData) : [];

            const existData = existingData.find((index) => index.page === page);

            if (!existData) {
                existingData.push(bookmarked); // Push the new data into the array
                await AsyncStorage.setItem("StoreData", JSON.stringify(existingData)); // Save the updated array
                console.log("Data added to AsyncStorage:", existingData);
            } else {
                console.log("Data already exists in AsyncStorage:", existingData);
            }
        } catch (error) {
            console.error("Error adding data to AsyncStorage:", error);
        }
    
};
    
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
    <TouchableOpacity onPress={()=>{bookmark(index.id)}}>
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
