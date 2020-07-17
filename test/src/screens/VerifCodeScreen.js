import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { BtnForm } from '../components/BtnForm';
import { connect } from 'react-redux';
import * as action from '../../actions';
import axios from 'axios';

const ROOT_URL = 'https://us-central1-one-time-password-db9d7.cloudfunctions.net';

const VerifCodeScreen = ( ) => {

    const phone = '+33 00 00 00 00 00';
    const [ pin1, setPin1 ] = useState('');
    const [ pin2, setPin2 ] = useState('');
    const [ pin3, setPin3 ] = useState('');
    const [ pin4, setPin4 ] = useState('');
    const code = [pin1, pin2, pin3, pin4].join('');
    console.log(code);

    const handleSubmit = async () => {
        try{
            await axios.post(`${ROOT_URL}/verifyOneTimePassword`, { phone : phone, code : code });
        } 
        catch(err){
            console.log(err)
        }
    }


    return(
        <View style={styles.container}>
        <View style={styles.currentPage}>
        <Text style={styles.textCurrentPageTop}>Verification</Text>
        <Text style={styles.textCurrentPageBottom}>code</Text>
        <Text style={styles.textInfo}>Please type the verification code send to the {phone}</Text>
        <View style={styles.verifCodeContainer}>
            <View style={styles.inputCodeContainer}>
                <TextInput style={styles.inputCode}
                    maxLength={1}
                    onChangeText={(val)=> setPin1(val)}
                />
            </View>
            <View style={styles.inputCodeContainer}>
                <TextInput style={styles.inputCode}
                    maxLength={1}
                    onChangeText={(val)=> setPin2(val)}
                    
                />
            </View>
            <View style={styles.inputCodeContainer}>
                <TextInput style={styles.inputCode}
                    maxLength={1}
                    onChangeText={(val)=> setPin3(val)}
                />
            </View>
            <View style={styles.inputCodeContainer}>
                <TextInput style={styles.inputCode}
                    maxLength={1}
                    onChangeText={(val)=> setPin4(val)}
                />
            </View>
        </View>
        <View style={styles.resendPwdContainer}>
            <Text style={styles.textResendPwd}>Code not received ?</Text>
               <TouchableOpacity
               onPress={() => alert('yo')}
               ><Text style={styles.resendPwd}> resend</Text>
               </TouchableOpacity>
        </View>
        
        <View style={styles.btnContainer}>
            <BtnForm 
                title='NEXT'
                onPress={() => alert('Button with adjusted color pressed')}
                />
        </View>

    </View>
  </View>
);
};
const styles = StyleSheet.create({
    container:{
        flex:1,
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
    textInfo:{
        marginTop:20,
        marginLeft:51,
        marginRight:51,
        color:'#372FCC',
        fontSize:13,
        fontWeight:'bold'
    },
    btnContainer:{
        flex:6,
    },
    verifCodeContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-around',
        margin:60,
    },
    inputCodeContainer:{
        backgroundColor: 'rgba(49, 249, 189, 0.5)', 
        height:60,
        width:60,
        justifyContent:'center'
    },
    inputCode:{
        fontSize:40,
        fontWeight:'bold',
        textAlign: "center", 
    },
    resendPwdContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        marginTop:10
    },
    textResendPwd:{
        fontSize:15,
    },
    resendPwd:{
        color:'#372FCC',
        fontSize:15,
        fontWeight:'bold'
    }
});

export default VerifCodeScreen;