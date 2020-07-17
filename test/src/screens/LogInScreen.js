import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ModelTextInput, BtnForm } from '../components';


 
class LogInScreen extends Component {

    state = { text : ""};
    render(){
    return(
        <View style={styles.container}>
            <View style={styles.currentPage}>
                <Text style={styles.textCurrentPageTop}>Connection</Text>
            </View>
            <View style={styles.textInputContainer}>
            <View style={styles.modelTextInputContainer}>
                <ModelTextInput textName='Email' placeholder= "enter your email"  value={this.state.text} onChangeText={ text => this.setState({ text })}  />
                <ModelTextInput textName='Password' placeholder= "choose a password" />
            </View>
            <View style={styles.btnContainer}>
                <BtnForm 
                    title='SIGN IN'
                    onPress={() => alert('Button with adjusted color pressed')}
                    />
            </View>   
            <View style={styles.logInContainer} >
               <Text style={styles.textLogIn}>Don't have an account ?</Text>
               <TouchableOpacity
               onPress={() => alert('yo')}
               ><Text style={styles.logIn}> Log in</Text>
               </TouchableOpacity>
            </View>
            <View style={styles.resetPwdContainer}>
            <Text style={styles.textResetPwd}>Forgot password ?</Text>
               <TouchableOpacity
               onPress={() => alert('yo')}
               ><Text style={styles.resetPwd}> Reset</Text>
               </TouchableOpacity>
            </View>
        </View>
      </View>
    );
  };
}
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
    logInContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        marginTop:20
    },
    textLogIn:{
       marginTop:20,
       fontSize:15
    },
    logIn:{
        marginTop:20,
        color:'#372FCC',
        fontSize:15,
        fontWeight:'bold'
    },
    resetPwdContainer:{
        flex:3,
        flexDirection:'row',
        justifyContent:'center',
        marginTop:10
    },
    textResetPwd:{
        fontSize:15,
    },
    resetPwd:{
        color:'#372FCC',
        fontSize:15,
        fontWeight:'bold'
    }
});

export default LogInScreen;

