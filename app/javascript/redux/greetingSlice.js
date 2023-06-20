import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchGreeting = createAsyncThunk(
  'greeting/fetchGreeting',
  async () => {
    const response = await fetch('/random_greeting');
    const data = await response.json();
    return data.greeting;
  }
);

const greetingSlice = createSlice({
  name: 'greeting',
  initialState: '',
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchGreeting.fulfilled, (state, action) => {
      return action.payload;
    });
  }
});

export default greetingSlice.reducer;
