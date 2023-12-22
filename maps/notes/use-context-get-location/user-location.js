// in context/UserLocationContext.js
const {createContext} = require("react")
export const UserLocationContext = createContext(null);


// in layout.js
export default function RootLayout({ children }) {
    const [userLocation, setUserLocation] = useState([]);
  
    useEffect(() => {
      getUserLocation()
    }, []);
  
    // gets currnet location of user
    const getUserLocation = () => {
      navigator.geolocation.getCurrentPosition((pos) => {
        console.log(pos)
        setUserLocation({
          lat:pos.coords.latitude,
          lng:pos.coords.longitude
        })
      })
    }
  
    // wrap with UserLocationContext.Provider
    return (
      <html lang="en">
        <UserLocationContext.Provider value={{userLocation, setUserLocation}}>
          <HeaderNavBar />
          <body >{children}</body>
  
        </UserLocationContext.Provider>
  
      </html>
    )
  }
  

// in GoogleMapView.js
// accesing userLocation
"use client"
import { UserLocationContext } from '@/context/UserLocationContext';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import React, {useContext} from 'react';

const GoogleMapView = () => {
    const {userLocation, setUserLocation} = useContext(UserLocationContext)

    const containerStyle = {
        width: '100%',
        height: '70vh'
    }

    const coords = {lat: 53.47263498876383, lng: -2.238328930723361}

    console.log(userLocation)

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
            options={{mapId: '67276f836cb43138'}}
            zoom={13}>

            </GoogleMap>
            </LoadScript>
        </div>
    );
}
 
export default GoogleMapView;

