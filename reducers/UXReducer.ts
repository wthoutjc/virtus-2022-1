import { createSlice } from "@reduxjs/toolkit";

// Interfaces
import { IUx } from "../interfaces";
import { AppState } from "../store";

const initialState: IUx = {
  clicks: 0,
  sidebar: {
    open: false,
  },
  landingPosition: {
    ludicas: 0,
    proyecto: 0,
    modulos: 0,
  },
};

interface LandingPayload {
  ludicas: number;
  proyecto: number;
  modulos: number;
}

const uxSlice = createSlice({
  name: "[UX]",
  initialState,
  reducers: {
    incrementClicks: (state: IUx) => {
      state.clicks += 1;
    },
    turnOffRender: (state: IUx) => {
      state.clicks = 0;
    },
    openSidebar: (state: IUx) => {
      state.sidebar = {
        ...state.sidebar,
        open: true,
      };
    },
    closeSidebar: (state: IUx) => {
      state.sidebar = {
        ...state.sidebar,
        open: false,
      };
    },
    setLandingPosition: (state: IUx, action: { payload: LandingPayload }) => {
      state.landingPosition.ludicas = action.payload.ludicas;
      state.landingPosition.modulos = action.payload.modulos;
      state.landingPosition.proyecto = action.payload.proyecto;
    },
  },
});

export { uxSlice };

// Actions
export const {
  incrementClicks,
  turnOffRender,
  openSidebar,
  closeSidebar,
  setLandingPosition,
} = uxSlice.actions;

// Selector to access to the store
export const selectUX = (state: AppState) => state.auth;

export default uxSlice.reducer;
