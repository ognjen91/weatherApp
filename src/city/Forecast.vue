<template lang="html">
  <div class="forecast_wrap">
  <div class="forecast" :style="{ background: 'url(/src/assets/images/' + city.img + ') no-repeat center center fixed' }">

    <div class="forecast_info">

      <div class='forecast_image'>
        <img :src="weather_icon_url" alt="weather conditions">
      </div>

       <div>
         <p class="temp"><strong>{{temp | k_to_c}} &#8451;</strong></p>
         <p class="press">{{pressure }} mbar</p>
         <p class="humidity">vlažnost : {{humidity}} %</p>
         <p class="wind">vjetar: {{wind_speed | mph_to_kph}} km/h</p>
       </div>

  </div>


    <div class="visit">
      <a :href="city.website">POSJETITE {{city.ime2}}</a>
    </div>

  </div>
  </div>
</template>

<script>
export default {
  props : {
    city : {
      type : Object,
      required : true
    }
  },
  data(){
    return{
      key : "6ead764d4e05420b09676deeb422c1b4",
      temp:  "",
      pressure:  '',
      humidity : "",
      wind_speed:  "",
      weather_icon_url:  ''
    }
  },
  methods : {
    get_weather_from_api(){
      let api_url = 'http://api.openweathermap.org/data/2.5/weather?id=' + this.city.id + '&APPID=' + this.key;
      this.$http.get(api_url).then(
        response => {
          return response.json();
        },
        response => {
          alert('greska');
        }
      ).then(response=>{
        console.log(response);

        this.temp = response.main.temp;
        this.pressure = response.main.pressure;
        this.humidity = response.main.humidity;
        this.wind_speed = response.wind.speed;
        this.sunrise = response.sys.sunrise;
        this.sunset = response.sys.sunrise;
        this.weather_icon_url = 'http://openweathermap.org/img/w/' + response.weather[0].icon + '.png';
      })
    }
  },

  beforeMount(){
    this.get_weather_from_api();
  }
}
</script>

<style lang="css">
.forecast_wrap{
  padding: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.forecast{
  /* border: 1px solid pink; */
  width: 80%;
 overflow-y: hidden;
  -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        padding: 3%  5% 8% 5%;

}

.forecast_info{
  display: flex;
  justify-content: center;
  margin-bottom: 4%;
}
.forecast_info>div{
  width: 25%;
  /* border: 1px solid red; */
  background-color: rgba(214, 222, 183, 0.54);
}

.forecast_info>div>p{
  font-size: 140%;
  margin-bottom: -0.5%;
}

.temp {
  font-size: 150%;
}


.forecast_image{
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.forecast_image>img {
  width: 35%;
}

.visit {

  /* border: 2px solid green; */
  align-self: center;
  text-align: center;
}

.visit>a{
  padding: 2% 3%;
  /* border: 1px solid blue; */
  font-size: 180%;
  text-decoration: none;
  background-color: rgba(89, 140, 156, 0.51);
  color : #fff;
  border-radius: 5%;
}


</style>
