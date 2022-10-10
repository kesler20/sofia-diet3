import { useEffect } from "react";
import RESTfulApiInterface from "./apis/RESTapi";
import Food from "./pages/food/Food";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Meal from "./pages/meal/Meal";
import Diet from "./pages/diet/Diet";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div class="w-full flex justify-center items-center">
          <Routes>
            <Route path="/" element={<Food />} />
            <Route path="/food" element={<Food />} />
            <Route path="/meal" element={<Meal />} />
            <Route path="/diet" element={<Diet />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
