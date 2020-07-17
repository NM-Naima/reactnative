import React, { useState, Component } from 'react';
import { View, Text,StyleSheet, TextInput } from 'react-native';
import axios from 'axios';
import {  BtnForm } from '../components';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import { useSelector, useDispatch } from 'react-redux'


const ROOT_URL = 'https://us-central1-one-time-password-db9d7.cloudfunctions.net';

function PhoneEnterScreen ({ navigation }) {

    const [phone, setPhone] = useState('');

    const handleSubmit  = async () => {
        try {
            await axios.post(`${ROOT_URL}/createUser`, { phone : phone });
            await navigation.push('VerifCodeScreen');    
            await axios.post(`${ROOT_URL}/requestOneTimePassword`, { phone : phone });   
        } catch(err){
            console.log(err)           
        }          
    }
    return (
        <View style={styles.container}>
        <View style={styles.currentPage}>
        <Text style={styles.textCurrentPageTop}>Enter</Text>
        <Text style={styles.textCurrentPageBottom}>your number</Text>
        </View>
        <View style={styles.textInputContainer}>
        <View style={styles.modelTextInputContainer}>
        <View style={styles.inputContainer}>
            <TextInput
            autoCorrect={false}
            keyboardType={"phone-pad"}
            maxLength={10} 
            placeholder= "YOUR PHONE NUMBER"
            onChangeText = {(value) => setPhone(value)}
            value={phone}
            />
        </View>
        </View>
        <View style={styles.infoContainer}>
        <Text style={styles.textInfo}>We just need your resgister email adress to send you password reset</Text>
        </View>
        <View style={styles.btnContainer}>
            <BtnForm 
                title="next"
                onPress={handleSubmit}
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
    width:250,
    marginLeft:30,
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
  inputContainer:{
    paddingBottom:10, 
    borderBottomColor: '#D9ECF2',
    borderBottomWidth: 1,
},
inputText:{
    fontSize:15,
    paddingTop:15,
    fontWeight:'bold'
},
btnContainer:{
    flex:2,
},
textLogIn:{
   marginTop:20,
   fontSize:15
},
infoContainer:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    marginTop:10
},
textInfo:{
    marginTop:20,
    marginLeft:51,
    marginRight:51,
    color:'#372FCC',
    fontSize:13,
    fontWeight:'bold'
},
});

export default PhoneEnterScreen;