import React, { useContext } from "react";
import { Button, Text, View } from "react-native";
import BlogContext from "../context/BlogContext";

const ShowScreen = ({ route, navigation }) => {
  const { id } = route.params;
  const { blogState } = useContext(BlogContext);
  const item = blogState.blogs.find((blog) => blog.id === id);
  return (
    <View>
      <Text>Show Screen</Text>
      <Text>{id}</Text>
      <Text>{item.title}</Text>

      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default ShowScreen;
