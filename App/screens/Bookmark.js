import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
const BookMark =() => {
    const [BookItem, setBookItem] = useState([]);

    const bookmarkCollection = async () => {
      try {
        const StorageData = await AsyncStorage.getItem('StoreData');
        const StorageDataParse = JSON.parse(StorageData);
        setBookItem(StorageDataParse || []); // Use empty array as default if data is null
      } catch (error) {
        console.error("Error retrieving data from AsyncStorage:", error);
      }
    };
  
    useEffect(() => {
      async function fetchData() {
        try {
          await bookmarkCollection();
        } catch (error) {
          // Handle error here
        }
      }
      fetchData();
    }, []);

    const removeFromBookmark=()=>{
        
    }
    // const bookmarkCollection = async () => {
    //     try {
    //         const StorageData = await AsyncStorage.getItem('StoreData');
    //         const StorageDataParse = JSON.parse(StorageData);
    //         console.log("StorageDataParse:", StorageDataParse); // Log the retrieved data
    //         let newArray = StorageDataParse; // You can directly assign since newArray and StorageDataParse are the same
    //         setBookItem(newArray);
    //     } catch (error) {
    //         console.error("Error retrieving data from AsyncStorage:", error);
    //     }
    // };
    console.log("AllBookmarkCollections",BookItem[0]);


    
    const screenWidth = Dimensions.get('window').width;
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor:"#e2e1e1" ,
          height:40,
          marginBottom:48
        },
        image: {
          width: screenWidth ,
          height: 120,
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
        <SafeAreaView style={{ marginHorizontal: 5, marginTop: 60 }}>


          {/* Image and Text here */}


          <View style={styles.container}>
      <Image
        source={require("../assets/hadith_name.png")}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.text}>Hadith</Text>
    </View>
          <ScrollView contentContainerStyle={{  backgroundColor: "#dfeccd" }}>
            {/* Display BookItem */}
            {BookItem.map((index, index2) => (
              <View key={index2} style={{backgroundColor:"#ecf4e3",marginVertical:10,marginHorizontal:10,paddingVertical:10,paddingHorizontal:10}}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ fontSize: 20, color: "green", fontWeight: "bold" }}>
{index.name}</Text>
<View style={{ flexDirection: "row" }}>
    <TouchableOpacity >
      <Ionicons name="bookmark-sharp" size={20} color="gray" style={{ paddingVertical: 5, color: "green", fontWeight: "bold" }} />
    </TouchableOpacity>
    <TouchableOpacity style={{marginLeft:10}} >
        <Ionicons name="share-social-sharp" size={20} color="gray" style={{ paddingVertical: 5, color: "green", fontWeight: "bold" }} />
    </TouchableOpacity>
  </View>
                </View>
                <Text >{index.narrate}</Text>
                <Text >{index.text}</Text>
              </View>
            ))}
          </ScrollView>
        </SafeAreaView>
      </>
    );
};

export default BookMark;
