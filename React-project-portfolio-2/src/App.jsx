import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Desktop } from "./screens/Desktop";
import { DesktopScreen } from "./screens/DesktopScreen";
import { DivWrapper } from "./screens/DivWrapper";
import { IphoneProMax } from "./screens/IphoneProMax";
import { IphoneProMaxScreen } from "./screens/IphoneProMaxScreen";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <IphoneProMax />,
  },
  {
    path: "/iphone-16-pro-max-3",
    element: <IphoneProMax />,
  },
  {
    path: "/desktop-2",
    element: <Desktop />,
  },
  {
    path: "/iphone-16-pro-max-1",
    element: <IphoneProMaxScreen />,
  },
  {
    path: "/desktop-3",
    element: <DesktopScreen />,
  },
  {
    path: "/iphone-16-pro-max-2",
    element: <DivWrapper />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
