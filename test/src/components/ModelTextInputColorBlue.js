import React from 'react';

import {
  View,
  Text,
  TextInput,
  StyleSheet
} from 'react-native';

const ModelTextInputColorBlue = ({textName, ...props}) => {
  return (
    <View
      style={styles.inputContainer}>
        <Text style={styles.inputText}>{textName}</Text>
        <TextInput
          {...props}
          editable
          maxLength={40}
          multiline
          numberOfLines={4} />
    </View>
  );
};

const styles = StyleSheet.create ({
    inputContainer:{
        paddingBottom:10,
        paddingTop:10, 
        borderBottomColor: '#D9ECF2',
        borderBottomWidth: 1,
    },
    inputText:{
        fontSize:15,
        paddingTop:15,
        fontWeight:'bold',
        color:'#372FCC',
        paddingBottom:5
    }
});

export { ModelTextInputColorBlue };