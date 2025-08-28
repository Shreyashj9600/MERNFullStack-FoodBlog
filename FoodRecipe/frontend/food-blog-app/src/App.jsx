import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import MainNavigation from "./component/MainNavigation";
import axios from "axios";

const getAllRecipes = async () => {
  let allRecipes = [];
  await axios
    .get("http://localhost:5000/recipe", { timeout: 5000 })
    .then((res) => {
      allRecipes = res.data;
    })
    .catch((err) => {
      console.log("Failed to fetch recipes:", err);
    });
  return allRecipes;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainNavigation />,
    hydrateFallbackElement: <p>Loading ...</p>,
    children: [{ path: "/", element: <Home />, loader: getAllRecipes }],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router}> </RouterProvider >
    </>
  );
}
