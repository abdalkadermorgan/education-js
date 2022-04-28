import { Action } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export const actionTypes = {
  SetSliders: "[SetSliders] Action",
};

const initialState = {
  sliders: [],
};

export const reducer = persistReducer(
  {
    storage,
    key: "root",
    debug: true,

    // whitelist: ["user", "accessToken"],
  },
  (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.SetSliders: {
        const sliders = action.payload?.sliders;

        return { ...state, sliders };
      }

      default:
        return state;
    }
  }
);

export const Actions = {
  setSliders: (silders) => {
    return {
      type: actionTypes.SetSliders,
      payload: { silders },
    };
  },
};
