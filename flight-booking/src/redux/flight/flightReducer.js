/** @format */

import { REMOVEFLIGHT, CREATEFLIGHT } from "./actionTypes";

const flightReducer = (state = [], action) => {
  switch (action.type) {
    case CREATEFLIGHT:
      const newState = [...state];
      if (newState.length < 3) {
        newState.push(action.payload);
      }
      return newState;
    case REMOVEFLIGHT:
      return [...state].filter((flight) => flight?.id !== action?.id);
    default:
      return state;
  }
};

export default flightReducer;
