const { combineReducers } = require("redux");
const { default: authnReducer } = require("./slice/features/authn/authnSlice");
const { configureStore } = require("@reduxjs/toolkit");

const allReducers = combineReducers({
  authn: authnReducer,
});

const store = configureStore({
  reducer: allReducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };
