import {LatLngExpression} from "leaflet";

export interface RoutesType {
   id: number;
   route: string;
   point1: LatLngExpression;
   point2: LatLngExpression;
   point3: LatLngExpression;
}

export interface RoutesSchema {
   allRoutes: RoutesType[];
   currentRoute?: RoutesType
}
