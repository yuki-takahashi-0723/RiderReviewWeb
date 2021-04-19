import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";
import { auth } from "../../firebaseConfig";

export interface UserState {
  userData: {
    uid: string;
    displayName: string;
    email: string | undefined | null;
  };
  isSignIn: boolean;
  modal: boolean;
}

const initialState: UserState = {
  userData: { uid: "", displayName: "", email: "" },
  isSignIn: false,
  modal: false,
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    AuthUser: (state, action) => {
      state.userData = {
        uid: action.payload.uid,
        displayName: action.payload.name,
        email: action.payload.email,
      };
      state.isSignIn = true;
    },
    ModalContorol: (state) => {
      state.modal = !state.modal;
    },
    SignOutAction: (state) => {
      auth.signOut();
      state.userData = initialState.userData;
      state.isSignIn = initialState.isSignIn;
      state.modal = initialState.modal;
    },
  },
});

export const { AuthUser, ModalContorol, SignOutAction } = UserSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectUser = (state: RootState): UserState => state.user;

export default UserSlice.reducer;
