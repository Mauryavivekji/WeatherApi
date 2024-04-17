/* eslint-disable react/prop-types */
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from '@mui/icons-material/Search';

import "./SearchBox.css";
import { useState } from "react";
// http://api.openweathermap.org/geo/1.0/direct?q={city name}
export default function SearchBox({updateWeather}) {
         let[city,setCity]=useState("");
         let[err,setErr]=useState(false);
         const url="https://api.openweathermap.org/data/2.5/weather";
         const API_KEY="e47a85407a127482c643efb51d85bfa0";

         let GetWeatherInfo= async()=>{
          // eslint-disable-next-line no-useless-catch
          try {
            let res= await fetch(`${url}?q=${city}&appid=${API_KEY}&units=metric`);
            let resJson= await res.json();
            console.log(resJson);
            let info={
              city:city,
                     feels_like:resJson.main.feels_like,   
                     humidity:resJson.main.humidity,
                     temp:resJson.main.temp,
                     temp_max: resJson.main.temp_max,
                     temp_min:resJson.main.temp_min,
                     weather:resJson.weather[0].description

            }
            console.log(info)
            return info;
          }catch(err){
           throw err;
          }

         }
let HandleInput=(e)=>{
         setCity(e.target.value);

}
let OnSubmit=async(e)=>{
  try{
    e.preventDefault();
    console.log(city)
    setCity("")
   let GetWeatherInformation= await GetWeatherInfo();
   updateWeather(GetWeatherInformation)
  }catch(err){
    setErr(true)
  }
         

}

  return (
    <div className="Search">
      <h2>Search Weather For Your City </h2>
      <form action="" onSubmit={OnSubmit}>
      <TextField id="city" label="City" variant="outlined" required value={city} onChange={HandleInput}/><br /><br />
      
      <Button variant="contained" type="submit" endIcon={<SearchIcon />}  >
        Search 
      </Button>
      {err&& <h1 style={{color:"red"}}>No Such Place is exist !</h1>}
      </form>
     

    </div>
  );
}
