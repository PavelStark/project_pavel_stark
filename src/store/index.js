import { createStore, applyMiddleware, combineReducers } from "redux";
import { productsReducer } from "./reducers/productsReducer";
import { categoriesReducer } from "./reducers/categoriesReducer";
import { singleProductReducer } from "./reducers/singleProductReducer";
import { cartReducer } from "./reducers/cartReducer";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import { thunk } from "redux-thunk";

// Корневой редьюсер
const rootReducer = combineReducers({
  products: productsReducer,
  categories: categoriesReducer,
  product: singleProductReducer,
  cart: cartReducer,
});

// Конфигурация для redux-persist
const persistConfig = {
  key: "localStore",
  storage,
};

// Создание персистентного редьюсера
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Дополнительный аргумент для Redux Thunk

// Создание стора Redux с применением middleware Redux Thunk и передачей дополнительного аргумента
const store = createStore(
  persistedReducer,
  applyMiddleware(thunk) // Применяем middleware для асинхронных действий
);

// Создание хранилища персистентности
const persistor = persistStore(store);

export { store, persistor };
