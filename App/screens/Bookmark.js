import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Share } from 'react-native';
const BookMark =({navigation}) => {
    const [BookItem, setBookItem] = useState([]);

    const bookmarkCollection = async () => {
      try {
        const StorageData = await AsyncStorage.getItem('bookmark');
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
    const deleteFromBookmark = async (id) => {
        try {
          const updatedBookmarks = BookItem.filter((item) => item.id !== id);
          await AsyncStorage.setItem('bookmark', JSON.stringify(updatedBookmarks));
          setBookItem(updatedBookmarks);
          console.log("DeleteStoreData");
        } catch (error) {
          console.error("Error deleting data from AsyncStorage:", error);
        }
      };
//  Social Share
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
{index.book}</Text>
<View style={{ flexDirection: "row" }}>
<TouchableOpacity onPress={()=>navigation.navigate("Homepage")}>
      <Ionicons name="caret-forward-circle-outline" size={25} color="gray" style={{ paddingVertical: 5, color: "green", fontWeight: "bold",marginRight:5 }} />
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>deleteFromBookmark(index.id)}>
      <Ionicons name="bookmark-sharp" size={20} color="gray" style={{ paddingVertical: 5, color: "green", fontWeight: "bold" }} />
    </TouchableOpacity>
    <TouchableOpacity style={{marginLeft:10}} onPress={onShare}>
        <Ionicons name="share-social-sharp" size={20} color="gray" style={{ paddingVertical: 5, color: "green", fontWeight: "bold" }} />
    </TouchableOpacity>
  </View>
                </View>
                <Text >{index.narration}</Text>
                <Text >{index.english_meaning}</Text>
              </View>
            ))}
          </ScrollView>
        </SafeAreaView>
      </>
    );
};

export default BookMark;
