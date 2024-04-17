/* eslint-disable react/prop-types */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function InfoBox({weatherInfo}){
         
       const hot_url="https://t4.ftcdn.net/jpg/05/18/43/73/360_F_518437397_j4c3cOSYK54AjCis5muIjPaHw2KBTCeH.jpg";
       const cold_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYAEGRa1fqTvNF6JLpvyfmhwTWJoHiXHmKARNuVDjbjzmn1ZQvC2xuJVdjSKdIe9nrs1k&usqp=CAU";
       const rainy_url="https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=612x612&w=0&k=20&c=lNvbIw1wReb-owe7_rMgW8lZz1zElqs5BOY1AZhyRXs=";

         return(<div >
                 
                  <div className='card'>
                  <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 120 }}
        image={weatherInfo.humidity>30?rainy_url:weatherInfo.temp>20?hot_url:cold_url}
        title="green iguana"
      />
      <CardContent>
        {/* <Typography gutterBottom variant="h5" component="div">
          <p>{weatherInfo.city}</p>
         
        </Typography> */}
        <Typography variant="body2" color="text.secondary"  component="div">
         <h1 style={{color:"black"}}><b>{weatherInfo.city}-
         {weatherInfo.humidity>30?<i style={{color:"red"}}  className="fa-solid fa-cloud-rain"></i>
         :weatherInfo.temp>20?<i style={{color:"red"}} className="fa-regular fa-sun"></i>
         :<i style={{color:"green"}}className="fa-solid fa-snowflake"></i>}
         </b></h1>
        <p>Feels_like:{weatherInfo.feels_like}&deg;c</p>
          <p>Humidity:{weatherInfo.humidity}</p>
          <p>Temprataure:{weatherInfo.temp}&deg;c</p>
          <p>Temp_max:{weatherInfo.temp_max}&deg;c</p>
          <p> Temp_min:{weatherInfo.temp_min}&deg;c</p>
          <p>The weather of <i>{weatherInfo.city} </i> is<i> {weatherInfo.weather}</i></p>
        </Typography>
      </CardContent>
     
    </Card>
    </div>       
         </div>
                  
         )
}