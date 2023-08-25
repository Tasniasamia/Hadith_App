import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image, Dimensions, StyleSheet } from 'react-native';
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
        <SafeAreaView style={{ marginHorizontal: 5, marginTop: 60 }}>
          {/* Image and Text here */}
          <ScrollView contentContainerStyle={{ marginTop: 50, backgroundColor: "#dfeccd" }}>
            {/* Display BookItem */}
            {BookItem.map((index, index2) => (
              <View key={index2} style={styles.bookmarkItem}>
                <View style={styles.header}>
                  <Text style={styles.headerText}>{index.name}</Text>
                  <View style={styles.icons}>
                    <Ionicons name="bookmark-sharp" size={20} color="gray" style={styles.icon} />
                    <Ionicons name="share-social-sharp" size={20} color="gray" style={styles.icon} />
                  </View>
                </View>
                <Text style={styles.narrate}>{index.narrate}</Text>
                <Text style={styles.text}>{index.text}</Text>
              </View>
            ))}
          </ScrollView>
        </SafeAreaView>
      </>
    );
};

export default BookMark;
