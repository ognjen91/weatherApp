<template>
  <div id="app">
<div class="wrap">
<!-- upozorenje na pocetnoj -->


<router-view name='warning'></router-view>
<transition enter-active-class="animated lightSpeedIn"
            leave-active-class="animated lightSpeedOut"
            mode="out-in"
            :duration='200'>
<router-view name="header"></router-view>
</transition>

<transition enter-active-class="animated zoomIn"
            leave-active-class="animated bounceOut"
            mode="out-in"
            :duration='300'>
  <router-view :cities="cities"></router-view>
</transition>


<router-link tag="div" :to="{ name: 'contact', params: {} }" class="need_dev_fix"><a>Potreban vam je web developer?</a></router-link>

</div>
  </div>
</template>

<script>
import {cities} from './assets/cities'
export default {
  name: 'app',
  data () {
    return {
      cities : cities
    }
  }
}
</script>

<style>
body{
  overflow-x: hidden;
}

.need_dev_fix{
  padding: 3%;
  border: 2px solid black;
  position: fixed;
  bottom: 5%;
  right: 5%;

  background: #fff;
}

.need_dev_fix>a{
  color: black;
}

</style>
