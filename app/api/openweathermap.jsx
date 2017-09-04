import Axios from 'axios';

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=c9a9bd6fa8d96b35b42cfbd4472ba117&units=metric';



export default {
  getTemp(location) {
    const encodedLocation = encodeURIComponent(location);
    const requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return Axios.get(requestUrl).then(function (res){
      if(res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      }else{
        //console.log(res.data);
        let temp = res.data.main.temp;
        let country = res.data.sys.country;
        let cond = res.data.weather[0].description;
        return {temp, country, cond};
      }
    }, function (err){
      throw new Error(err.response.data.message);
    });
  }
}
