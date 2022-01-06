import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import AppReducer from "./reducers/appReducer";
import ChangeNumber from "@redux/reducers/increDecre";

const PersistConfig = {
  key: "root",
  storage,
  whitelist: ["app"]
};

const AllReducer = {
  app: AppReducer,
  ChangeNumber
};

const rootReducer = combineReducers(AllReducer);
const persistedReducer = persistReducer(PersistConfig, rootReducer);

const store = createStore(persistedReducer);
export const persistor = persistStore(store);
export default store;
