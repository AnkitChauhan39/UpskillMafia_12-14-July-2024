import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
      errorElement: <h1>404 page not found!</h1>,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;