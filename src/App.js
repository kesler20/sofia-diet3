import { useEffect } from "react";
import RESTfulApiInterface from "./apis/RESTapi";
import Food from "./pages/food/Food";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <div class="w-full flex justify-center items-center">
          <Food />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
