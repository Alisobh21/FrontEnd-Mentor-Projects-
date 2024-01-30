import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  check: true,
  error: "",
  loading: true,
  singleLaod: true,
  single: null,
  countries: null,
};

export const getCountries = createAsyncThunk(
  "country/getcountries",
  async (_, thunkApi) => {
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      const data = response.data;
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const getCountry = createAsyncThunk(
  "country/getcountry",
  async (name, thunkApi) => {
    try {
      const response = await axios.get(
        `https://restcountries.com/v3.1/name/${name}`
      );
      const data = response.data;
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const filterCountry = createAsyncThunk(
  "country/filterCountry",
  async (region, thunkApi) => {
    try {
      const response = await axios.get(
        `https://restcountries.com/v3.1/region/${region}`
      );
      const data = response.data;
      return data;
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }
);

export const getCountryPage = createAsyncThunk(
  "country/getCountryPage",
  async (id, thunkApi) => {
    try {
      const response = await axios.get(
        `https://restcountries.com/v3.1/name/${id}?fullText=true`
      );
      const data = response?.data;
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const CountrySlicer = createSlice({
  name: "country",
  initialState,
  reducers: {
    DarkMode: (state) => {
      state.check = !state.check;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getCountries.pending, (state) => {
        state.loading = false;
      })
      .addCase(getCountries.fulfilled, (state, action) => {
        state.countries = action.payload;
      })
      .addCase(getCountries.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(getCountry.pending, (state, action) => {
        state.loading = false;
      })
      .addCase(getCountry.fulfilled, (state, action) => {
        state.countries = action.payload;
      })
      .addCase(getCountry.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(filterCountry.pending, (state, action) => {
        state.loading = false;
      })
      .addCase(filterCountry.fulfilled, (state, action) => {
        state.countries = action.payload;
      })
      .addCase(filterCountry.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(getCountryPage.pending, (state, action) => {
        state.singleLaod = false;
      })
      .addCase(getCountryPage.fulfilled, (state, action) => {
        state.single = action.payload;
      })
      .addCase(getCountryPage.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const { DarkMode } = CountrySlicer.actions;

export default CountrySlicer.reducer;
