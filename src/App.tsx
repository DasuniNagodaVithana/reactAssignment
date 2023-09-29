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
  Loogout:any;
}

const Stack = createNativeStackNavigator<RootStackParamList>()
const App = () => {
  // Your app code here

  return (
    
    <Homepage /> 
    
  );
};

export default App;

