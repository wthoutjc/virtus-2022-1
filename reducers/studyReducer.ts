import { createSlice } from "@reduxjs/toolkit";

// Interfaces
import { IStudy, IModulo, ISubModulo, ITest } from "../interfaces";
import { AppState } from "../store";

const initialState: IStudy = {
  modulos: [],
  currentModulo: null,
  currentSubModulo: null,
  currentTest: null,
};

// Actions
interface SetModulos {
  payload: IModulo[];
}

interface SetCurrentModulo {
  payload: IModulo;
}

interface SetCurrentSubModulo {
  payload: ISubModulo;
}

interface SetCurrentTest {
  payload: ITest;
}

const studySlice = createSlice({
  name: "[STUDY]",
  initialState,
  reducers: {
    setModulos: (state: IStudy, action: SetModulos) => {
      state.modulos = action.payload;
    },
    setCurrentModulo: (state: IStudy, action: SetCurrentModulo) => {
      state.currentModulo = action.payload;
    },
    setCurrentSubModulo: (state: IStudy, action: SetCurrentSubModulo) => {
      state.currentSubModulo = action.payload;
    },
    setCurrentTest: (state: IStudy, action: SetCurrentTest) => {
      state.currentTest = action.payload;
    },
  },
});

export { studySlice };

// Actions
export const {
  setModulos,
  setCurrentModulo,
  setCurrentSubModulo,
  setCurrentTest,
} = studySlice.actions;

// Select to access to the store
export const selectStudy = (state: AppState) => state.study;

export default studySlice.reducer;
