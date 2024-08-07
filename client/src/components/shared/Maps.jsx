import {
  APIProvider,
  Map,
  useMap,
  useMapsLibrary,
} from "@vis.gl/react-google-maps";
import { useContext, useEffect, useState } from "react";
import { SourceContext } from "../../context/SourceContext";
import { DestinationContext } from "../../context/DestinationContext";

const Directions = () => {
  const { source } = useContext(SourceContext);
  const { destination } = useContext(DestinationContext);
  const map = useMap();
  const routesLib = useMapsLibrary("routes");
  const [directionsService, setDirectionService] = useState();
  const [directionsRenderer, setDirectionRenderer] = useState();
  const [routes, setRoutes] = useState([]);
  const [routeIndex, setRouteIndex] = useState(0);
  const selected = routes[routeIndex];
  const leg = selected?.legs[0];

  useEffect(() => {
    if (!map || !routesLib) return;

    setDirectionService(new routesLib.DirectionsService());
    setDirectionRenderer(new routesLib.DirectionsRenderer({ map }));
  }, [map, routesLib]);

  useEffect(() => {
    if (!directionsRenderer || !directionsService) return;

    directionsService
      .route({
        origin: source?.name,
        destination: destination?.name,
        travelMode: window.google.maps.TravelMode.DRIVING,
        provideRouteAlternatives: true,
      })
      .then((response) => {
        directionsRenderer.setDirections(response);
        setRoutes(response.routes);
      });
  }, [directionsService, directionsRenderer, source, destination]);

  return null;

  // return (
  //   <div
  //   // style={{
  //   //   background: "black",
  //   //   color: "white",
  //   //   position: "absolute",
  //   //   top: "0%",
  //   //   right: "0%",
  //   // }}
  //   >
  //     <h2>Summary</h2>
  //     <p>
  //       {leg.start_address.split(",")[0]} to {leg.end_address.split(",")[0]}
  //     </p>
  //     <p>Distance:- {leg.distance?.text}</p>
  //     <p>Duration:- {leg.duration?.text}</p>
  //   </div>
  // );
};

const Maps = () => {
  const position = { lat: 43.6532, lng: -79.3832 };
  const { source } = useContext(SourceContext);
  const { destination } = useContext(DestinationContext);

  if (!source?.name || !destination?.name) return;

  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_API_KEY}>
      <Map
        style={{ width: "100%", height: "70vh" }}
        defaultCenter={position}
        defaultZoom={8}
        fullscreenControl={false}
        // gestureHandling={"greedy"}
        disableDefaultUI={true}
      >
        <Directions />
      </Map>
    </APIProvider>
  );
};

export default Maps;
