import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Input = ({ lable, value, onChangeText, placeholder, secureTextEntry, multiline, style, editable, numberOfLines, keyboardType }) => (
  <View style={styles.container}>
    <Text>{lable}</Text>
    <TextInput
      style={[{ height: 40 }, style]}
      autoCapitalize={'none'}
      secureTextEntry={secureTextEntry}
      value={value}
      onChangeText={onChangeText}
      autoCorrect={false}
      multiline={multiline}
      editable={editable}
      numberOfLines={numberOfLines}
      placeholder={placeholder}
      keyboardType={keyboardType}
      underlineColorAndroid={'transparent'}
    />
  </View>
);

const styles = {
  container: {
    padding: 8,
    paddingBottom: 0,
    borderBottomWidth: 1,
    borderColor: 'gray'
  },

};

export { Input };
