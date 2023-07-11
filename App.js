/* eslint-disable prettier/prettier */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Clients } from './pages/Clients';
import { SignIn } from './pages/SignIn';
import { Homepage } from './pages/Homepage';
import { SignUp } from './pages/SignUp';
import { Updates } from './pages/Updates';

import { Index } from './pages/Index';
import { DoorLockPage } from './pages/DoorLockPage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer
      theme={{
        colors: {
          background: '#FFFFFF',
          card: '#FFFFFF',
        },
      }}
    >
      <Stack.Navigator>
        <Stack.Screen name="Homepage" component={Homepage} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen
          name="Clients"
          component={Clients}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Updates"
          component={Updates}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Index"
          component={Index}
          initialParams={{ userName: 'Dr. Evil' }}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="DoorLockPage"
          component={DoorLockPage}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
