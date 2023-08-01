import {StateSchema} from "@app/providers/StoreProvider";

export const getPolyline = (state: StateSchema) => state.polyline.data;
