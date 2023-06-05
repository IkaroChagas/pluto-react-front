import React from "react";
import { useMemo } from "react"
import * as C from './styled'
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

interface MarkerProps {
    lat: number;
    lng: number;
    text: string;
    zoom: number;
    googleMapsApiKey: string;
}

export const Maps: React.FC<MarkerProps> = () => {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_GOOGLE_MAP_API_KEY,
    });

    if (!isLoaded) return <div>Carregando...</div>

    return <Map />
}

function Map() {
    const center = useMemo(() => ({ lat: 33, lng: -90 }), [])

    return (
        <C.MapContainer>
            <GoogleMap
                zoom={10}
                center={center}>
                <Marker position={center} />
            </GoogleMap>
        </C.MapContainer>
    );
}




// const MapComponent: React.FC<MarkerProps> = ({ text }) => (
//     <div>{text}</div>
// );

// const Map: React.FC = () => {
//     const defaultProps = {
//         center: {
//             lat: 3.05360330808698,
//             lng: -90.381289034252
//         },
//         zoom: 11
//     };

//     return (
//         <div style={{ height: '100vh', width: '100%' }}>
//             <GoogleMapReact
//                 bootstrapURLKeys={{ key: "AIzaSyCWWf1JZPtCwpgGCa42FjGWaoqGLU3zzM0" }}
//                 defaultCenter={defaultProps.center}
//                 defaultZoom={defaultProps.zoom}
//             >
//                 <MapComponent
//                     lat={3.05360330808698}
//                     lng={-90.381289034252}
//                     text="My Marker"
//                 />
//             </GoogleMapReact>
//         </div>
//     );
// }

export default Map;
