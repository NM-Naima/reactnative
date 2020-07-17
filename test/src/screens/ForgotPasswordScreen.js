import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import ModelTextInput from '../components/ModelTextInput';
import BtnForm from '../components/BtnForm';
 
const ForgotPasswordScreen = ()  => {

    return(
        <View style={styles.container}>
            <View style={styles.currentPage}>
                <Text style={styles.textCurrentPageTop}>Forgot</Text>
                <Text style={styles.textCurrentPageBottom}>password ?</Text>
                <Text style={styles.textInfo}>We just need your resgister email adress to send you password reset</Text>
            </View>
                <Image style={styles.img} source={require('../assets/cadena.png')}></Image>
                <View style={styles.textInputContainer}>
                <View style={styles.modelTextInputContainer}>
                    <ModelTextInput textName='Email' />
                </View>
                <View style={styles.btnContainer}>
                    <BtnForm 
                        title='RESET PASSWORD'
                        onPress={() => alert('Button with adjusted color pressed')}
                        />
                </View>   
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
        flex:1,
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
    textInputContainer:{
        flex:1,
        backgroundColor:'#31F9BD',
        borderTopLeftRadius:90,
        borderTopRightRadius:90,
    },
    modelTextInputContainer:{
        paddingLeft:60,
        paddingRight:60,
        paddingTop:25,
        paddingBottom: 20
      },
    btnContainer:{
        marginTop:20
    },
    img:{
        position:"absolute",
        top:410,
        zIndex:1,
        left:185,
        height:60,
        width:40
    }
});

export default ForgotPasswordScreen;

