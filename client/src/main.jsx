import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import "./index.css";

import ArtForm from "./components/ArtForm";
import Entries from './components/Entries';
import Error from './components/Error'
import Entry from "./components/Entry";
impo

const routes = [
  {
    path: "/",
    element: <ArtForm />,
  },
  {
    path: "/entries",
    element: <Entries />,
  },
  {
    path: "/entries/:uuid",
    element: <Entry />,
  }
]

const AppLayout = () => {
  return (
    <>
    <Outlet/>
    </>
  )
}

const routerConfig = [
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: routes.map((route) => ({
      path: route.path,
      element: route.element,
    })),
  },
];


const router = createBrowserRouter(routerConfig);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
