import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput, TextInputProps } from 'react-native-paper';

export const AppTextInput = (props: TextInputProps) => {
  return (
    <View style={styles.container}>
      <TextInput {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
  },
});
