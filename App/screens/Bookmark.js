import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image, Dimensions, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Share } from 'react-native';
import { TextInput } from 'react-native';
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
const onShare = async (data) => {
    try {
      const result = await Share.share({
        message:
data    
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
  //search Data  Processing
const [inputValue, setInputValue] = useState('');

const handleInputChange = (text) => {
  setInputValue(text);
  searchData(text);
};
console.log(inputValue);
const searchData = (name) => {
    const filteredData = BookItem.filter((index) =>
      index.page.toLowerCase().includes(name.toLowerCase())
    );
    setBookItem(filteredData);
  };
  //Modal Section
const [isModalVisible, setModalVisible] = useState(false);

const toggleModal = () => {
  setModalVisible(!isModalVisible);
};
const [modal,setModal]=useState("english")

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
       <TouchableOpacity onPress={toggleModal}>
        <Ionicons name="contract" size={30} color="white" />
      </TouchableOpacity>
      {/* <Text style={{fontSize:18,color:"white"}}>{name}</Text> */}
      <TextInput
        style={{ borderColor: 'gray',color:"black", borderWidth: 1, paddingVertical: 10,paddingHorizontal:20 ,borderRadius:10,backgroundColor:"white"}}
        placeholder="Search here..."
        value={inputValue}
        onChangeText={handleInputChange}
      />
    </View>

          <ScrollView contentContainerStyle={{  backgroundColor: "#dfeccd" }} >
            {/* Display BookItem */}
            {BookItem.map((index, index2) => (
            <View
              key={index2}
              style={{
                backgroundColor: '#ecf4e3',
                marginVertical: 10,
                marginHorizontal: 10,
                paddingVertical: 10,
                paddingHorizontal: 10,
                marginTop:10
              }}
            >
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 20, color: 'green', fontWeight: 'bold' }}>
                  {index.book} <Text>{index.page}</Text>
                </Text>
                <View style={{ flexDirection: 'row' }}>
                  <TouchableOpacity onPress={() => navigation.navigate('Homepage')}>
                    <Ionicons
                      name="caret-forward-circle-outline"
                      size={25}
                      color="gray"
                      style={{ paddingVertical: 5, color: 'green', fontWeight: 'bold', marginRight: 5 }}
                    />
                  </TouchableOpacity>


                  <TouchableOpacity onPress={()=>deleteFromBookmark(index.id)}>
      <Ionicons name="bookmark-sharp" size={20} color="gray" style={{ paddingVertical: 5, color: "green", fontWeight: "bold" }} />
    </TouchableOpacity>
   
   
   
   
    <TouchableOpacity style={{marginLeft:10}} onPress={()=>{onShare(

  modal === "Bengali" ? index.bengali_meaning :
  modal === "English" ? index.english_meaning :
  modal === "Arabic" ? index.arabic_meaning :
  modal === "Urdu" ? index.urdu_meaning :
  index.english_meaning


    )}}>
        <Ionicons name="share-social-sharp" size={20} color="gray" style={{ paddingVertical: 5, color: "green", fontWeight: "bold" }} />
    </TouchableOpacity>
                </View>
              </View>
              <Text style={{ paddingVertical: 15 }}>{index.narration} </Text>
                <Text> {
    modal === "Bengali" ? index.bengali_meaning :
    modal === "English" ? index.english_meaning :
    modal === "Arabic" ? index.arabic_meaning :
    modal === "Urdu" ? index.urdu_meaning :
    index.english_meaning
  }</Text>
            </View>
          ))}
          </ScrollView>
        </SafeAreaView>
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
      </>
    );
};

export default BookMark;
