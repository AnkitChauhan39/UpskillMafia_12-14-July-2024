import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import ServiceProvider from "./Pages/Service provider/ServiceProvider";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
      errorElement: <h1>404 page not found!</h1>,
    },
    {
      path: "/serviceProvider/:id",
      element: <ServiceProvider />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
