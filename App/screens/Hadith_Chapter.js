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
import { SahihalBukhari, SahihMuslim } from '../../hadith_book_data.js';

const Hadith_Chapter = ({ navigation, route }) => {
  const [chapter, setChapter] = useState([]);
  const [load,setLoad]=useState(true);
  const { name } = route.params;
if(load){
  return <Text>Loading.................</Text>
}
  useEffect(() => {
    if (name === 'Sahih al-Bukhari') {
      setChapter(SahihalBukhari);
      setLoad(false)
    }
  }, []);

  const screenWidth = Dimensions.get('window').width;
  const styles = StyleSheet.create({
    // Your styles here...
  });

  return (
    <ScrollView contentContainerStyle={{ marginHorizontal: 5, marginTop: 25 }}>
      {chapter.map((index) => (
        <View key={index.id}>
          {/* Banner */}
          {/* Your banner code here... */}

          <View>
            {/* Chapter details */}
            {/* Your chapter details code here... */}
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default Hadith_Chapter;