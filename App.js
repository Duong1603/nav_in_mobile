// In App.js in a new project

import * as React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from './src/navigation/BottomTabs';

const Stack = createNativeStackNavigator();

function App()
{
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ navigation }) =>
        {
          return {
            animation: 'fade_from_bottom',
            headerLeft: () =>
            {
              return (
                <TouchableOpacity
                  onPress={() =>
                  {
                    navigation.goBack();
                  }}>
                  <Text>Back</Text>
                </TouchableOpacity>
              );
            },
          };
        }}>

        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
