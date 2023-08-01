import {LatLngExpression} from "leaflet";

export interface ResponseFetchPolyline {
   code: Code;
   routes: any[];
   waypoints: WaypointsType[];
}

type Code = "Ok"
| "InvalidUrl"
| "InvalidService"
| "InvalidVersion"
| "InvalidOptions"
| "InvalidQuery"
| "InvalidValue"
| "NoSegment"
| "TooBig";

interface WaypointsType {
   distance: number;
   hint: string;
   location: LatLngExpression & LatLngExpression[];
   name: string;
}
