import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import CarsPage from "./pages/CarsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<CarsPage />} />
      </Routes>
    </>
  );
}

export default App;
