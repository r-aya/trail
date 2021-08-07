import React, {useState, useEffect, useRef} from "react"
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng
} from 'react-places-autocomplete'
import {MdMyLocation, MdLocationOn} from "react-icons/md"
import {HiLocationMarker} from "react-icons/hi"
// import ReactMapGL from "react-map-gl"
import mapboxgl from "mapbox-gl"
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions"
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css'
import env from "react-dotenv"

mapboxgl.accessToken = env.MAPBOX_TOKEN


const lat1 = 43.78, lon1 = -79.27
const lat2 = 43.71, lon2 = -79.23

function Directions() {

    const [xAddress, setXAddress] = React.useState("")
    const [yAddress, setYAddress] = React.useState("")
    // const [viewport, setViewport] = React.useState({
    //     latitude: 43.648,
    //     longitude: -79.398,
    //     width: "100vw",
    //     height: "100vh",
    //     zoom: 13.5,
    //     directions: [directions, "top-left"]  
    // })
    const mapContainer = useRef(null)
    const [lng, setLng] = useState(-79.4512);
    const [lat, setLat] = useState(43.6568);
    const [zoom, setZoom] = useState(13.5);

    const searchOptions = { 
        componentRestrictions: {country: ['can']},
        types: ['address']
    }

    
    
    useEffect(() => {
        
            const map = new mapboxgl.Map({
                container: mapContainer.current,
                style: 'mapbox://styles/rayaferdous/cks1a3mwc1ehm18l3013td1ab',
                center: [lng, lat],
                zoom: zoom
                });
            
            const directions = new MapboxDirections({
                accessToken: mapboxgl.accessToken,
                unit: "metric",
                profile: "mapbox/cycling",
            })

            map.addControl(directions, "top-right")
            console.log(directions)
        });
    

    return (
        <div style={{width: "100vw", height: "100vh"}}>
        <div ref={mapContainer} className="map-container"/>
        <h1>hi</h1>
        
        <div style={{
            width: "350px", 
            height: "76vh", 
            backgroundColor: "rgba(48, 65, 54, 0.95)", 
            margin: "40px", 
            padding: "50px", 
            borderRadius: "25px", 
            boxShadow: "0px 3px 20px rgba(158, 158, 158, 0.5)",
            display: "flex",
            flexDirection: "column",
            alignSelf: "center",
            cursor: "default",
            zIndex: "10"
        }}>
        

        <div style={{display: "flex", width: "90%", height: "25px", borderRadius: "45px", backgroundColor: "#415447", padding: "10px 20px", alignItems:"center", marginBottom: "20px", zIndex: "10"}}>
            <MdMyLocation style={{color: "white", marginRight: "20px", height: "18px", overflow: "visible"}}></MdMyLocation>
            <PlacesAutocomplete value={xAddress} onChange={setXAddress} onSelect={async (value) => setXAddress(value)} searchOptions={searchOptions}>
            {({getInputProps, suggestions, getSuggestionItemProps}) => (
                <div>
                    <input {...getInputProps({placeholder: "Where are you?"})} style={{border: "none", background: "none", color: "#ececec", fontSize: "13px", fontFamily: "lato, sans-serif", outline: "none", width: "230px", marginRight: "50px"}}/>
                
                    <div style={{position: "absolute", marginTop: "20px", borderRadius: "10px", width: "430px", transform: "translateX(-50px)", boxShadow: "0px 3px 10px rgba(158, 158, 158, 0.2)", overflow: "hidden"}}>
                        {suggestions.map(suggestion => {
                            const style = {         
                                cursor: "pointer",
                                backgroundColor: suggestion.active ? "#D3DCD6" : "#fff",
                                zIndex: "10",
                                padding: "12px 20px",
                                fontSize: "12px"
                            }
                            return (
                                <div {...getSuggestionItemProps(suggestion, {style})}>
                                    {suggestion.description}
                                </div>
                            )
                        })}
                    </div>
                </div>

            )}
        </PlacesAutocomplete>
        </div>
        <div style={{display: "flex", width: "90%", height: "25px", borderRadius: "45px", backgroundColor: "#415447", padding: "10px 20px", alignItems:"center"}}>
            <HiLocationMarker style={{color: "white", marginRight: "20px", overflow: "visible", height: "18px"}}></HiLocationMarker>
            <PlacesAutocomplete value={yAddress} onChange={setYAddress} onSelect={async (value) => setYAddress(value)} searchOptions={searchOptions}>
                {({getInputProps, suggestions, getSuggestionItemProps}) => (
                    <div>
                        <input {...getInputProps({placeholder: "Where are you?"})} style={{border: "none", background: "none", color: "#ececec", fontSize: "13px", fontFamily: "lato, sans-serif", outline: "none", width: "230px", marginRight: "50px"}}/>
                    
                        <div style={{position: "absolute", marginTop: "20px", borderRadius: "10px", width: "430px", transform: "translateX(-50px)", boxShadow: "0px 3px 10px rgba(158, 158, 158, 0.2)", overflow: "hidden"}}>
                            {suggestions.map(suggestion => {
                                const style = {         
                                    cursor: "pointer",
                                    backgroundColor: suggestion.active ? "#D3DCD6" : "#fff",
                                    zIndex: "10",
                                    padding: "12px 20px",
                                    fontSize: "12px"
                                }
                                return (
                                    <div {...getSuggestionItemProps(suggestion, {style})}>
                                        {suggestion.description}
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                )}
            </PlacesAutocomplete>
        </div>
            
        </div>
        {/* </ReactMapGL> */}
        
    </div>
);
}
  
  export default Directions;
  