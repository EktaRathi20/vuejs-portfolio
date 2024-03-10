<template>
  <div id=app>
    <main>
      <div class="search-box">
        <input 
          type="text" 
          class="search-bar" 
          v-model="query"  
          @keypress="fetchWeather" 
          placeholder="search.."
          />
      </div>
      <div class="weather-wrap" v-if="typeof weather.main !='undefined'">
        <div class="location-box">
          <div class="location">
            {{weather.name}},{{weather.sys.country}}
          </div>
          <div class="date">{{dateBuilder()}}</div>
        </div>
      
        <div class="weather-box">
          <div class="temp">{{Math.round(weather.main.temp)}}°C</div>
          <div class="weather">{{weather.weather[0].main}}</div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
  },
  data(){
    return{
      api_key:'7f80ffdd4fe12f6c0ce1632b854c53c5',
      url_base:'https://api.openweathermap.org/data/2.5/',
      query:'',
      weather:{}
    }
  },
  methods:{
    fetchWeather(e){
      if(e.key=="Enter"){
        fetch(`${this.url_base}weather?q=${this.query}&units=metric&appid=${this.api_key}`).then(res=>{return res.json();}).then(this.setResults);
      }
    },
    setResults(results){
      this.weather=results;
      console.log(this.weather);
    },
    dateBuilder(){
      let d=new Date();
      let months=["January","February","March","April","May","June","July","August","September","October","November","December"];
      let days=["Sunday","Monday","Tueday","Wednesday","Thursday","Friday","Saturday"];
      let day=days[d.getDay()];
      let date=d.getDate();
      let month=months[d.getMonth()];
      let year=d.getFullYear();
      return `${day} ${date} ${month} ${year}`;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-image:url('./assets/cold-bg.jpg');
  background-size:cover;
  background-position:bottom;
  transition:0.04s;
}
*{
  margin:0px;
  padding:0px;
  box-sizing:border-box;
}
main{
  min-height:100vh;
  padding:25px;
  background-image:linear-gradient(to bottom,rgba(0,0,0,0.25),rgba(0,0,0,0.75));
}
.search-box{
  width:100%;
  margin-bottom:30px;
}
.search-bar{
  display:block;
  width:100%;
  padding:15px;
  color:#313131;
  font-size:20px;
  appearance:none;
  border:none;
  outline:none;
  background:none;
  background-color:rgb(255 255 255 / 79%);
  border-radius:0px 16px 0px 16px;
  transition:0.4s;
  box-shadow:0px 0px 8px rgba(0,0,0,0.25);
      font-family: cursive;
}
.search-bar:focus{
  background-color:rgba(255,255,255,0.75);
  box-shadow:0px 0px 16px rgba(0,0,0,0.25);
  border-radius:16px 0px 16px 0px;
}
.locatin-box,.location{
  color:white;
  font-size:40px;
  font-weight:500;
  text-align:center;
  text-shadow:1px 3px rgba(0,0,0,0.25);
      font-family: cursive;
}
.location-box .date {
  color: #FFF;
  font-size: 20px;
  font-weight: 300;
  text-align: center;
    font-family: cursive;
}
.weather-box {
  text-align: center;
}
.weather-box .temp {
  display: inline-block;
  padding: 30px 50px;
  color: #FFF;
  font-size: 85px;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  background-color:rgb(255 255 255 / 6%);
  border-radius: 50px;
  margin: 30px 0px;
  box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
      font-family: cursive;
}
.weather-box .weather {
  color: #FFF;
  font-size: 48px;
  font-weight: 700;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
      font-family: cursive;
}
</style>
