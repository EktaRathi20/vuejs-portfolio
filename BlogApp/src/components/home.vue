<template>
  <!-- <h1 v-on:mousemove="getConsole()">Home Page</h1>
    <br> -->
  <!-- Name:-{{getName()}} -->
  <!-- Name:{{getName("Rathiekta")}} -->

  <!-- E-mail:-{{email}} -->

  <!-- Mobile Number:-{{mobile}} -->
  <!-- All Data:{{getData()}} -->
  <!-- All Data:{{getData().email}} -->
  <!-- <button v-on:click="text('Button1 Clicked')">Click Me 1</button>
    <button v-on:click="text('Button2 Clicked')">Click Me 2</button>
    <button v-on:dblclick="text('Button Clicked Double')">Click Me double</button>
    <br>
    <button v-on:click="getData()">Click Me to increase count</button>
    <br>
    count:-{{count}} -->
  <!-- 
    <h3>Two way binding</h3>
    <input v-model="count" type="text"/>
    <h2>{{count}}</h2> -->

  <!-- <h3>Get input field value</h3>
    <input v-model="email" type="text" placeholder="Enter Email"/>
    <br>
    <input v-model="password" type="password" placeholder="Enter Password"/>
    <br>
    <button v-on:click="getData()" type="button">Get values</button> -->

  <!-- <h3>Get Checkbox and Radio Button Value</h3>
    <h5>Technology</h5>
    <label for="java">Java</label>
    <input type="checkbox" value="java" id="java" v-model="technology">
    <label for="php">PHP</label>
    <input type="checkbox" value="php" id="php" v-model="technology">
    <label for="node">Node</label>
    <input type="checkbox" value="node" id="node" v-model="technology">
    
    <br>
    <h4>Selected Technology:{{technology}}</h4>
    <br>
    <h3>Who I am</h3>
    <label for="student">Student</label>
    <input type="radio" value="student" name="who" v-model="who" id="student">
    <label for="developer">Developer</label>
    <input type="radio" value="developer" name="who" v-model="who" id="developer">
    <br>
    <h4>I am {{who}}</h4> -->

  <!-- <h3 v-if="show">If Condition</h3>
    <h3 v-else>Else Condition</h3>
    <button v-on:click="show=!show">Toggle</button> -->
  <!-- <ul>
        <li v-for="item in technology" :key="item">
            {{item}}
        </li>
    </ul>
    <br>
    <br>
    <ul>
        <li v-for="u in user" :key="u.email">
            Name is : {{u.name}} and Email is :{{u.email}}
        </li>
    </ul> -->

  <!-- <h3>Pass data to child component</h3>
    <childComp name="Ekta" :user="user" :getData="getData" /> -->

  <!-- <h3>Reuse Component</h3>
    <ul>
    <li v-for="items in users" :key="items.name" >
        <userPro :data="items" :getData="getData"/>
    </li>
    </ul> -->
  <!-- <h2>HTML Binding</h2>
    <h4>Name:{{}}</h4>
    <div v-html="tag"></div>
    {{tag}}
    <div v-html="tag2"></div> -->
  <!-- <h3>CSS Binding</h3>
    <h4 :class="applyStyle">Home Component</h4>
    <button v-on:click="color=!color">Apply background</button> -->
  <!-- <h3>Props in Vue js 3</h3>
    <studentNm :name="name"/>
    <teacherNm name="peter"/> -->
  <!-- <h3>Send Data child to parent in vue js 3</h3>
    <userS :getUserName="getUserName"/> 
    {{childUser}} -->
  <!-- <h2>Ref in Vue js 3</h2>
    <input type="text" ref="input"/>
    <button v-on:click="getData()">Click</button> -->
  <!-- <h2>Simple Form</h2>
    <form>
        <label>Email:</label>
        <input type="text" placeholder="enter email" v-model="form.email"/>
        <br>
        <label>Password:</label>
        <input type="password" placeholder="enter password" v-model="form.password"/>
        <br>
        <select v-model="form.country">
            <option>India</option>
            <option>China</option>
            <option>USA</option>
        </select>
        <br>
        <h4>Technology</h4>
        <label>java</label>
        <input type="checkbox" value="java"  v-model="form.technology"/>
        <label>cpp</label>
        <input type="checkbox" value="cpp" v-model="form.technology"/>
        <h4>Gender</h4>
        <label>Male</label>
        <input type="radio" value="Male" name="gender"  v-model="form.gender"/>
        <label>Female</label>
        <input type="radio" value="Female" name="gender"  v-model="form.gender"/>
        <button type="button" v-on:click="login">Login</button>
    </form>
    <ul>
        <li v-for="item in error" v-bind:key="item">
            {{item}} not valid
        </li>
    </ul> -->

  <!-- <h2>Form Modifiers</h2>
    <input type="text" v-model="data"/>
    <input type="text" v-model.lazy="data"/>
    <input type="text" v-model.trim="data"/>
    <br>
    <input type="number" v-model="data"/>
    <h4>Data is:{{data}} and type is :{{typeof(data)}}</h4> -->

  <!-- <h2>Non-Props Data</h2>
    <userName data="Some Data"id=/> -->

  <!-- <h2>Computed Property</h2>
    <h3>{{(dollars*ruppeVal)-discount}}</h3>
    <h3>{{getResult}}</h3>
    <h4>{{getResultMethod()}}</h4> -->

  <!-- <h2>Watchers</h2>
    <h4>{{count}}</h4>
    <button v-on:click="count=count+1">+</button>
    <button v-on:click="count=count-1">-</button> -->

  <!-- <h3>Slots in Vue js 3</h3> -->
  <!-- <childComp data="ekta"/> -->
  <!-- <childComp><h3>heyya </h3></childComp>
    <childComp><h3><a href="#">xyz</a></h3></childComp>
    <childComp><h3><img src="" alt="image"/></h3></childComp> -->

  <!-- <childComp>
    <template v-slot:header>
        <h3>Peter</h3>
    </template>
    <template v-slot:content>
        <p>Vue js product</p>
    </template>
    <template v-slot:footer>
        <button>Buy Now</button>
    </template>
</childComp> -->
  <!-- <h1>Dynamic Component</h1>
    <button @click="tab='javaJ'">load java</button>
    <button @click="tab='phpP'">load php</button>
    <button @click="tab='nodeN'">load node</button> -->
  <!-- <javaJ/>
    <nodeN/>
    <phpP/> -->
  <!-- <component :is="tab"/> -->

  <!-- <h2>Teleport Components</h2>
    
    <Teleport to="#footer">
    <FooterF/>
    </teleport> -->

  <!-- <h3>beforeCreated and created</h3>
    {{name}} -->

  <!-- <h3>beforeMount and mounted</h3> -->
  <!-- <h2>{{counter}}</h2> -->
  <!-- <h2 ref='count'>{{counter}}</h2>
    <button v-on:click="counter=counter+1">update count</button> -->
  <!-- <h2>beforeUnmount and unmounted</h2>
    <button v-on:click="show=!show">Toggle</button>
    <sampleS v-if="show"/> -->
     <!-- <h2>Test</h2> -->
  <p>hi this is home!</p>
</template>
<script>
// import FooterF from './footer.vue'
// import sampleS from './sample.vue'
export default {
  name: "HomePage",
};
// data(){
//     return{
//         show:true
//     }
// },
// components:{
//     sampleS
// }
// components:{
//     FooterF
// }
// data()
// {
//     // console.log("created");
//     return{
//         // name:'ekta'
//         counter:0
//     }

// },
// beforeUpdate()
// {
//     // console.log('before',this.counter);
//     console.log('before',this.$refs['count'].textContent);
// },
// updated()
// {
//     // console.log('after',this.counter);
//      console.log('after',this.$refs['count'].textContent);
// }
// beforeMount()
// {
//     console.warn('beforeMount',this.$el)
// },
// mounted()
// {
//     console.warn('Mount',this.$el)
// }
// beforeCreate()
// {
//     this.name='yh'
//     alert('beforeCreated');
// },
// created()
// {
//     this.name='sh'
//     alert('created');
// }
// import javaJ from './java.vue'
// import phpP from './php.vue'
// import nodeN from './node.vue'
// // import childComp from './child.vue'
//     export default{
//         name:'HomePage',
//         components:{
//             javaJ,phpP,nodeN
//         },
//         data(){
//             return{
//                 tab:''
//             }
//         }
// components:{
//     childComp
// }
// data(){
//     return{
//         count:0
//     }
// },
// watch:{
//     count(val,prev)
//     {
//         if(val>5 && val>prev)
//         {
//             alert("stop counting")
//             this.count=0
//         }
//     }
// }
// export default{
//     name:'HomePage',
//     data(){
//         return{
//             dollars:100,
//             ruppeVal:70,
//             discount:10
//         }
//     },
//     methods:
//     {
//         getResultMethod()
//         {
//             return(this.dollars*this.ruppeVal)-this.discount;
//         }
//     },
//     computed:{
//         getResult(){
//             return(this.dollars*this.ruppeVal)-this.discount;
//         }
//     }
// }
// import userName from './user.vue'
// export default{
//     name:'HomePage',
//     components:{
//         userName
//     }
// }
// export default{
//     name:"HomePage",
//     data(){
//         return{
//             data:''
//         }
//     }
// }
// export default{
//     name:"homePage",
//     data()
//     {
//         return{
//             form:{
//                 email:'',
//                 password:'',
//                 country:'',
//                 technology:[],
//                 gender:''
//             },
//             error:[],

//         }
//     },
//     methods:{
//         login(){
//             this.error=[];
//             for(const item in this.form)
//             {
//                 if(this.form[item]==="" || this.form[item].length===0)
//                 {
//                     this.error.push(item)
//                 }
//             }
//             if(this.error.length===0)
//             {
//                 alert("data submitted")
//             }
//             console.log(this.form,this.error)
//         }
//     }
// }
// export default{
//     name:'HomePage',
//     methods:{
//         getData(){
//             // console.warn('hey');
//             this.$refs.input.focus();
//             this.$refs.input.style.color="green";
//             let val=this.$refs.input.value;
//             alert(val);

//         }
//     }
// }
// import userS from './user.vue'
//     export default{
//         name:'HomePage',
//         data(){
//             return{
//                 childUser:""
//             }
//         },
//         components:{
//             userS
//         },
//         methods:{
//             getUserName(name){
//                 // alert(name)
//                 this.childUser=name
//             }
//         }

// import childComp from './child.vue'
// import userPro from './user.vue'
// import studentNm from './student.vue'
// import teacherNm from './teacher.vue'
// export default{
//     name:'HomePage',
//     components:{
//         studentNm,
//         teacherNm
//     },
//     data()
//     {
//         return{
//             name:"qwerty"
//         }
//     }
// data()
// {
//     return{
//         color:false
//     }

// },
// computed:{
//     applyStyle(){
//         return{
//                 green:this.color,
//                 err:true,
//                 other:true
//             }

//     }
// }
// data()
// {
//     return{
//         text:"Ekta Rathi",
//         tag:"<h1>Hey Ekta</h1>",
//         tag2:"<h1>Hey Ekta3</h1>"
//     }
// }
// components:{
//     // childComp
//     userPro
// },
// methods:{
//     getData(name){
//         alert(name);
//     }

// },
// data()
// {
//     return{
//         users:[
//                 {name:'ekta1', email:'ekta1@gmail.com'},
//                 {name:'ekta2', email:'ekta2@gmail.com'},
//                 {name:'ekta3', email:'ekta3@gmail.com'}
//             ]
//         }
// }
// data()
// {
//     return{
//         user:{name:'xyz' , email:'ekta@gmail.com'}
//     }
// },
// methods:{
//     getData()
//     {
//         console.warn("parent fun call");
//     }
// }
// data()
// {
//     return{
//         // count:10
//         // email:null,
//         // password:null
//         // technology:[],
//         // who:null
//         // show:false
//         technology:['java','php','node','html'],
//         user:
//         [
//             {
//                 name:'Ekta',
//                 email:'rathiekta20@gmail.com'
//             },
//             {
//                 name:'sarita',
//                 email:'rathisarita18@gmail.com'
//             }
//         ]

//     }
// },
// methods:
// {
//     getConsole()
//     {
//         console.warn("function called")
//     },
//     getData()
//     {
//         console.log("values:",this.email,this.password)
//     }
// }

// data()
// {
//     return{
//         count:0
//     }
// },
// methods:
// {
//     text(data)
//     {
//         alert(data);
//     },
//     getConsole()
//     {
//         console.warn("function called")
//     },
//     getData()
//     {
//         this.count=this.count+1;
//     }
// }

// data()
// {
//     return{
//         email:'rathiekta20@gmail.com',
//         mobile:'9462421432',
//         // getName()
//         // {
//         //     return "Ekta Rathi"
//         // }
//     }
// },
// methods:
// {
//     // getName()
//     // {
//     //     return"Ekta Rathi"
//     // }

//     getName(name)
//     {
//         return name;
//     },
//     getData()
//     {
//         return{
//             name:'ekta',
//             mobile:'9988776655',
//             // email:'ekta1410@gmail.com'
//             email:this.email
//         }
//     }
// }
</script>

<style scoped>
h1 {
  color: Green;
}
.green {
  background-color: green;
  color: white;
}
.err {
  color: red;
}
.other {
  font-size: 50px;
}
</style>
