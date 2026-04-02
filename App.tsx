import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import ReproScreen from "./screens/ReproScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator>
        <Stack.Screen
          name="Repro"
          component={ReproScreen}
          options={{ title: "Repro" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
