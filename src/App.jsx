import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Tutorials from "./pages/Tutorials";
import Progress from "./pages/Progress";
import TutorialDetail from "./pages/TutorialDetail";
import Faqs from "./pages/Faqs";
import Feedback from "./pages/Feedback";
import ReportProblem from "./pages/ReportProblem";
import HelpCenter from "./pages/HelpCenter";
import Chatbot from "./components/Chatbot";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RecuperarCuenta from "./pages/RecuperarCuenta";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recuperar-cuenta" element={<RecuperarCuenta />} />

        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tutorials" element={<Tutorials />} />
                <Route path="/faqs" element={<Faqs />} />
                <Route path="/progress" element={<Progress />} />
                <Route path="/tutorial/:id" element={<TutorialDetail />} />
                <Route path="/feedback" element={<Feedback />} />
                <Route path="/report" element={<ReportProblem />} />
                <Route path="/help" element={<HelpCenter />} />
              </Routes>
              <Footer />
              <Chatbot />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;