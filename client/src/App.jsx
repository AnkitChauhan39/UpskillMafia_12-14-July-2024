import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";

function App() {
  // useEffect(() => {
  //   function loadRazorPay() {
  //     const script = document.createElement("script");
  //     script.src = "https://static-bundles.visme.co/forms/vismeforms-embed.js";
  //     document.body.appendChild(script);
  //     // script.onload = handleSubmit;
  //   }

  //   loadRazorPay();
  // }, []); // Empty dependency array to run only once

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