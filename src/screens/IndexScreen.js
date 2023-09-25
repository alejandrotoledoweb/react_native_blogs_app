import React, { useContext } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import BlogContext from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

const IndexScreen = ({ navigation }) => {
  const { blogState, addBlog, deleteBlog } = useContext(BlogContext);
  return (
    <View>
      <Text>Index Screen</Text>
      {/* <Button onPress={() => navigation.navigate("Create")} title="Create" /> */}
      <Button onPress={() => addBlog()} title="Add blog" />
      <FlatList
        data={blogState.blogs}
        renderItem={({ item }) => {
          return (
            <View style={styles.list}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Show", { id: item.id })}
              >
                <Text style={styles.title}>
                  {item.title} - {item.id}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  deleteBlog(item.id);
                }}
              >
                <Feather style={styles.button} name="trash" />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
    paddingBottom: 10,
    borderTopWidth: 1,
    borderColor: "gray",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
  },
  button: {
    fontSize: 24,
  },
});

export default IndexScreen;
