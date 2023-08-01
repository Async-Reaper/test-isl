import {configureStore, type ReducersMapObject} from "@reduxjs/toolkit";
import {type StateSchema} from "./StateSchema";
import {routesReducer} from "@entities/Routes";
import createSagaMiddleware from "redux-saga";
import {polylineReducer, watchPolyline} from "@entities/Polyline";
import {all} from "redux-saga/effects";

export function createReduxStore(
) {
   const rootReducers: ReducersMapObject<StateSchema> = {
      routes: routesReducer,
      polyline: polylineReducer
   };

   const sagaMiddleware = createSagaMiddleware();

   function* rootWatchers() {
      yield all([watchPolyline()]);
   }

   const store = configureStore({
      reducer: rootReducers,
      middleware: getDefaultMiddleware => getDefaultMiddleware().concat(sagaMiddleware)
   });

   sagaMiddleware.run(rootWatchers);

   return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
