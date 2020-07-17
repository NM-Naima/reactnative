import React from 'react';
import { Button,  View, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';

const BtnForm = (props) => {
return (
    <View style={styles.btnForm}>
         <Button
        {...props}
        color='#FFF'
        />
    </View>
);
};

const { width : WIDTH } = Dimensions.get('window');
const styles = StyleSheet.create({
btnForm :{
    alignSelf:'center',
    width:WIDTH -120,
    height: 60,
    backgroundColor:'#372FCC',
    borderRadius: 40, 
    justifyContent : 'center',
  }
});

export { BtnForm };