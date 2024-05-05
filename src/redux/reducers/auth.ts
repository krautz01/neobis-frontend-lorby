import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userProfileAPI, logInAPI } from "../../api/api.ts";

interface IUser {
  isAuth: boolean;
  accessToken: string;
  refreshToken: string;
}

interface ILogIn {
  username: string;
  password: string;
}

const initialState: IUser = {
  isAuth: false,
  accessToken: "",
  refreshToken: "",
};

export const fetchLogIn = createAsyncThunk(
  "userData/logIn",
  async (data: ILogIn, thunkAPI) => {
    const response = await logInAPI(data);
    return response.data;
  }
);

const authSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    logOut(state) {
      state.isAuth = false;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchLogIn.fulfilled, (state, action) => {
      // Add user to the state array
      if (action.payload.accessToken) {
        state.accessToken = action.payload.accessToken;
      }
      if (action.payload.refreshToken) {
        state.refreshToken = action.payload.refreshToken;
      }
      state.isAuth = true;
    });
  },
});

export const { logOut } = authSlice.actions;
export default authSlice.reducer;
