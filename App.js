import Screen2 from "./screen/screen2";
import Screen1 from "./screen/screen1";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen1" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Screen1" component={Screen1}/>
        <Stack.Screen name="Screen2" component={Screen2}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;