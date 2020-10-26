import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Apollo } from '@Services';
import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components/native';
import { StatusBar } from 'react-native';
import { ApolloProvider } from '@apollo/react-hooks';
import { theme } from '@Definitions/Styled';

import AppContainer from '@Router';
import { I18n } from '@I18n';
import { SafeArea } from '@Styled';

const App = () => {
  useEffect(() => {
    I18n.init();
  }, []);

  return (
    <NavigationContainer>
      <StatusBar />
      <ApolloProvider client={Apollo.createClient()}>
        <ThemeProvider theme={theme}>
          <SafeArea>
            <AppContainer />
          </SafeArea>
        </ThemeProvider>
      </ApolloProvider>
    </NavigationContainer>
  );
};

export default App;
