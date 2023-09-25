import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IndexScreen from "./src/screens/IndexScreen";
import { Fragment } from "react";
import ShowScreen from "./src/screens/ShowScreen";
import { BlogProvider } from "./src/context/BlogContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <BlogProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={IndexScreen} />
            <Stack.Screen name="Show" component={ShowScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </BlogProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
