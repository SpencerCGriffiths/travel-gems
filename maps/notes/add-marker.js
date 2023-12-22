// adding a marker in <GoogleMap></GoogleMap>

{/* <GoogleMap
mapContainerStyle={containerStyle}
center={coords}
options={{ mapId: '67276f836cb43138' }}
zoom={13}> */}

// add coords, url or file path to image, size
<MarkerF 
position={coords}
icon={{
    url:'/user-location.png',
    scaledSize: {
        width: 50,
        height: 50
    }
}}
/>
// </GoogleMap>