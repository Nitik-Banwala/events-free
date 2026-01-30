import { useState } from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router-dom";
import Home from "./components/Homepage /Home";
import Events from "./components/Eventspage/Events";
import Feed from "./components/Feedpage/Feed";
import Navbar from "./components/common/Navbar";

function App() {
  < Navbar />
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Home />
        </>
      )
    },
    {
      path: "/EVENTS",
      element: (
        <>
          <Events />

        </>
      )
    },
    {
      path: "/Feed",
      element: (
        <>
          <Feed />
        </>
      )
    },
  ])
  return (
    <RouterProvider router={router} />
    
  );
}



export default App;