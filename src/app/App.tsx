import {Suspense} from "react";
import {MainPage} from "@pages/MainPage";
import {StoreProvider} from "@app/providers/StoreProvider";

function App() {

   return (
      <StoreProvider>
         <div className="app">
            <Suspense fallback={<h1>Loading</h1>}>
               <MainPage />
            </Suspense>
         </div>
      </StoreProvider>
   );
}

export default App;
