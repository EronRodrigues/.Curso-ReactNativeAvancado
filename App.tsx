import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import { SignInScreen } from './src/screens/SignInScreen';
import { Provider as PaperProvider } from 'react-native-paper';
import { theme } from './src/themes';
import { HomeScreen } from './src/screens/HomeScreen';
import { TodoProvider } from './src/context/TodoContext';

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar />
        <TodoProvider>
          <HomeScreen />
          {/*<SignInScreen />*/}
        </TodoProvider>
      </SafeAreaView>
    </PaperProvider>
  );
}