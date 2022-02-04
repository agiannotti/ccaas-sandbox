import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { pokemonApi } from '../services/pokemon'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {[pokemonApi.reducerPath]: pokemonApi.reducer,},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

setupListeners(store.dispatch)
