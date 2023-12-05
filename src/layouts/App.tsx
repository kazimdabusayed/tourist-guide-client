import { Suspense, lazy, useEffect, useState, React } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Loader from '../common/Loader';
import routes from '../routes';

const Dash = lazy(() => import('./DashboardLayout'));

function App() {
   const [loading, setLoading] = useState<boolean>(true);

   useEffect(() => {
      setTimeout(() => setLoading(false), 1000);
   }, []);

   return loading ? (
      <Loader />
   ) : (
      <>
         <Toaster
            position="top-right"
            reverseOrder={false}
            containerClassName="overflow-auto"
         />
         <Routes>
            <Route element={<Dash />}>
               {routes.map((routes, index) => {
                  const { path, component: Component } = routes;
                  return (
                     <Route
                        key={index}
                        path={path}
                        element={
                           <Suspense fallback={<Loader />}>
                              <Component />
                           </Suspense>
                        }
                     />
                  );
               })}
            </Route>
         </Routes>
      </>
   );
}

export default App;
