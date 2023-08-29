import React, { useEffect, useState ,useContext } from 'react';


import {ActivityIndicator, Dimensions ,StyleSheet, Text, View,ImageBackground ,SafeAreaView,Platform ,StatusBar,Image,Button,TextInput,TouchableOpacity} from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
//Credentials-Context
import { CredentialsContext } from '../components/CredintailsContext';

//Credentials-Context
import { WellcomeContext } from '../components/CredintailsContext';

// import {UserContext} from '../../components/CredintailsContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserContext } from '../components/CredintailsContext';

import colors from '../App/config/colors';


//screens

import Homepage from '../App/screens/homepage';
import Firstslider from '../App/screens/firstslide';
import Secondslide from '../App/screens/secondslide';
import Thirdslide from '../App/screens/thirdslide';
import CustomSidebarMenu from '../App/screens/CustomSidebarMenu';
import Hadith_Chapter from '../App/screens/Hadith_Chapter';
import Chapeter_Details from '../App/screens/Chapeter_Details';
import BookMark from '../App/screens/Bookmark';
import TopNavbar from '../App/screens/TopNavbar';
import Settings from '../App/screens/settings';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Drawer = createDrawerNavigator();



// const StackNavigator = () => {

 

      
//     return (
//         <Stack.Navigator
//                                     screenOptions={{
//                                         // headerStyle:{
//                                         //     backgroundColor: "transparent"
//                                         // },
//                                         headerTintColor: "#FFFFFF",
//                                         headerTitle:"",
//                                         headerTransparent:true,
//                                         headerLeftContainerStyle:{
//                                             paddingLeft: 20
//                                         },
//                                     }}
//                                     initialRouteName="Homepage"
//                                 >


//                                     <Stack.Screen name="Homepage" component={Homepage} />

//       </Stack.Navigator>
//     );
//   };


const RootStack = ({navigation}) => {
    return(
        <>
        
        {/* <NavigationContainer> */}
      
       
       

        <WellcomeContext.Consumer>
            {({storeWellcome}) => (
                <>
                    {storeWellcome ? (
                        
                        <CredentialsContext.Consumer>
                        {({storeCredentials}) => (
                            <NavigationContainer

                                // backBehavior='initialRoute'
                                // initialRouteName='Root'
                            
                            >
                            
                                {storeCredentials ? (
                                    <>
                                 

                                    {/* <Drawer.Navigator
                                                options={{unmountOnBlur:true,lazy:true,drawerIcon:{ focused: true, color: 'black', size: 41 }}}
                                                defaultStatus="open"
                                                screenOptions={{swipeEnabled: false,unmountOnBlur:true,lazy:true}} 
                                                    drawerPosition="right" 
                                                    drawerContentOptions={{
                                                        activeTintColor: '#e91e63',
                                                        itemStyle: { marginVertical: 5 },
                                                        drawerLockMode: "locked-closed"
                                                    }}
                                                    drawerContent={(props) => <CustomSidebarMenu {...props} />}
                                                    
                                                    >

                                                
                                                    <Drawer.Screen key='stackNavigator' name='StackNavigator' component={StackNavigator} style={{marginTop:100}}
                                                        options={{
                                                            drawerLabel: () => null,
                                                            title: null,
                                                            drawerIcon: () => null
                                                        }}
                                                
                                                    />
                                                    
                                    </Drawer.Navigator> */}

                                    </>
                                ) : (
                                    <>
                                    

                                     <Stack.Navigator
                                  
                                  screenOptions={{
                                    headerStyle:{
                                        backgroundColor: "transparent"
                                    },
                                    headerShown:false,
                                    headerTintColor: "#F0F0EE",
                                    headerTitle:"",
                                    headerTransparent:true,
                                    headerLeftContainerStyle:{
                                        paddingLeft: 20
                                    }
                                }}
                                initialRouteName="Homepage"
                                >


                                        <Stack.Screen name="Homepage" component={Homepage} />
                                        <Stack.Screen name="Hadith_Chapter" component={Hadith_Chapter} />
                                        <Stack.Screen name="Chapter_Details" component={Chapeter_Details} />
                                        <Stack.Screen name="Bookmark" component={BookMark} />
                                        <Stack.Screen name="Settings" component={Settings}/>
                                        {/* <Stack.Screen name="Homepage" component={TopNavbar} /> */}
                                        {/* Write your code here */}
       
                                        
                                </Stack.Navigator>


                                    </>
                                )
                            }
                                
                            
                                
              
                        </NavigationContainer>
                        )}
                        </CredentialsContext.Consumer>
                       
                    ):(
                        
                        <CredentialsContext.Consumer>
                        {({storeCredentials}) => (
                            <NavigationContainer>
                            <Stack.Navigator
                                screenOptions={{
                                    headerStyle:{
                                        backgroundColor: "transparent"
                                    },
                                    headerTintColor: "#F0F0EE",
                                    headerTitle:"",
                                    headerTransparent:true,
                                    headerLeftContainerStyle:{
                                        paddingLeft: 20
                                    }
                                }}
                                initialRouteName="Firstslider"
                                
                            >
                                {storeCredentials ? (
                                    <>

                                       <Stack.Screen name="Firstslider" component={Firstslider}/>
                                        <Stack.Screen name="Secondslide" component={Secondslide}/>
                                        <Stack.Screen name="Thirdslide" component={Thirdslide}/>
                                        <Stack.Screen name="Homepage" component={Homepage} />

                                    </>
                                ) : (
                                    <>
                                      
                                        
                                        <Stack.Screen name="Firstslider" component={Firstslider}/>
                                        <Stack.Screen name="Secondslide" component={Secondslide}/>
                                        <Stack.Screen name="Thirdslide" component={Thirdslide}/>
                                        <Stack.Screen name="Homepage" component={Homepage} />

                                    </>
                                )
                            }
                                
                            
                            
                            </Stack.Navigator>
                        </NavigationContainer>
                        )}
                        </CredentialsContext.Consumer>
                    )}
                </>
            )}
            
            
        </WellcomeContext.Consumer>

        {/* </NavigationContainer> */}

        </>

    )
}

const styles = StyleSheet.create({
    MainContainer:{
        backgroundColor: colors.body,
        justifyContent: "center",
        alignItems:'center',  
        height:'100%',
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
        height:'7%',
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
        width:"20%",
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

})
export default RootStack;