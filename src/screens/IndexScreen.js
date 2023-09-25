import React, { useContext, useEffect } from "react";
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
import { useNavigation } from "@react-navigation/native";

const IndexScreen = () => {
  const { blogState, addBlog, deleteBlog } = useContext(BlogContext);

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate("Create")}>
          <Feather name="plus" size={30} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View>
      <Text>Index Screen</Text>
      <FlatList
        data={blogState.blogs}
        renderItem={({ item }) => {
          return (
            <View style={styles.list}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Show", { id: item.id })}
              >
                <Text style={styles.title}>
                  {item.title}-{item.content} - {item.id}
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
