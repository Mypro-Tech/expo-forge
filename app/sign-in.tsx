import { AppTextInput } from '@/components/text-input';
import CommonStyles from '@/styles/common-styles';
import { Link, Stack } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { Button, Text, TextInput, useTheme } from 'react-native-paper';

export default function SignInScreen() {
  const {
    colors: { background },
  } = useTheme();
  return (
    <>
      <View style={[styles.container, { backgroundColor: background }]}>
        <Text variant='headlineMedium'>Login</Text>
        <View style={CommonStyles.marginTop_5} />
        <AppTextInput label={'Email'} />
        <View style={CommonStyles.marginTop_3} />
        <AppTextInput label={'Password'} />
        <View style={CommonStyles.marginTop_5} />
        <Button mode='contained'>Sign in</Button>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
