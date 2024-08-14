import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, TextInput, TextInputProps, useTheme } from 'react-native-paper';

type Props = Omit<TextInputProps, 'error'> & { errorText?: string };
export const AppTextInput = (props: Props) => {
  const { errorText, ...rest } = props;
  const {
    colors: { error },
  } = useTheme();
  return (
    <View style={styles.container}>
      <TextInput {...rest} error={Boolean(errorText?.length)} />
      <Text variant='bodySmall' style={{ color: error }}>
        {errorText}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
  },
});
