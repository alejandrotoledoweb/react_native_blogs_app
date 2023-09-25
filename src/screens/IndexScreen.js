import React, { useContext } from "react";
import { Button, FlatList, Text, View } from "react-native";
import BlogContext from "../context/BlogContext";

const IndexScreen = ({ navigation }) => {
  const { blogState, blogDispatch } = useContext(BlogContext);
  return (
    <View>
      <Text>Index Screen</Text>
      {/* <Text>{value.number}</Text> */}
      <Button
        onPress={() =>
          blogDispatch({
            type: "addBlog",
            payload: { title: `Blog ${blogState.blogs.length + 1}` },
          })
        }
        title="Add blog"
      />
      <FlatList
        data={blogState.blogs}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
      <Button title="Go to Show" onPress={() => navigation.navigate("Show")} />
    </View>
  );
};

export default IndexScreen;
