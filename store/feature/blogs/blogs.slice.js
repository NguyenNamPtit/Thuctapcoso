import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  currentPage: 0,
  loading: true,
};

const PAGE_SIZE = 6;

export const loadBlogs = createAsyncThunk(
  "blogs/loadBlogs",
  async (args, thunkApi) => {
    const response = await fetch("https://tfruitapi.vercel.app/blog");
    const data = await response.json();

    return data;
  }
);

const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    pageChanged: (state, action) => {
      return { ...state, currentPage: action.payload };
    },
  },

  extraReducers: (builder) => {
    builder.addCase(loadBlogs.fulfilled, (state, action) => {
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    });
  },
});

export const blogsReducer = blogsSlice.reducer;
export const { pageChanged } = blogsSlice.actions;

export const selectAllBlogs = (state) => state.blogs.data;
export const selectBlogsById = (blogId) => (state) =>
  state.blogs.data.find((blog) => blog.id == blogId);

export const selectBlogsList = (state) => {
  const total = state.blogs.data.length;
  const totalPage = Math.ceil(total / PAGE_SIZE);

  const blogsByPage = state.blogs.data.slice(
    state.blogs.currentPage * PAGE_SIZE,
    (state.blogs.currentPage + 1) * PAGE_SIZE
  );

  return {
    blogs: blogsByPage,
    currentPage: state.blogs.currentPage,
    totalPage,
    pageChanged,
  };
};
