import Root from "./ui/Root";
import Home from "./pages/Home/Home";
import Admin from "./pages/admin/Admin";

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "admin",
        element: <Admin />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
