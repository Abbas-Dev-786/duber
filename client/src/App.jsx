import { Route, Routes } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import HomePage from "./routes/HomePage";
import Footer from "./components/shared/Footer";
import RideBookingPage from "./routes/RideBooking";
import { useState } from "react";
import { SourceContext } from "./context/SourceContext";
import { DestinationContext } from "./context/DestinationContext";
import NotificationSettings from "./routes/NotificationSettings";
import { useReadContract } from "wagmi";
import abi from "./abi/contract.abi.json";

const App = () => {
  const [source, setSource] = useState([]);
  const [destination, setdestination] = useState([]);

  const result = useReadContract({
    abi,
    address: "0xd7190301518E834A03D20c0C6Dd4fF54c294922F",
    functionName: "tripCounter",
    args: [],
  });

  console.log(result, "🥳");

  return (
    <SourceContext.Provider value={{ source, setSource }}>
      <DestinationContext.Provider value={{ destination, setdestination }}>
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/book-ride" element={<RideBookingPage />} />{" "}
          <Route
            path="/notification-settings"
            element={<NotificationSettings />}
          />
          <Route path="/driver-register" element={<>working</>} />
        </Routes>

        <Footer />
      </DestinationContext.Provider>
    </SourceContext.Provider>
  );
};

export default App;
