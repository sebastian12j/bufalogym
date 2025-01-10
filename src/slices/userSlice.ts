import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  photoURL: string;
  email: string;
  displayName: string;
  isLoggedIn: boolean;
}

const initialState: UserState = {
  email: '',
  displayName: '',
  isLoggedIn: false,
  photoURL: ''
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ email: string; displayName: string; photoURL: string }>) => {
      state.email = action.payload.email;
      state.displayName = action.payload.displayName;
      state.isLoggedIn = true;
      state.photoURL = action.payload.photoURL;
    },
    setPhotoURL: (state, action: PayloadAction<string>) => {
      state.photoURL = action.payload;
    },
    logout: (state) => {
      state.email = '';
      state.displayName = '';
      state.isLoggedIn = false;
      state.photoURL = '';
    },
  },
});

export const { setUser, setPhotoURL, logout } = userSlice.actions;
export default userSlice.reducer;


