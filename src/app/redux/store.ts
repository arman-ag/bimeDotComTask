import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { userSlice } from './features/personalInfo/infoSlice';
const rootReducer = combineReducers({
  personalInfo: userSlice.reducer,
});
export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
