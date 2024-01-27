import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  selectedPost: null,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload.posts;
    },
    selectPost: (state, action) => {
      state.selectedPost = action.payload.post;
    },
    clearSelectedPost: (state) => {
      state.selectedPost = null;
    },
  },
});

export const { setPosts, selectPost, clearSelectedPost } = postSlice.actions;

export default postSlice.reducer;
