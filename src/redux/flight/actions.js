/** @format */

import { CREATEFLIGHT, REMOVEFLIGHT } from "./actionTypes";

export const createFlight = (payload) => {
  return {
    type: CREATEFLIGHT,
    payload,
  };
};

export const removeFlight = (id) => {
  return {
    type: REMOVEFLIGHT,
    id: id,
  };
};
