import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Tutorials from "./pages/Tutorials";
import Progress from "./pages/Progress";
import TutorialDetail from "./pages/TutorialDetail";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/tutorials" element={<Tutorials />} />

        <Route path="/progress" element={<Progress />} />

        <Route
          path="/tutorial/:id"
          element={<TutorialDetail />}
        />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;