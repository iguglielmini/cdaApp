import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Onboarding} from '@/pages';

const {Navigator, Screen} = createStackNavigator();

const AppRoutes = () => {
  return (
    <Navigator screenOptions={{headerShown: false}} initialRouteName="Onboarding">
      <Screen name="Onboarding" component={Onboarding} />
    </Navigator>
  );
};

export {AppRoutes};
