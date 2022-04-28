import React from "react";


export const TYPES = {
    SET_SLIDERS : "SET_SLIDERS",
    aaa : "aaa",
}
const initialState = {
  sliders: [],
};

export const Store = React.createContext(initialState);

function reducer(state, action) {
  console.log(action);
  
  switch (action.type) {
    case TYPES.SET_SLIDERS:
      return {
        ...state,
        sliders: action.sliders,
      };

    default:
      return state;
  }
}

export const store = {
  isReady: false,
  dispatch: () => {
    console.error("store is NOT ready");
  },
};

export function StoreProvider(props) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };
  if (!store.isReady) {
    store.isReady = true;
    store.dispatch = (params) => dispatch(params);
    Object.freeze(store);
  }
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
