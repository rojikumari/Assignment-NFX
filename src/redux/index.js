// Redux module
import AppActions from "./actions/appActions";
import AppReducer from "./reducers/appReducer";
import Store, { persistor } from "./store";
import AppDispatcher from "./dispatchers/appDispatcher";
import ChangeNumber from "./reducers/increDecre"

export { AppActions, AppReducer, Store, persistor, AppDispatcher, ChangeNumber };
