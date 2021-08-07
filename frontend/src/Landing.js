import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom"
import {HiArrowNarrowRight} from "react-icons/hi"
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng
} from 'react-places-autocomplete'



function Landing() {
    
    const [xAddress, setXAddress] = React.useState("")
    const [yAddress, setYAddress] = React.useState("")
    
    // const handleSelect = async (value) => {
    //     setAddress(value);
    // };

    
    const searchOptions = { 
        componentRestrictions: {country: ['can']},
        types: ['address']
    }

    return (
        <div style={{display: "flex", width: "100vw", height: "100vh", background: "url(https://storage.googleapis.com/trail-app/darktop.svg"}}>
        
            <Link to="/"><img src="https://storage.googleapis.com/trail-app/trailnone.png" style={{width: "50px", position: "fixed", margin: "60px 120px", cursor: "pointer"}}></img></Link>
                <div style={{display: "flex", borderRadius: "70px", width: "700px", height: "40px", backgroundColor: "#304136", margin: "50px 120px", justifyContent: "space-between", alignItems: "center", boxShadow: "0px 0px 15px rgba(158, 158, 158, 0.9)", right: "0", position: "fixed", padding: "10px 5px"}}>
                    <div style={{display: "flex", flexDirection: "row"}}>
                        <div style={{display: "flex", flexDirection: "column", height: "100%", justifyContent: "center", paddingLeft: "30px"}}>
                            
                            <p1 style={{fontWeight: "600", color: "white", fontSize: "13px", paddingLeft: "2px", width: "220px"}}>Location</p1>
                            
                            <PlacesAutocomplete value={xAddress} onChange={setXAddress} onSelect={async (value) => setXAddress(value)} searchOptions={searchOptions}>
                                {({getInputProps, suggestions, getSuggestionItemProps}) => (
                                    <div>
                                        <input {...getInputProps({placeholder: "Where are you?"})} style={{border: "none", background: "none", color: "#ececec", fontSize: "13px", fontFamily: "lato, sans-serif", outline: "none", width: "230px", marginRight: "50px"}}/>
                                    
                                        <div style={{position: "absolute", marginTop: "20px", borderRadius: "10px", width: "660px", transform: "translateX(-20px)", boxShadow: "0px 3px 10px rgba(158, 158, 158, 0.2)", overflow: "hidden"}}>
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

                        <div style={{display: "flex", flexDirection: "column", height: "100%", borderLeft: "0.3px solid #c5c5c5", justifyContent: "center"}}>
                            
                            <p1 style={{fontWeight: "600", color: "white", fontSize: "13px", marginLeft: "40px"}}>Destination</p1>
                            
                            <PlacesAutocomplete value={yAddress} onChange={setYAddress} onSelect={async (value) => setYAddress(value)} searchOptions={searchOptions}>
                                {({getInputProps, suggestions, getSuggestionItemProps}) => (
                                    <div>
                                        <input {...getInputProps({placeholder: "Where are going?"})} style={{border: "none", background: "none", color: "#ececec", fontSize: "13px", fontFamily: "lato, sans-serif", outline: "none", marginLeft: "38px", width: "230px"}}/>
                                    
                                        <div style={{position: "absolute", marginTop: "20px", borderRadius: "15px", width: "660px", transform: "translateX(-300px)", boxShadow: "0px 3px 10px rgba(158, 158, 158, 0.2)", overflow: "hidden"}}>
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
                    <button style={{borderRadius: "50px", width: "60px", height: "35px", justifyContent: "center", marginRight: "20px"}}><HiArrowNarrowRight style={{color: "white"}}></HiArrowNarrowRight></button>
                </div>    
            <div style={{display: "flex", width: "100vw", height: "100vh", justifyContent: "center", marginLeft: "120px", flexDirection: "column"}}>
                <p style={{letterSpacing: "5px", fontSize: "22px", fontWeight: "300", color: "#415447", fontWeight: "300", marginBottom: "30px"}}>TRAIL</p>
                <h1 style={{fontSize: "60px", fontFamily: "Poppins, sans-serif", color: "#415447", marginBottom: "0px", lineHeight: "35px", fontWeight: "600", marginTop: "0px"}}>Optimize</h1>
                <h1 style={{fontSize: "60px", fontFamily: "Poppins, sans-serif", color: "#415447", marginBottom: "0px", lineHeight: "35px", paddingBottom: "50px", fontWeight: "600"}}>Your Routes.</h1>
                {/* <p style={{color: "#616d72", fontSize: "25px", marginTop: "0px"}}>Optimize your routes.</p> */}
            </div>
            
    </div>
  );
}

export default Landing
