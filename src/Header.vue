<template lang="html">
  <header>
    <router-link :to="{ name: 'home', params: {} }" tag='div' class='logo'><a><img src="/src/assets/images/logo.png" alt=""></a></router-link>

    <div class="top_menu">
      <router-link :to="{ name: 'home', params: {} }" tag='div' exact active-class="trenutna"><a>Home</a></router-link>
      <router-link :to="{ name: 'stagod', params: {} }" tag='div' exact active-class="trenutna"><a>Šta god</a></router-link>
      <router-link :to="{ name: 'contact', params: {} }" tag='div' exact active-class="trenutna"><a>Uposlite developera</a></router-link>
    </div>
  </header>
</template>

<script>
export default {
}
</script>

<style lang="css">
header{
  /* border: 1px solid red; */
  display: flex;
}

.trenutna {
  font-weight: 700;
  text-decoration: underline;
}

.logo{
  width: 10%;
}

.logo>a>img{
  width: 100%;
}

.top_menu{

  display: flex;
  justify-content: space-around;
  align-items: center;
  width: calc(90% - 5px);
}

.top_menu>div{
  width: 25%;
  margin: 2%;
  display: flex;
  /* border: 1px solid black; */
  justify-content: center;

}

.top_menu>div>a{
  font-size: 135%;
  text-align: center;
  text-decoration: none;
}
</style>
