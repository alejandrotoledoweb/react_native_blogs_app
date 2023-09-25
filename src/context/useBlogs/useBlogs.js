import { useReducer } from "react";

export const INITIAL_STATE = {
  blogs: [{ title: "Blog 1" }, { title: "Blog 2" }],
};

const blogReducer = (state, action) => {
  switch (action.type) {
    case "addBlog":
      return {
        ...state,
        blogs: [...state.blogs, { title: action.payload.title }],
      };
    default:
      return state;
  }
};

const useBlogs = () => {
  const [blogState, blogDispatch] = useReducer(blogReducer, INITIAL_STATE);
  return { blogState, blogDispatch };
};

export default useBlogs;
