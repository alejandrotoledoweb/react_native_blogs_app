import React, { useContext } from "react";
import { Button, Text, View } from "react-native";
import BlogContext from "../context/BlogContext";

const CreateScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Create Screen</Text>

      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default CreateScreen;
