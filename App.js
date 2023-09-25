import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IndexScreen from "./src/screens/IndexScreen";
import { Fragment } from "react";
import ShowScreen from "./src/screens/ShowScreen";
import { BlogProvider } from "./src/context/BlogContext";
import CreateScreen from "./src/screens/CreateScreen";
import { Feather } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <BlogProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={IndexScreen}
              options={({ navigation }) => ({
                headerRight: () => (
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Create")}
                  >
                    <Feather name="plus" size={30} />
                  </TouchableOpacity>
                ),
              })}
            />
            <Stack.Screen name="Show" component={ShowScreen} />
            <Stack.Screen name="Create" component={CreateScreen} />
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
