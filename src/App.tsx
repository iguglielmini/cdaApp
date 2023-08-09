import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import {ThemeProvider} from 'styled-components/native';

import Routes from '@/routes';
import {theme} from '@/styles';
import {AuthProvider} from '@/hooks';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" backgroundColor="#303030" />
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </ThemeProvider>
    </SafeAreaView>
  );
};

export default App;
