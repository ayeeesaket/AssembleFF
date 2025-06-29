import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Main";
const Body = () => {
  const approuter = createBrowserRouter([
    {path:"/", element:<Main />},
  ]);
  return (
    <div>
      <RouterProvider router={approuter} />
    </div>
  );
};

export default Body;
