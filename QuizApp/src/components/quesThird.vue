<template>
    <div class="container">
        <div class="heading">
            <h1>Math Quiz</h1>
        </div>
        <div class="question" >
           Q1) 2+2 
        </div>  
        <div class="options">
            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault1" v-on:click="quesOn('2')">
                <label class="form-check-label" for="flexRadioDefault1" >
                   2
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault1" v-on:click="quesOn('3')">
                <label class="form-check-label" for="flexRadioDefault1" >
                   3
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault1" v-on:click="quesOn('4')">
                <label class="form-check-label" for="flexRadioDefault1" >
                   4
                </label>
            </div>
        </div>
        <div class="question" >
           Q2) 2-2 
        </div>  
        <div class="options">
            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault1" v-on:click="quesSec('0')">
                <label class="form-check-label" for="flexRadioDefault1" >
                   0
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault1" v-on:click="quesSec('2')">
                <label class="form-check-label" for="flexRadioDefault1" >
                   2
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault1" v-on:click="quesSec('3')">
                <label class="form-check-label" for="flexRadioDefault1" >
                   3
                </label>
            </div>
        </div>
        <div class="question" >
           Q3) 2*2 
        </div>  
        <div class="options">
            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault3" id="flexRadioDefault1" v-on:click="quesTh('4')">
                <label class="form-check-label" for="flexRadioDefault1" >
                   4
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault3" id="flexRadioDefault1" v-on:click="quesTh('0')">
                <label class="form-check-label" for="flexRadioDefault1" >
                   0
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault3" id="flexRadioDefault1" v-on:click="quesTh('1')">
                <label class="form-check-label" for="flexRadioDefault1" >
                   1
                </label>
            </div>
        </div>
        <button class="btn btn-primary" v-on:click="totalMarks">Submit</button>
    
    </div>

</template>

<script>
export default{
    name:'quesThird',
    data(){
        return{
            options:"",
            marks1:"",
            marks2:"",
            marks3:"",
            total:""
            
        }
    },
    methods:{
        quesOn(option){

            this.options=option;
            if(this.options=='4'){
                
                this.marks1=1;
               
            }   
            else{
                this.marks1=0;
               
            }
        },
        quesSec(option)
        {        
            this.options=option;
            if(this.options=='0'){
               
                this.marks2=1;
                    
            }   
            else{
                
                this.marks2=0;
                    
            }
        },
        quesTh(option)
        {        
            this.options=option;
            if(this.options=='4'){
                this.marks3=1;
                   
            }   
            else{
                this.marks3=0;
                    
            }
        },
        totalMarks(){
            this.total=this.marks1+this.marks2+this.marks3;
           this.$router.push({name:"totalResult" ,"params":{marks:this.total}}); 
        }
    }
}
</script>
<style scoped>
.container{
    width: 700px;
    height: 690px;
    padding: 10px;
    margin: auto;
    box-shadow: -1px 1px 13px 1px #d4d1d1;
}
.question{
    font-size: 35px;
    background-color: whitesmoke;
    margin-top:5px;
}
.options{
    padding:10px;
}
label{
   padding:5px;
    width:640px;
}
input{
    padding:5px;
}
.heading{
    text-align: center;
    border-bottom: 1px solid rgba(83, 82, 82, 0.604);
}
button{
    margin-left:290px;
    width: 150px;
    height: 50px;
    font-size: 20px;
}
</style>