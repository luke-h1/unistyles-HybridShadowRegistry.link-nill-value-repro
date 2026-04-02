import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import HomeScreen from "./screens/HomeScreen";
import ReproScreen from "./screens/ReproScreen";

export type RootStackParamList = {
  Home: undefined;
  Repro: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Unistyles Repros" }}
        />
        <Stack.Screen
          name="Repro"
          component={ReproScreen}
          options={{ title: "Repro" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
