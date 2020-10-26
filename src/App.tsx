import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components/native';
import { StatusBar } from 'react-native';
import { theme } from '@Definitions/Styled';
import { API_URL } from '@env';

import AppContainer from '@Router';
import { I18n } from '@I18n';
import { SafeArea } from '@Styled';

const App = () => {
  useEffect(() => {
    I18n.init();
    console.log('API_URL', API_URL);
  }, []);

  return (
    <NavigationContainer>
      <StatusBar />
      <ThemeProvider theme={theme}>
        <SafeArea>
          <AppContainer />
        </SafeArea>
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
