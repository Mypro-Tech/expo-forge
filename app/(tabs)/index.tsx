import { StyleSheet } from 'react-native';
import { Appbar, Text } from 'react-native-paper';
import { ScreenWrapper } from 'react-native-screen-wrapper';

export default function HomeScreen() {
  return (
    <ScreenWrapper>
      <Appbar.Header>
        <Appbar.Content title='Title' />
      </Appbar.Header>
      <Text>Home</Text>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({});
