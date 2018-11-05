<template lang="html">
  <div class="about_city">
 <div class="city_img"><img :src="'/src/assets/images/' + city.img" alt=""></div>
  <div class="city_text">
    <h1>{{city.name}}</h1>
    <p>quae nulla eram minim irure ipsum ipsum velit anim summis multos quis summis
      anim summis sunt tamen duis malis anim duis export export sint labore noster
      eram multos velit quae quis magna amet sint ipsum anim aute amet enim ipsum
      multos magna anim irure labore duis aute malis dolore esse sint duis malis
      tempor nisi multos quid tamen quem fore quis ipsum irure amet duis quae tamen
      culpa sint quorum illum irure fore elit quae quae velit minim tamen amet fugiat
      irure aute quem tempor magna multos aliqua anim illum quis duis enim export
      tamen esse magna sint multos malis dolor summis magna fugiat fore malis minim
      malis sint dolor multos malis nisi noster ipsum elit esse duis culpa sunt aute
      aute quid cillum dolor cillum tamen summis malis summis illum summis fugiat
      noster quid quorum enim noster amet multos duis tamen duis amet culpa export
      aute culpa dolore tamen summis sunt elit esse quid quis quorum aute anim veniam
      quid export labore culpa sint multos quid aute sunt velit culpa quid dolor ipsum
      dolor multos aute amet tempor summis illum enim irure dolore ipsum fore multos
      labore quid elit culpa quid irure quid labore ipsum aute sint amet culpa</p>
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
  }
}
</script>

<style lang="css">
.about_city>div{
  padding: 5%;
  display: inline-block;
  text-align: center;
}

.city_text{
  width: 60%;
}
.city_img{
  width: 30%;
}

.city_img>img{
  width: 100%;
}
</style>
