import React, { Suspense } from "react";
import {
  Routes,
  Route,
} from 'react-router-dom';

import { DefaultRoutes } from './routes';

import NotFoundPage from "./pages/errors/notFound";

function App() {
  return (
    <Suspense fallback={<>Loading...</>}>
      <Routes>
        {
          DefaultRoutes.map((item, key) => (
            <Route key={key} path={item.path} exact={item.exact} element={<item.component />} />
          ))
        }

        <Route
          path="*"
          element={<NotFoundPage />}
        />     
      </Routes>
    </Suspense>
  );
}

export default App;
