import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import * as Pages from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Pages.Slideshow />,
  },
  {
    path: "/upload",
    element: <Pages.Upload />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
