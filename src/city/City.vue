<template lang="html">
  <div class="city_wrap">

    <div class="city_basics">
      <div class="city_info">
        <p><span class="city_name">{{city.ime2}}</span>  &nbsp; {{city.country}}</p>

      </div>


      <div class="choices">
        <div class="show_forecast" @click='activeView = "city_forecast"' :class="{active_choice : activeView =='city_forecast'}"><p>Trenutno vrijeme</p></div>
        <div class="show_tweets" @click='activeView = "city_tweets"' :class="{active_choice : activeView =='city_tweets'}"><p>O gradu</p></div>
        <div><router-link :to="{ name: 'home', params: {} }" class='go_to_cc'>Izbor grada</router-link></div>
      </div>
    </div>

    <div class="city_main" >
      <transition name="fade" mode="out-in">
        <component :is="activeView" :city="city" ></component>
      </transition>

    </div>


  </div>

</template>

<script>
import {cities} from '../assets/cities'
import Forecast from './Forecast.vue';
import Tweets from './Tweets.vue';
export default {
  data(){
    return{
      cities : cities,
      activeView : 'city_forecast'

    }
  },


  created(){
    if(typeof this.$route.params.city_tag !== 'undefined'){

      let city_tag = this.$route.params.city_tag;
      this.city_tag = city_tag;
      console.log('1 grad je ' + this.city_tag)
    } else {
      this.city_tag = 'bg'
      console.log('2 grad je ' + this.city_tag)
    }


  }
  ,
  //
  computed : {
      city : function(){ //obicna fja jer je onda dostupno this na prvom

      let active = this.cities.find(active_city => { //arrow jer je this 2 iznad
        return active_city.tag == this.city_tag;
      })
      if(typeof active !== 'undefined') return active;
      return this.cities[Date.now()%(this.cities.length)] //vraca slucajan grad

}
},
components : {
  'city_forecast' : Forecast,
  'city_tweets' : Tweets
}
}
</script>

<style lang="css">
.city_wrap{
  display: flex;
  flex-direction: column;
}

 .city_basics{
   /* border: 1px solid red; */
   display: flex;
   flex-direction: column;
 }

 .city_info{
   display: flex;
  margin-bottom: 2%;
 }
 .city_info>p{
   margin-left: 4%;
   font-size: 120%;
   font-weight: 700;
 }

.city_name{
  font-size: 150%;
}
 .choices {
   display: flex;

 }

 .choices>div{

   border-radius: 6% 6% 0 0;
   margin-left: 4%;
   width: 15%;
   padding: 0% 4%;
  border : 1px solid rgb(35, 109, 177);
  color : rgb(35, 109, 177);
   cursor: pointer;
   display: flex;
   justify-content: center;
   align-items: center;
 }
 .choices>div>p{
   text-align: center;
   letter-spacing: 2px;

 }
 .active_choice{
   background: rgb(35, 109, 177);
   color: #fff !important;
 }

 .city_main{
   width: 100%;
   /* border: 2px solid pink; */
 }

 .go_to_cc {
   text-decoration: none;
   color : rgb(35, 109, 177);
 }


/* ======ANIMACIJA======= */

.fade-enter-active, .fade-leave-active{
  /* transition: opacity 0.5s ease; */
  animation: pulse 0.5s;
}
.fade-enter, .fade-leave-to{
  /* opacity: 0; */
  animation: dissapear 0.5s;
}


@keyframes pulse {
  from {
    transform: scale3d(1,1,1);
  }
  50% {
      transform: scale3d(1.2,1.2,1.2);
  }
  to {
    transform: scale3d(1,1,1);
  }
}

@keyframes dissapear {
  from {
    opacity: 1;
    transform: rotate(0deg) translate(0);
    width: 100%;
    /* transform: translate(0); */
  }
  50% {
      opacity: 0.7;
      transform: rotate(45deg) translate(-10px, -10px);
      width: 80%;
      /* transform: translate(-10px, -10px); */
  }
  to {
    opacity: 0;
    transform: rotate(90deg) translate(-15px, -15px);
    width: 40%;
    /* transform: translate(-15px, -15px); */
  }
}



</style>
