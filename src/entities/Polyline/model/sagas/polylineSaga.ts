import {call, takeEvery, put} from "redux-saga/effects";
import axios, {AxiosResponse} from "axios";
import {RoutesType} from "@entities/Routes";
import {LatLngExpression} from "leaflet";

import {sagaActions} from "./sagasActions";
import {polylineActions} from "../slice/polylineSlice";
import {ResponseFetchPolyline} from "../types/response";

interface TypeParams {
   type: string;
   points: RoutesType
}


export function* fetchPolylineWorker(params: TypeParams) {
   const points = params.points;
   const url = `http://router.project-osrm.org/route/v1/driving/${points.point1};${points.point2};${points.point3}?overview=full`;

   try {
      const response: AxiosResponse = yield call(axios.get, url);
      const result: ResponseFetchPolyline = response.data;
      const polyline: LatLngExpression[] = [];

      result.waypoints.map(waypoint => {
         polyline.push(waypoint.location);
      });

      yield put(polylineActions.setPolyline(polyline));
   } catch (e) {
      console.log(e);
   }
}

export function* watchPolyline() {
   yield takeEvery(sagaActions.FETCH_DATA_SAGA, fetchPolylineWorker);
}
