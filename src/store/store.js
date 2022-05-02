import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export const actionTypes = {
  SetSliders: "[SetSliders] Action",
  SetCourses: "[SetCourses] Action",
  SetInfoGraphic: "[SetInfoGraphic] Action",
  SetAddedCart: "[SetAddedCart] Action",
};

const initialState = {
  sliders: [],
  courses: [],
  addedCart: [],
  infographics: [],
};

export const reducer = persistReducer(
  {
    storage,
    key: "root",
    debug: true,
    whitelist: ["sliders", "courses", "infographics","addedCart"],
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
      case actionTypes.SetInfoGraphic: {
        const infographics = action.payload.infographics;

        return { ...state, infographics };
      }
      case actionTypes.SetAddedCart: {
        const addedCart = action.payload.addedCart;

        return { ...state, addedCart };
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

  SetInfoGraphic: (infographics) => {
    return {
      type: actionTypes.SetInfoGraphic,
      payload: { infographics },
    };
  },

  SetAddedCart: (addedCart) => {
    return {
      type: actionTypes.SetAddedCart,
      payload: { addedCart },
    };
  },
};