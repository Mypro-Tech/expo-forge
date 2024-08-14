import { useSession } from '@/auth/ctx';
import CommonStyles from '@/styles/common-styles';
import { StyleSheet, View } from 'react-native';
import { Appbar, Button } from 'react-native-paper';
import { ScreenWrapper } from 'react-native-screen-wrapper';

export default function HomeScreen() {
  const { removeSessionToken } = useSession();
  return (
    <ScreenWrapper>
      <Appbar.Header>
        <Appbar.Content title='Home' />
      </Appbar.Header>
      <View style={CommonStyles.paddingHorizontal_5}>
        <Button mode='outlined' onPress={removeSessionToken}>
          Logout
        </Button>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({});
