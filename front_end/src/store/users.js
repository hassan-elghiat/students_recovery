import { createSlice } from "@reduxjs/toolkit";
import * as _ from "lodash";

const initialState = {
  all: [],
  waiting: [],
  delivered: [],
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setAll: (state, action) => {
      state.all = action.payload;
    },
    addWaiting: (state, action) => {
      state.waiting = _.union(
        state.waiting,
        action.payload?.length ? action.payload : _.sample(state.all)
      );
    },
    addDelivered: (state, action) => {
      state.delivered = _.union(
        state.delivered,
        action.payload?.length ? action.payload : _.sample(state.waiting)
      );
    },
    resetAll: (state) => {
      state.all = [];
      state.delivered = [];
      state.waiting = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAll, addWaiting, addDelivered, resetAll } =
  usersSlice.actions;

export default usersSlice.reducer;
