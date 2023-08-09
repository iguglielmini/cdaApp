import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {LoginPage} from '@/pages';

const {Navigator, Screen} = createStackNavigator();

const HomeRoutes = () => {
  return (
    <Navigator screenOptions={{headerShown: false}} initialRouteName="Login">
      <Screen name="Login" component={LoginPage} />
    </Navigator>
  );
};

export {HomeRoutes};
