import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {LatLngExpression} from "leaflet";
import {RoutesType} from "@entities/Routes";
import {PolylineSchema} from "../types";
import {sagaActions} from "../sagas/sagasActions";

const initialState: PolylineSchema = {
   isLoading: false,
   error: "",
};

const polylineSlice = createSlice({
   name: "polyline",
   initialState,
   reducers: {
      setPolyline (state, action: PayloadAction<LatLngExpression[]>) {
         state.data = action.payload;
      }
   },
});

export const fetchPolyline = (points: RoutesType) => ({ type: sagaActions.FETCH_DATA_SAGA, points });
export const {actions: polylineActions} = polylineSlice;
export const {reducer: polylineReducer} = polylineSlice;
