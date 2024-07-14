import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import ServiceProvider from "./Pages/Service provider/ServiceProvider";
import UserType from "./Pages/User type/UserType";
import IndividualReg from "./Pages/Individual Registration/IndividualReg";
import Organiztion from "./components/Siginupforms/Organiztion";
import UsersDashboard from "./Pages/Users dashboard/UsersDashboard";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
      errorElement: <h1>404 page not found!</h1>,
    },
    {
      path: "/serviceProvider/:accountType",
      element: <ServiceProvider />,
    },
    {
      path: "/userType",
      element: <UserType />,
    },
    {
      path: "/individualReg",
      element: <IndividualReg />
    },
    {
      path: "/orgReg",
      element: <Organiztion />
    },
    {
      path: "/userDash/:userId",
      element: <UsersDashboard />
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
