import React from 'react';

import {
  View,
  Text,
  TextInput,
  StyleSheet
} from 'react-native';

const ModelTextInput = ({textName, value, onChangeText, ...props}) => {
  return (
    <View
      style={styles.inputContainer}>
        <Text style={styles.inputText}>{textName}</Text>
        <TextInput
          {...props}
          autoCorrect={false}
          value={value}
          onChangeText={onChangeText}
          editable
    />
    </View>
  );
};

const styles = StyleSheet.create ({
    inputContainer:{
        paddingBottom:10, 
        borderBottomColor: '#D9ECF2',
        borderBottomWidth: 1,
    },
    inputText:{
        fontSize:15,
        paddingTop:15,
        fontWeight:'bold'
    }
});

export { ModelTextInput };