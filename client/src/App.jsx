import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import ServiceProvider from "./Pages/Service provider/ServiceProvider";
import UserType from "./Pages/User type/UserType";
import IndividualReg from "./Pages/Individual Registration/IndividualReg";
import Organiztion from "./components/Siginupforms/Organiztion";
import UsersDashboard from "./Pages/Users dashboard/UsersDashboard";
import Askme from "./components/Askme/Askme";
import { useContext, useState } from "react";
import ScreenLoaderContext from "./context/ScreenLoaderContext";

function App() {
  const { showLoader } = useContext(ScreenLoaderContext);
  const [show, setShow] = useState(false);
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
      element: <IndividualReg />,
    },
    {
      path: "/orgReg",
      element: <Organiztion />,
    },
    {
      path: "/userDash/:userId",
      element: <UsersDashboard />,
    },
  ]);

  return showLoader ? (
    <div class="loader absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
  ) : (
    <>
      <RouterProvider router={router} />
      {!show && (
        <div className="fixed bottom-10 right-5 rounded-2xl">
          <span
            onClick={() => {
              setShow(!show);
            }}
            className="inline-flex items-center shadow-black shadow-md font-semibold justify-center w-20 h-20 rounded-full bg-blue-500 text-white overflow-hidden animate-bounce"
          >
            ASK ME
          </span>
        </div>
      )}
      {show && (
        <div className="fixed bottom-10 right-5 rounded-2xl w-11/12 max-w-80 h-96">
          <Askme show={show} setshow={setShow} />
        </div>
      )}
    </>
  );
}

export default App;
