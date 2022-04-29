import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export const actionTypes = {
  SetSliders: "[SetSliders] Action",
  SetCourses: "[SetCourses] Action",
};

const initialState = {
  sliders: [],
  courses: [],
};

export const reducer = persistReducer(
  {
    storage,
    key: "root",
    debug: true,
    whitelist: ["sliders", "courses"],
  },
  (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.SetSliders: {
        const sliders = action.payload.sliders;

        return { ...state, sliders };
      }
      case actionTypes.SetCourses: {
        const courses = action.payload.courses;

        return { ...state, courses };
      }

      default:
        return state;
    }
  }
);

export const Actions = {
  setSliders: (sliders) => {
    return {
      type: actionTypes.SetSliders,
      payload: { sliders },
    };
  },

  SetCourses: (courses) => {
    return {
      type: actionTypes.SetCourses,
      payload: { courses },
    };
  },
};
