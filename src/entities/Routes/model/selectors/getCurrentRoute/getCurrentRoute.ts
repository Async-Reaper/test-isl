import {StateSchema} from "@app/providers/StoreProvider";

export const getCurrentRoute = (state: StateSchema) => state.routes.currentRoute;
