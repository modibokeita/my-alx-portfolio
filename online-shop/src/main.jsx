
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import * as ReactDOM from "react-dom/client";
import SigninPage from './pages/signin.jsx';
import SignupPage from './pages/signup.jsx';
import ProductsListPage from './pages/productsList.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signin",
    element: <SigninPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path:"/productsList",
    element: <ProductsListPage />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
