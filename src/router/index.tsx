import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { theme } from '@Definitions/Styled';
import Home from '@Scenes/Home';

const Stack = createStackNavigator();

const AppContainer: React.ForwardRefRenderFunction<any> = () => {
  return (
    <Stack.Navigator initialRouteName={'home'}>
      <Stack.Screen
        options={{
          title: 'Home',
          header: () => null,
          headerTintColor: '#fff',
        }}
        name="home"
        component={Home}
      />
    </Stack.Navigator>
  );
};

export default AppContainer;
