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
          {
            title: action.payload.title,
            content: action.payload.content,
            id: action.payload.id,
          },
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
    case "editBlog":
      return {
        ...state,
        blogs: state.blogs.map((blog) =>
          blog.id === action.payload.id
            ? {
                ...blog,
                title: action.payload.title,
                content: action.payload.content,
              }
            : blog
        ),
      };
    default:
      return state;
  }
};

const useBlogs = () => {
  const [blogState, blogDispatch] = useReducer(blogReducer, INITIAL_STATE);
  const addBlog = (title, content) => {
    return blogDispatch({
      type: "addBlog",
      payload: {
        title: title,
        content: content,
        id: Math.round(Math.random() * 999, 0),
      },
    });
  };

  const deleteBlog = (id) => {
    return blogDispatch({ type: "deleteBlog", payload: id });
  };

  const editBlog = (id, title, content) => {
    return blogDispatch({
      type: "editBlog",
      payload: { id, title, content },
    });
  };
  return { blogState, addBlog, deleteBlog, editBlog };
};

export default useBlogs;
