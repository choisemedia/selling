import React from "react"
import { useLocation, useNavigate } from "react-router-dom"
import Cookies from "js-cookie"

interface LocationProviderProps {
	children: React.ReactNode
}

const LocationProvider: React.FC<LocationProviderProps> = ({ children }) => {
  const location = useLocation()
  const navigate = useNavigate()

  React.useEffect(() => {
    const currentLocation = Cookies.get("location_app")
    if (!currentLocation) return
    navigate(currentLocation)
  }, [])

  React.useEffect(() => {
    const tenMinutes = new Date(new Date().getTime() + 10 * 60 * 1000)
    Cookies.set("location_app", location.pathname, {
      expires: tenMinutes,
    })
  }, [location])

	return <>{children}</>
}

export default LocationProvider