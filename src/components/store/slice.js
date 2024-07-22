import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  weatherData: null,
  loading: false,
  error: null
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    fetchWeatherStart: (state) => {
      state.loading = true;
      state.error = null;
    },

    fetchWeatherSuccess: (state, action) => {
      state.loading = false;
      state.weatherData = action.payload;
      state.error = null;
    },

    fetchWeatherFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }
  }
});

export const {
  fetchWeatherStart,
  fetchWeatherSuccess,
  fetchWeatherFailure
} = weatherSlice.actions;
export default weatherSlice.reducer;
