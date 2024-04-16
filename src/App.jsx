import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePages from "./Pages/HomePages";
import WhyUs from "./Components/Fragments/WhyUs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePages />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
