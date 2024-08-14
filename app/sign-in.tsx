import { useLoginMutation } from '@/api/use-login-mutation';
import { AppTextInput } from '@/components/text-input';
import CommonStyles from '@/styles/common-styles';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text, useTheme } from 'react-native-paper';

export default function SignInScreen() {
  const {
    colors: { background },
  } = useTheme();
  const { mutate: loginMutate, isPending, data } = useLoginMutation();

  const [email, setEmail] = useState('eve.holt@reqres.in');
  const [password, setPassword] = useState('cityslicka');

  const onPressLogin = async () => {
    loginMutate(
      { email, password },
      {
        onSettled: (data, error, variables, context) => {
          if (error) {
            console.log({ error });
          } else {
            console.log(data?.data);
          }
        },
      }
    );
  };


  return (
    <View style={[styles.container, { backgroundColor: background }]}>
      <Text variant='headlineMedium'>Login</Text>
      <View style={CommonStyles.marginTop_5} />
      <AppTextInput label={'Email*'} value={email} onChangeText={setEmail} />
      <View style={CommonStyles.marginTop_3} />
      <AppTextInput
        label={'Password*'}
        value={password}
        onChangeText={setPassword}
      />
      <View style={CommonStyles.marginTop_5} />
      <Button mode='contained' onPress={onPressLogin} loading={isPending}>
        Sign in
      </Button>
    </View>
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
