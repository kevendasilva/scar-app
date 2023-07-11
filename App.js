/* eslint-disable prettier/prettier */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Clients } from './pages/Clients';
import { DoorLockForm } from './pages/DoorLockForm';
import { DoorLockPage } from './pages/DoorLockPage';
import { EditUser } from './pages/EditUser';
import { Index } from './pages/Index';
import { HomePage } from './pages/HomePage';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { Updates } from './pages/Updates';

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
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen
          name="Index"
          component={Index}
          initialParams={{ userName: 'Mr. Akira' }}
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
        <Stack.Screen name="Updates" component={Updates} />
        <Stack.Screen name="Clients" component={Clients} />
        <Stack.Screen name="DoorLockForm" component={DoorLockForm} />
        <Stack.Screen name="EditUser" component={EditUser} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
