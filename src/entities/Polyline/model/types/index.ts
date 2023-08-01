import {LatLngExpression} from "leaflet";

export interface PolylineSchema {
   isLoading: boolean;
   error: string;
   data?: LatLngExpression[];
}

