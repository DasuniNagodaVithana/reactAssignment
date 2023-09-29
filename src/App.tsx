import React from 'react';



//navigation
import 'react-native-gesture-handler';
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {createDrawerNavigator} from "@react-navigation/drawer" 
 
// screens
import LockScreen from './NewHomeScreen/LockScreen';
import Homepage from './NewHomeScreen/Homepage';
import ViewPage from './NewHomeScreen/Viewpage';
import Logout from './NewHomeScreen/Logout';

export type RootStackParamList = {
  LockScreen:any;
  Homepage:any;
  Viewpage:any;
  Logout:any;
}

const Stack = createNativeStackNavigator<RootStackParamList>()
const App = () => {
  

  return (
    
    
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LockScreen">
          <Stack.Screen name="LockScreen" component={LockScreen} />
          <Stack.Screen name="Homepage" component={Homepage} />
          <Stack.Screen name="Viewpage" component={ViewPage} />
          <Stack.Screen name="Logout" component={Logout} />
        </Stack.Navigator>
      </NavigationContainer>
    );
    
  
};

export default App;

