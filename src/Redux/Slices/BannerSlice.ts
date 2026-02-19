import { Banner } from "@/interfaces/movie";
import MovieAPI from "@/Services/MovieApi/MovieAPI";
import { axiosClient } from "@/Utils/Http/AxiosClient";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface BannerState {
  banners: Banner[];
  isLoading: boolean;
  error?: string;
}

const initialState: BannerState = {
  banners: [],
  isLoading: false,
  error: "",
};

export const getBanners = createAsyncThunk<Banner[], void, { rejectValue: string }>(
  "home/banner/getBanners",
  async (_, { rejectWithValue }) => {
    const { data } = await MovieAPI.getBanners();
    if (typeof data.content === "string") {
      return rejectWithValue(data.content);
    }
    return data.content;
  }
);

const bannerSlice = createSlice({
  name: "home/banner",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getBanners.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getBanners.fulfilled, (state, { payload }) => {
      state.banners = payload;
      state.isLoading = false;
    });
    builder.addCase(getBanners.rejected, (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    });
  },
});
export default bannerSlice;
