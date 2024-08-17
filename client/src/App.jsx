import { Route, Routes } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import HomePage from "./routes/HomePage";
import Footer from "./components/shared/Footer";
import RideBookingPage from "./routes/RideBooking";
import { useEffect, useState } from "react";
import { SourceContext } from "./context/SourceContext";
import { DestinationContext } from "./context/DestinationContext";
import NotificationSettings from "./routes/NotificationSettings";
import { useReadContract, useWriteContract } from "wagmi";
import abi from "./abi/contract.abi.json";
import { CONTRACT_ADDRESS } from "./constant";

const App = () => {
  const [source, setSource] = useState([]);
  const [destination, setdestination] = useState([]);

  const { data, writeContract } = useWriteContract());
  console.log(data, "🌞");

  const result = useReadContract({
    abi,
    address: CONTRACT_ADDRESS,
    functionName: "tripCounter",
    args: [],
  });

  useEffect(() => {
    writeContract({
      abi,
      address: CONTRACT_ADDRESS,
      functionName: "createTrip",
      args: [source.name, destination.name],
    });
  }, []);

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
