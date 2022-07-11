import { createSlice } from "@reduxjs/toolkit";

// Interfaces
import { IStudy, IModulo, ISubModulo, ITest } from "../interfaces";
import { AppState } from "../store";

const initialState: IStudy = {
  modulos: [],
  currentSubModulo: null,
  currentTest: null,
  userAnswers: null,
};

// Actions
interface SetModulos {
  payload: IModulo[];
}

interface SetCurrentSubModulo {
  payload: ISubModulo;
}

interface SetCurrentTest {
  payload: ITest;
}

interface SetUserAnswers {
  payload: {
    [key: string]: number;
  } | null;
}

const studySlice = createSlice({
  name: "[STUDY]",
  initialState,
  reducers: {
    setModulos: (state: IStudy, action: SetModulos) => {
      state.modulos = action.payload;
    },
    setCurrentSubModulo: (state: IStudy, action: SetCurrentSubModulo) => {
      state.currentSubModulo = action.payload;
    },
    setCurrentTest: (state: IStudy, action: SetCurrentTest) => {
      state.currentTest = action.payload;
    },
    setUserAnswers: (state: IStudy, action: SetUserAnswers) => {
      state.userAnswers = action.payload;
    },
  },
});

export { studySlice };

// Actions
export const {
  setModulos,
  setCurrentSubModulo,
  setCurrentTest,
  setUserAnswers,
} = studySlice.actions;

// Select to access to the store
export const selectStudy = (state: AppState) => state.study;

export default studySlice.reducer;
