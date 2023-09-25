import React from "react";
import { Button, Text, View } from "react-native";

const ShowScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Show Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default ShowScreen;
