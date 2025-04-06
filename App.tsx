import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import 'react-native-reanimated';
import TabNavigator from './navigation/TabNavigator';
import MainNavigator from './navigation/MainNavigator';
import { WordProvider } from './store/context/WordContext';


export default function App() {
  return (
    <WordProvider>
      <NavigationContainer>
        <MainNavigator></MainNavigator>
      </NavigationContainer>
    </WordProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
