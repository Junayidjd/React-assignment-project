import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Local storage as the storage mechanism
import courseReducer from "../features/courseSlice"; // Your course slice

// Redux Persist Configuration
const persistConfig = {
  key: "root", // key for the persisted data
  storage, // storage method (localStorage in this case)
  whitelist: ['courses'], // Only persist the courses state (optional)
};

// Wrap the course reducer with persistReducer
const persistedReducer = persistReducer(persistConfig, courseReducer);

// Create Redux store with the persisted reducer
const store = configureStore({
  reducer: {
    courses: persistedReducer, // Wrap the courses reducer with persistedReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore specific actions related to redux-persist
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});

// Create a persistor for managing the persistence
export const persistor = persistStore(store);

export default store;
