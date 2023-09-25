import { useReducer } from "react";

export const INITIAL_STATE = {
  blogs: [
    { id: 1, title: "Blog 1" },
    { id: 2, title: "Blog 2" },
  ],
};

const blogReducer = (state, action) => {
  switch (action.type) {
    case "addBlog":
      return {
        ...state,
        blogs: [
          ...state.blogs,
          { title: action.payload.title, id: action.payload.id },
        ],
      };
    case "deleteBlog":
      const filteredBlogs = state.blogs.filter(
        (blog) => blog.id !== action.payload
      );
      return {
        ...state,
        blogs: filteredBlogs,
      };
    default:
      return state;
  }
};

const useBlogs = () => {
  const [blogState, blogDispatch] = useReducer(blogReducer, INITIAL_STATE);
  const addBlog = (title) => {
    return blogDispatch({
      type: "addBlog",
      payload: {
        title: `Blog ${blogState.blogs.length + 1}`,
        id: Math.round(Math.random() * 999, 0),
      },
    });
  };

  const deleteBlog = (id) => {
    return blogDispatch({ type: "deleteBlog", payload: id });
  };
  return { blogState, addBlog, deleteBlog };
};

export default useBlogs;
