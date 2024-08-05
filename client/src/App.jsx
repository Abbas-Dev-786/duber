import { Route, Routes } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import HomePage from "./routes/HomePage";
import Footer from "./components/shared/Footer";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
