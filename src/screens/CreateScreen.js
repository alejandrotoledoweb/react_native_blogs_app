import React, { useContext, useState, useEffect } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import BlogContext from "../context/BlogContext";

const CreateScreen = ({ navigation, route }) => {
  const { blogState, addBlog, editBlog } = useContext(BlogContext);
  const blogPostId = route.params?.id; // Get blog post id from route params
  // const navigation = useNavigation();

  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  const setData = (text, value) => {
    console.log(text, value);
    setFormData((current) => ({ ...current, [text]: value }));
  };

  // Load existing blog post data if editing
  useEffect(() => {
    if (blogPostId) {
      const blogPost = blogState.blogs.find((blog) => blog.id === blogPostId);
      console.log(blogPost.title);
      if (blogPost) {
        setFormData({ title: blogPost.title, content: blogPost.content });
      }
    }
    navigation.setOptions({
      title: blogPostId ? "Edit Item" : "Create Item",
    });
  }, [blogPostId]);

  const submitForm = () => {
    if (blogPostId) {
      editBlog(blogPostId, formData.title, formData.content);
    } else {
      addBlog(formData.title, formData.content);
    }
    navigation.navigate("Home");
  };

  return (
    <View>
      <Text>{blogPostId ? "Edit" : "Create"} Screen</Text>
      <Text style={styles.titles}>Enter Title:</Text>
      <TextInput
        style={styles.input}
        value={formData.title}
        onChangeText={(text) => setData("title", text)}
      />
      <Text style={styles.titles}>Enter Content:</Text>
      <TextInput
        style={styles.input}
        value={formData.content}
        onChangeText={(text) => setData("content", text)}
      />
      <Button
        title={blogPostId ? "Save Blog Post" : "Add Blog Post"}
        onPress={submitForm}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "black",
    marginHorizontal: 15,
    marginBottom: 15,
    marginTop: 5,
    padding: 15,
    fontSize: 15,
  },
  titles: {
    fontSize: 20,
    marginLeft: 15,
    marginTop: 15,
  },
});

export default CreateScreen;
