import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import type {RoutesSchema, RoutesType} from "../types";
import {allRoutes} from "../data/allRoutes";


const initialState: RoutesSchema = {
   allRoutes: allRoutes
};

const routesSlice = createSlice({
   name: "routes",
   initialState,
   reducers: {
      setCurrentRoute(state, action: PayloadAction<RoutesType>) {
         state.currentRoute = action.payload;
      }
   }
});

export const {actions: routesActions} = routesSlice;
export const {reducer: routesReducer} = routesSlice;
