import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    appointments: [],
    activeCall: null
};

const consultSlice = createSlice({
    name: "consult",
    initialState,
    reducers: {
        bookAppointment: (state, action) => {
            state.appointments.push(action.payload);
        },
        startCall: (state, action) => {
            state.activeCall = action.payload; 
        },
        endCall: (state) => {
            state.activeCall = null;
        }
    }
});

export const { bookAppointment, startCall, endCall } = consultSlice.actions;
export default consultSlice.reducer;
