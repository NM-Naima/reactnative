import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';


const ConnectScreen = () =>{
    return (
        <View style={styles.container}>
            <View style={styles.imgContainer}>
                <Image style={styles.img} source={require('../assets/two-women.jpg')}></Image>
            </View>
            <View style={styles.textContentContainer}>
                <Text style={styles.titleContent}>Connecting with your friends anytime, anywhere</Text>
                <Text style={styles.textContent}>An easiest way to communicate, chat video and plan anything in advance</Text>
            </View>
            <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.btnLogIn}>
                <Text style={styles.btnTextLogIn}>Log In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnSignUp}>
                <Text style={styles.btnTextSignUp}>Sign Up</Text>
            </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"column"
    },
    imgContainer:{
        flex:3
    },
    img:{
        height:550,
        width:450
    },
    textContentContainer:{
        flex:1,
        justifyContent:'center'
    },
    titleContent:{ 
        alignSelf:'center',
        fontSize:23,
        width:300,
        textAlign:'center',
        fontWeight:'bold'        
    },
    textContent:{
        alignSelf:'center',
        textAlign:'center',
        width:280,
        fontSize:15,
        marginTop:10
    },
    btnContainer:{
        flex:1,
        flexDirection:"row",
        justifyContent:'space-around'
    },
    btnLogIn:{
        borderWidth:3,
        borderRadius:25,
        borderColor:'#372FCC',
        height:40,
        width:120,
        justifyContent:'center',
        marginTop:20 
    },
    btnSignUp:{
        borderWidth:3,
        borderRadius:25,
        borderColor:'#31F9BD',
        backgroundColor:'#31F9BD',
        height:40,
        width:120,
        justifyContent:'center',
        marginTop:20 
    },
    btnTextLogIn:{
        alignSelf:'center',
        color:'#31F9BD',
        fontWeight:'bold',
        fontSize:16
    },
    btnTextSignUp:{
        alignSelf:'center',
        color:'#372FCC',
        fontWeight:'bold',
        fontSize:16     
    }
});

export default ConnectScreen;