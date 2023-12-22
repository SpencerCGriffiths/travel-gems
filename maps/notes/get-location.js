 // gets current location of user
// add to layout.js in RootLayout function

useEffect(() => {
    getUserLocation()
  }, []);

  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      console.log(pos)
    })
  }

  //  geolocationposition object with {coords: ..., latitude, longitude}