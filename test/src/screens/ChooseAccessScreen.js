import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';


const ChooseAccessScreen = () =>{
    return (
        <View style={styles.container}>
            <View style={styles.imgContainer}>
                <Image style={styles.img} source={require('../assets/man-in-red.jpg')}></Image>
            </View>
            <View style={styles.textContentContainer}>
                <Text style={styles.titleContent}>Socialise and make friends</Text>
                <Text style={styles.textContent}>An easiest way to communicate, chat video and plan anything in advance</Text>
            </View>
            <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.btnFacebook}>
                <Text style={styles.btnTextFacebook}>Continue with Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnEmail}>
                <Text style={styles.btnTextEmail}>Continue with email</Text>
            </TouchableOpacity>
                <View style={styles.textTerms}>
                    <Text>i read and accept the ChatApp</Text>
                    <TouchableOpacity><Text style={styles.terms}>Terms & Policies</Text>
                    </TouchableOpacity>
                </View> 
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
        width:500,  
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
        padding:10,
        flexDirection:"column",
    },
    btnFacebook:{
        alignSelf:'center',
        borderWidth:3,
        borderRadius:25,
        borderColor:'#372FCC',
        height:40,
        width:350,
        justifyContent:'center',
        marginBottom:20
    },
    btnEmail:{
        alignSelf:'center',
        borderWidth:3,
        borderRadius:25,
        borderColor:'#31F9BD',
        backgroundColor:'#31F9BD',
        height:40,
        width:350,
        justifyContent:'center',
        marginBottom:20
    },
    btnTextFacebook:{
        alignSelf:'center',
        color:'#31F9BD',
        fontWeight:'bold',
        fontSize:16
    },
    btnTextEmail:{
        alignSelf:'center',
        color:'#372FCC',
        fontWeight:'bold',
        fontSize:16     
    },
    textTerms:{
        flex:1,
        justifyContent:'center',
        flexDirection:'row',
        fontSize: 10
    },
    text:{
        fontSize:15,
        color:'#FFF'
    },
    terms:{
        fontSize:15,
        color:'#372FCC',
        marginLeft: 3
    },
});

export default ChooseAccessScreen;