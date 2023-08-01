import {LatLngExpression} from "leaflet";
import {useMap} from "react-leaflet";
import {useEffect} from "react";

interface Props {
   position: LatLngExpression;
}

export const AutoRecenter = ({position}: Props) => {
   const map = useMap();
   useEffect(() => {
      map.setView(position);
   }, [position]);
   return null;
};
