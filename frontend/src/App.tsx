import { Link, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import CarsPage from "./pages/CarsPage";

function App() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Accueil !</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<CarsPage />} />
      </Routes>
      <footer></footer>
    </>
  );
}

export default App;
