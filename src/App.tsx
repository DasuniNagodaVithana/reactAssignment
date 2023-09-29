import React from 'react';



//navigation
import 'react-native-gesture-handler';
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {createDrawerNavigator} from "@react-navigation/drawer" 
 
// screens
import LockScreen from './NewHomeScreen/LockScreen';
import ViewPage from './NewHomeScreen/Viewpage';
import Logout from './NewHomeScreen/Logout';

export type RootStackParamList = {
  LockScreen:undefined;
  Viewpage:undefined;
  Logout:undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>();
function App() {

  return (
    
    
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LockScreen">
          <Stack.Screen name="LockScreen" component={LockScreen} />
          <Stack.Screen name="Viewpage" component={ViewPage} />
          <Stack.Screen name="Logout" component={Logout} />
        </Stack.Navigator>
      </NavigationContainer>
    );
    
  
};

export default App;

