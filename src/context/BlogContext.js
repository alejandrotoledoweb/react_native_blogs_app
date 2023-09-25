import React, { useReducer, useState } from "react";
import useBlogs, { INITIAL_STATE as InitialState } from "./useBlogs/useBlogs";

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  const { blogState, blogDispatch, addBlog, deleteBlog, editBlog } = useBlogs();

  const store = {
    blogState,
    addBlog,
    deleteBlog,
    editBlog,
  };

  return <BlogContext.Provider value={store}>{children}</BlogContext.Provider>;
};

export default BlogContext;
