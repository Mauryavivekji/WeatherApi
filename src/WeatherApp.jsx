import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp(){
         let[weatherInfo,setWeatherinfo]=useState({
                
                           city:"Delhi",
                           feels_like:"10",   
                           humidity:"10",
                           temp:"9",
                           temp_max:"9" ,
                           temp_min:"7",
                           weather:"clear sky"
                 
         }

         )
        let updateWeather=(result)=>{
         setWeatherinfo(result)
        }
         return(
                  <>
                  <SearchBox updateWeather={updateWeather}/>
                  <InfoBox weatherInfo={weatherInfo}/>
                  </>
         )
}