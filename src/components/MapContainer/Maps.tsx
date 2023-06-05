
import React from 'react';


const Maps: React.FC = () => {
    return (
        <iframe
            src="https://snazzymaps.com/embed/497177"
            width="100%"
            height="600px"
            style={{ border: 'none' }}
        ></iframe>
    );
}

export default Maps;



// import React from "react";
// import GoogleMapReact from "google-map-react";

// interface MarkerProps {
//     lat: number;
//     lng: number;
//     text: string;
//     zoom: number;
// }

// const MapComponent: React.FC<MarkerProps> = ({ text }) => (
//     <div>{text}</div>
// );

// const Maps: React.FC = () => {
//     const defaultProps = {
//         center: {
//             lat: 3.05360330808698,
//             lng: -90.381289034252
//         },
//         zoom: 10
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
//                     text="My Marker" zoom={10} />
//             </GoogleMapReact>
//         </div>
//     );
// }

// export default Maps