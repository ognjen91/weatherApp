import IndexMain from "../index/IndexMain.vue"
import IndexTop from "../index/IndexTop.vue"
import CityDefault from '../city/City.vue'
import Header from '../Header.vue'
import StaGod from '../other_pages/StaGod.vue'
import Contact from '../other_pages/Contact.vue'
import ErrorRoute from '../404page.vue'

export const routes = [
  {
    path : "",
    name : "home",
    components : {
      default : IndexMain,
      warning : IndexTop
    }
  },
    {
      path : "/city/:city_tag?",
      components : {
        default: CityDefault,
        header : Header
      },
      props : true,
      name : 'city'

  },

  {
    path : "/sta_god",
    name : "stagod",
    components : {
      default:  StaGod,
      header : Header
    }
},

{
  path : "/contact",
  name : "contact",
  components : {
    default:  Contact,
    header : Header
  }
},

{
  path : "/*",
  name : "404",

  components : {
    default:  ErrorRoute,
    header : Header
  }
}
]
