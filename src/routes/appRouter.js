import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import About from "../components/About";
import Contact from "../components/Contact";
import Cart from "../components/Cart";
import Error from "../components/Error";

const App = lazy(() => import("../../App"));
const Body = lazy(() => import("../components/Body"));
const RestaurantMenu = lazy(() => import("../components/RestaurantMenu"));

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<h1>Loading...</h1>}>
        <App />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Body />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:resId",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <RestaurantMenu />
          </Suspense>
        ),
      },
    ],
    // errorElement: <Error />,
  },
]);
