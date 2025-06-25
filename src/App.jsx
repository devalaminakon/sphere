import { Route, Routes } from "react-router-dom";
import Container from "./components/layout/Container";
import Common from "./components/layout/Common";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Common />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
