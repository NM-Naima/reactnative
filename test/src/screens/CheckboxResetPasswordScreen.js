import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import BtnForm from '../components/BtnForm';
 
const CheckboxResetPasswordScreen = ()  => {

    return(
        <View style={styles.container}>
            <View style={styles.currentPage}>
                <Text style={styles.textCurrentPageTop}>Check your</Text>
                <Text style={styles.textCurrentPageBottom}>inbox !</Text>
                <Text style={styles.textInfo}>A password reset link has been sent to your mailbox. Please follow the instruction in the mail to reset your password. </Text>
            </View>
            <View style={styles.circleLGreyLeft}></View>
            <View style={styles.circleLGreyRight}></View>
            <View style={styles.circleMVioletMiddle}/>
            <View style={styles.circleMVioletLeft}/>
            <View style={styles.circleSViolet}></View>
            <View style={styles.circleLGreenRight}></View>
            <View style={styles.circleMGreenMiddle}/>
            <View style={styles.circleSGreenLeft}></View>
            <View style={styles.circleSGreenRight}></View>

            <View style={styles.imgContainer}>
                <Image style={styles.img} source={require('../assets/mailImg.png')}></Image>
            </View>
            <View style={styles.btnContainer}>
                <BtnForm 
                    title='BACK TO LOG IN'
                    onPress={() => alert('Button with adjusted color pressed')}
                    />
            </View>
      </View>
    );
  };

const styles = StyleSheet.create({
    container:{
        flex:2,
        flexDirection:'column',
        backgroundColor: '#FFF',
    },
    currentPage:{
        flex:2,
    },
    textCurrentPageTop:{
        color:'#D9ECF2',
        fontSize:40,
        marginTop:80,
        width:250,
        marginLeft:30,
        fontWeight:'bold'   
    },
    textCurrentPageBottom:{
        color:'#D9ECF2',
        fontSize:40,
        width:220,
        marginLeft:30,
        fontWeight:'bold'
    },
    textInfo:{
        marginTop:20,
        marginLeft:30,
        marginRight:30,
        color:'#372FCC',
        fontSize:13,
        fontWeight:'bold'
    },
    circleLGreyLeft:{
        height:18,
        width:18,
        borderWidth:2,
        borderColor:'#D9ECF2',
        borderRadius:50,
        position:'absolute',
        top:440,
        left:175
    },
    circleLGreyRight:{
        height:18,
        width:18,
        borderWidth:2,
        borderColor:'#D9ECF2',
        borderRadius:50,
        position:'absolute',
        top:350,
        left:250
    },
    circleMVioletMiddle:{
        height:15,
        width:15,
        borderWidth:1,
        borderColor:'#372FCC',
        borderRadius:50,
        position:'absolute',
        top:330,
        left:200
    },
    circleMVioletLeft:{
        height:15,
        width:15,
        borderWidth:1,
        borderColor:'#372FCC',
        borderRadius:50,
        position:'absolute',
        top:395,
        left:145
    },
    circleSViolet:{
        height:9,
        width:9,
        borderWidth:1,
        borderColor:'#372FCC',
        borderRadius:50,
        position:'absolute',
        top:335,
        left:290
    },
    circleLGreenRight:{
        height:17,
        width:17,
        borderWidth:1,
        borderColor:'#31F9BD',
        borderRadius:50,
        position:'absolute',
        top:385,
        left:280
    },
    circleMGreenMiddle:{
        height:15,
        width:15,
        borderWidth:1,
        borderColor:'#31F9BD',
        borderRadius:50,
        position:'absolute',
        top:360,
        left:200
    },
    circleSGreenLeft:{
        height:7,
        width:7,
        borderWidth:1,
        borderColor:'#31F9BD',
        borderRadius:50,
        position:'absolute',
        top:380,
        left:90
    },
    circleSGreenRight:{
        height:7,
        width:7,
        borderWidth:1,
        borderColor:'#31F9BD',
        borderRadius:50,
        position:'absolute',
        top:420,
        left:225
    },
    imgContainer:{
        flex:1,
        justifyContent:'flex-end',
        paddingBottom:30,
    },
    img:{
        alignSelf:'center',
    },
    btnContainer:{
        flex:1,
        paddingTop:10  
    },  
});

export default CheckboxResetPasswordScreen;

