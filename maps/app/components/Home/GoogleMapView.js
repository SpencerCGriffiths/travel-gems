"use client"
import { UserLocationContext } from '@/context/UserLocationContext';
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';
import React, { useContext, useState } from 'react';

const GoogleMapView = () => {
    const { userLocation, setUserLocation } = useContext(UserLocationContext)

    const containerStyle = {
        width: '100%',
        height: '70vh'
    }

    const coords = { lat: 53.47263498876383, lng: -2.238328930723361 }
    console.log(userLocation)

    const [markers, setMarkers] = useState([]);

    // mapIds use to create custom style
    return (
        <div>
            <LoadScript
                googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
                mapIds={['67276f836cb43138']}
            >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={coords}
                    options={{ mapId: '67276f836cb43138' }}
                    zoom={13}
                    onClick={e => setMarkers(current => [...current, {
                        lat: e.latLng.lat(),
                        lng: e.latLng.lng(),
                        time: new Date()
                    }])}>

                    {/* <MarkerF 
                    position={coords}
                    icon={{
                        url:'/user-location.png',
                        scaledSize: {
                            width: 50,
                            height: 50
                        }
                    }}/>
 */}
                    {markers.map((marker) => <MarkerF 
                    key={marker.time.toISOString()}
                    position={{lat: marker.lat, lng: marker.lng}}/>
                    )}
                    

                </GoogleMap>
            </LoadScript>
        </div>
    );
}

export default GoogleMapView;