import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  appointment: null,
};

const consultSlice = createSlice({
  name: "consult",
  initialState,
  reducers: {
    bookAppointment: (state, action) => {
      state.appointment = action.payload;
    },
    resetAppointment: (state) => {
      state.appointment = null;
    },
  },
});

export const { bookAppointment, resetAppointment } = consultSlice.actions;

export default consultSlice.reducer;
