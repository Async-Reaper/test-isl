import type { StateSchema } from "./config/StateSchema";
import { type AppDispatch,createReduxStore } from "./config/store";
import { StoreProvider } from "./ui/StoreProvider";

export {
   type AppDispatch,
   createReduxStore,
   type StateSchema,
   StoreProvider,
};
