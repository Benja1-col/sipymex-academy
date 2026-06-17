import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Tutorials from "./pages/Tutorials";
import Progress from "./pages/Progress";
import TutorialDetail from "./pages/TutorialDetail";
import Faqs from "./pages/Faqs";
import Feedback from "./pages/Feedback";
import ReportProblem from "./pages/ReportProblem";
import HelpCenter from "./pages/HelpCenter";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/tutorials" element={<Tutorials />} />

        <Route path="/faqs" element={<Faqs />} />

        <Route path="/progress" element={<Progress />} />

        <Route
          path="/tutorial/:id"
          element={<TutorialDetail />}
        />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/report" element={<ReportProblem />} />
        <Route path="/help" element={<HelpCenter />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;