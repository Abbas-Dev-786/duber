import { Route, Routes } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import HomePage from "./routes/HomePage";
import Footer from "./components/shared/Footer";
import RideBookingPage from "./routes/RideBooking";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book-ride" element={<RideBookingPage />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
