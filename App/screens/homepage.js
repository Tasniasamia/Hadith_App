import React, { useEffect,useRef, useState ,useContext,useCallback } from 'react';
import {FlatList,ScrollView,ActivityIndicator,Animated, Dimensions ,StyleSheet, Text, View,ImageBackground ,SafeAreaView,Platform ,StatusBar,Image,Button,TextInput, Pressable, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Hadith_Data from '../../Hadith_Category.json'
import colors from '../config/colors';

function Homepage({navigation,route}) {
    const screenWidth = Dimensions.get('window').height;
    const [Hadith,setHadith]=useState([]);
    const [lan,setLan] = useState(true) // false = bangla , true = eng

    useEffect(()=>{

        console.log("hello")

    } , []);
    useEffect(()=>{
       setHadith(Hadith_Data )
    },[])

const scrollOffsetY=useRef(new Animated.Value(0)).current;

   
    return (
        <SafeAreaView style={{width:'100%',height:'100%'}}>

        <View style={[styles.navbar,{flexDirection:'row'}]}>   
          
                <Pressable style={{ width: '5%', height: 25,left:10,top:15}} >
  
                </Pressable>

                <View style={{width:'50%',justifyContent:'flex-start',alignItems:'flex-start',left:10}}>
                    
                    <Text style={{top:17,color:colors.black,fontSize:14,display : lan ? 'none' : 'flex'}} >  বিস্তারিত</Text>                 
                    
                    <Text style={{left:10,top:17,color:colors.black,fontSize:14,display : lan ? 'flex' : 'none',letterSpacing:.9,fontFamily: 'Poppins_400Regular'}} >HOME</Text>                 
                
                </View>

        </View>
            <View style={[styles.MainContainer]}>
                <StatusBar
                animated={true}
                backgroundColor="#f1f1f1"
                // barStyle={statusBarStyle}
                
                />

<ScrollView contentContainerStyle={{marginTop:10,marginHorizontal:20}}>
                {/* one Category of Hadith */}
             
              



               {/* By using api */}


{Hadith.map(index=>
                <View style={{backgroundColor:"white",width:350,marginVertical:5,flexDirection:"column"}} key={index.id}>
                    <TouchableOpacity   onPress={() => navigation.navigate("Hadith_Chapter")}>
        {/* part-1 */}

<View style={{flexDirection:"row",alignItems:"stretch"}}>
    {/* part-1-(Hadith Logo) */}
    <View style={{marginHorizontal:10,marginTop:12}}>
<Image style={{ width: 80, height: 80 }}  source={require('../assets/Hadith_logo.png')}/>
    </View>
        {/* part-1-(Hadith_Category_Details) */}

    <View style={{marginLeft:10,paddingTop:10}}>
        <Text style={{fontSize:20}}>{index.name}</Text>
        <Text style={{marginVertical:4,fontSize:18,textAlign:"left"}}>{index.language}</Text>
        <Text >
  <Ionicons name="stats-chart" size={20} color="gray" />
  <Text style={{paddingHorizontal:10}}>  {index.pages.from}/  {index.pages.to}</Text>
</Text>
  
                </View>
    </View>


    </TouchableOpacity>
                
                
                
      {/* part-2           */}
                
                
      <View style={{flexDirection:"row",paddingVertical:10,marginLeft:13}}>
              <Ionicons name="star-sharp" size={20} color="gray" />
                <Text>  {index.totalPages} / {index.hadithCount}</Text>
                </View>

                </View>)}

            
           
                </ScrollView>
</View>
        <View style={[styles.footerStyle]}>

<View style={{width:'100%',height:69,justifyContent:'center',alignItems:'center',flexDirection:'row',backgroundColor:colors.white}}>
        
<Pressable style={[styles.tuchabluebuttonf,{borderBottomColor:colors.red,borderBottomWidth:5}]} onPress={() => navigation.navigate("Homepage",{})}>

<Image resizeMode={'cover'} style={{width:22 ,height:22}} source={require("../assets/home.jpg")}/>

<Text style={{top:4,color:colors.ash,fontSize:10,fontWeight:'bold',display : lan ? 'none' : 'flex'}}>বাসা অনসন্ধান করুন</Text>
<Text style={{top:7.8,color:colors.red,fontSize:10,display : lan ? 'flex' : 'none',fontFamily: 'Poppins_400Regular',letterSpacing:0.9}}>HOME</Text>

</Pressable>

<Pressable style={[styles.tuchabluebuttonf,{borderBottomColor:colors.dblue,borderBottomWidth:0}]} onPress={() => navigation.navigate("Reminder",{})}>
<Image resizeMode={'cover'} style={{width:22 ,height:22}} source={require("../assets/study.jpg")}/>
<Text style={{top:4,color:colors.ash,fontSize:10,fontWeight:'bold',display : lan ? 'none' : 'flex'}}>লগ ইন করুন </Text>
<Text style={{top:7.8,color:colors.ash,fontSize:10,display : lan ? 'flex' : 'none',fontFamily: 'Poppins_400Regular',letterSpacing:0.9}}>STUDY</Text>

</Pressable>



<Pressable style={[styles.tuchabluebuttonf,{borderBottomColor:colors.red,borderBottomWidth:0}]} onPress={() =>  navigation.navigate('CustomSidebarMenu',{})}>

<Image resizeMode={'cover'} style={{width:22 ,height:22}} source={require("../assets/exam.jpg")}/>
<Text style={{top:4,color:colors.ash,fontSize:10,fontWeight:'bold',display : lan ? 'none' : 'flex'}}>লগ ইন করুন </Text>
<Text style={{top:7.8,color:colors.ash,fontSize:10,display : lan ? 'flex' : 'none',fontFamily: 'Poppins_400Regular',letterSpacing:0.9}}>EXAM</Text>

</Pressable>


{/*  

<Pressable style={[styles.tuchabluebuttonf,{borderBottomColor:colors.green,borderBottomWidth:0}]} onPress={() => navigation.navigate("Heathmart",{})}>

<Image resizeMode={'cover'} style={{width:22 ,height:22}} source={require("../assets/estore.jpg")}/>
<Text style={{top:4,color:colors.ash,fontSize:10,fontWeight:'bold',display : lan ? 'none' : 'flex'}}>বাসা অনসন্ধান করুন</Text>
<Text style={{top:7.8,color:colors.ash,fontSize:10,display : lan ? 'flex' : 'none',fontFamily: 'Poppins_400Regular',letterSpacing:0.9}}>E-STORE</Text>

</Pressable>


<Pressable style={[styles.tuchabluebuttonf,{borderBottomColor:colors.dblue,borderBottomWidth:0}]} onPress={() => navigation.navigate("Promohome",{})  }>

<Image resizeMode={'cover'} style={{width:22 ,height:22}} source={require('../assets/top_right_promo.jpg')}/>
<Text style={{top:4,color:colors.black,fontSize:10,fontWeight:'bold',display : lan ? 'none' : 'flex'}}>লগ ইন করুন </Text>
<Text style={{top:7.8,color:colors.ash,fontSize:10,display : lan ? 'flex' : 'none',fontFamily: 'Poppins_400Regular',letterSpacing:0.9}}>PROMO</Text>

</Pressable> */}



</View>
</View>

    </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    MainContainer:{
        backgroundColor: colors.body,
        height:'85.2%',
        width:'100%'
    },

    ImgContainer:{

        width:"100%",
        height:209,
        // top:182
       
    },

    language:{
        flex:1,
        
        backgroundColor:"#3C709E",
        justifyContent: "center",
        alignItems:'center',  
        borderRadius: 5,
        width:75,
        height:30


    },
    tuchabluebutton:{
        width:"35%",
        height:34,
        borderRadius:2,
        //  backgroundColor:colors.black,
         justifyContent: "center",
       alignItems:'center',
    },
    footerStyle:{
        height:65,
        borderTopColor:colors.white,
        backgroundColor: colors.white,       
        alignItems:'center',
        justifyContent:'flex-end',

        shadowColor: '#000',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity:  5,
        shadowRadius: 5,
        elevation: 6,
       
    },


    tuchabluebuttonf:{
        width:"33.33%",
        height:'100%',
        backgroundColor:colors.white,
        justifyContent: "center",
        alignItems:'center',
    },

    navbar:{
  
        backgroundColor: colors.white,
        width:'100%',
        height:55,

        shadowColor: '#000',
        shadowOffset: { width: 1.5, height: 1.5 },
        shadowOpacity:  0.8,
        shadowRadius: 5,
        elevation: 6,


    },
    navbar1:{
  
        backgroundColor: colors.white,
        width:'60%',
        height:40,
        left:50,
    },

    ImgContainer:{  

        width:300,
        height:250,
       
    },

    tuchabluebutton:{
        // paddingTop:20,
         width:"55%",
         height:35,
         borderRadius:4,
         justifyContent: "center",
         alignItems:'center',
         top:20
   
     },
    navbarbutton:{
        flexDirection:'row',
        width:'50%',
        justifyContent:'center',
        alignItems:'center',

    },
    textstyle:{
        color:'#FFF',
        fontSize:14,
    },
    textstyle1:{
        color:colors.blacktext,
        fontSize:12,
        //fontFamily:'Nunito',
    },
    body1:{
        flex:1,
        justifyContent: "center",
        alignItems:'center',
        width:'100%',
        height:'100%',
       
     
    },
    searchview:{
        width:'100%',
        height:50,
        top:3,
        justifyContent: "center",
        alignItems:'center',

    },
    
    input:{
        width:"94%",
        height:40,
        borderColor:colors.ash1,
        borderWidth:1,
        backgroundColor:'#FFF',
        alignItems:'center', 
        //padding:5,
        paddingLeft:45,
        borderRadius:3,
        paddingRight:30,
        fontSize:12,

    },
    adds:{
        width:"100%",
        height:145,

        borderColor:colors.ash1,
        borderWidth:1,
        borderRadius:4,
        backgroundColor:colors.white,
        

        shadowColor: '#000',
        shadowOffset: { width: 1.5, height: 1.5 },
        shadowOpacity:  0.8,
        shadowRadius: 5,
        elevation: 6,
    },
    addsImg:{
        width:'100%',
        borderTopLeftRadius:3,
        borderTopRightRadius:3,
        height:70,
    },
    addstext:{
        width:'100%',
        height:70,

    },
    flatdetails:{
        // paddingLeft:0,
        // width:'100%',
        // marginTop:10

        flexDirection:"row",
        justifyContent:'space-between',
        alignItems:"center",
        paddingLeft:10,
    }

})

export default Homepage;
