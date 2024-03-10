<template>

  <h1>{{profile}}'s profile</h1>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, et laboriosam
    aspernatur deserunt vitae officiis veritatis iure debitis hic quod cum, aut
    nobis! Unde cum soluta et sequi dicta commodi, recusandae hic! Porro
    similique id est debitis accusantium aliquam, fugit ex odio molestiae ipsum
    facilis impedit, velit, quod ipsa? Iusto tenetur officiis itaque
    consequuntur reprehenderit aliquam amet impedit eum quasi hic facilis,
    deleniti mollitia optio magni sed obcaecati voluptatum quam laborum! Rem
    dolorum dignissimos similique tenetur assumenda deleniti voluptates magni
    esse, aperiam ipsa illo! Accusantium ducimus nostrum, itaque placeat
    molestiae vero corrupti consectetur minus ab modi architecto optio
    laboriosam laudantium?
  </p>
  <button>save</button>
</template>
<script>
import {useRoute} from 'vue-router'
export default {
  name: "profilePage",
  data(){
    return{
        profile:''
    }
  },
  mounted()
  {
    const route=useRoute();
    console.warn("route",route.params.name);
    this.profile=route.params.name;
  }
};
</script>
