import type {StateSchema} from "@app/providers/StoreProvider";

export const getAllRoutes = (state: StateSchema) => state.routes.allRoutes;
