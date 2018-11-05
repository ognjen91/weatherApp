<template lang="html">
  <div class="index_main">
      <div class="city_choice">
        <router-link  tag="div"
         v-for="city in cities" :data-name="city.name"
         :to="{ name: 'city', params: {city_tag : city.tag}}"
         >
          <a class="inside_choice">
          <p class="city_sign">{{city.sign}}</p>
          <h4 class="city_name" >{{city.ime}}</h4>
        </a>
        </router-link>
      </div>
  </div>
</template>

<script>
export default {
  props : ['cities'],

data(){
  return{

  }
},
methods : {

}
}
</script>

<style lang="css" scoped>
.index_main{
    height: 90vh;
    /* background-color: rgb(196, 190, 168); */
}

.city_choice{
  align-items: center;
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 100%;
}

.city_choice>div{
  height: 100%;
  width : calc(100% / 3);
  border-right: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
}

.city_choice>div>a{
  color: black;

}



[data-name="Sarajevo"]{
  border: none !important;
  background-color: rgb(215, 30, 64);
}

[data-name="Belgrade"]{
  background-color: rgb(104, 210, 39);
}

[data-name="Herceg-Novi"]{
  background-color: rgb(255, 238, 10);
}

.inside_choice{

  width: 80%;

  text-align: center;
}

.city_sign {
  font-size: 3.5em;
  font-weight: 700;
}

.city_name{
  letter-spacing: 2px;
  text-transform: lowercase;
}
</style>
