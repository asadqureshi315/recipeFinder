import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Recipes from "./pages/Recipes";
import RecipeDetail from "./pages/RecipeDetail";

import axios from "axios";
axios.defaults.baseURL = import.meta.env.VITE_BACKEND;
function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Route>
    </Routes>
  );
}

export default App;
