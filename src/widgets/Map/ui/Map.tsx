import React, {useEffect, useState} from "react";
import {MapContainer, Marker, Polyline, TileLayer} from "react-leaflet";
import {useSelector} from "react-redux";
import {getCurrentRoute} from "@entities/Routes";
import {fetchPolyline, getPolyline} from "@entities/Polyline";
import {useAppDispatch} from "@shared/lib/hooks";
import {AutoRecenter} from "./AutoRecenter";

const Component = () => {
   const currentRoute = useSelector(getCurrentRoute);
   const polyline = useSelector(getPolyline);
   const dispatch = useAppDispatch();
   const [center, setCenter] = useState<any>([59.84660399,30.29496392]);

   useEffect(() => {
      if (currentRoute) {
         dispatch(fetchPolyline(currentRoute));
      }
   }, [dispatch, currentRoute]);

   useEffect(() => {
      if (polyline) {
         setCenter(polyline[0]);
      }
   }, [polyline, setCenter]);

   return (
      <MapContainer center={center} zoom={13} scrollWheelZoom={true}>
         <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
         />
         {
            polyline &&
              <Polyline positions={polyline} color={"red"} />
         }
         {
            polyline?.map((markerItem) =>
               <Marker key={markerItem.toString()} position={markerItem} />
            )
         }
         <Marker position={center} />
         <AutoRecenter position={center} />
      </MapContainer>
   );
};

export const Map = React.memo(Component);
