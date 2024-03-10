<template>
<div class="container">
    <table>
        <tr>
            <th>Fields</th>
            <th>Input</th>
            <th>Input selected</th>
        </tr>
        <tr>
            <td>Enter Name:</td>
            <td><input v-model="text" /></td>
            <td>{{text}}</td>
        </tr>
        <tr>
            <td>Gender:</td>
            <td>
                <input type="radio" id="male" value="male" v-model="radio" />
                <label for="Male">Male</label>
                <input type="radio" id="female" value="female" v-model="radio" />
                <label for="Female">Female</label></td>
            <td>{{radio}}</td>
        </tr>
        <tr>
            <td>Subject:</td>
            <td>
                <input type="checkbox" id="Cpp" value="Cpp" v-model="subject" />
                <label for="Cpp">Cpp</label>
                <input type="checkbox" id="C" value="C" v-model="subject" />
                <label for="C">C</label>
                <input type="checkbox" id="C#" value="C#" v-model="subject" />
                <label for="C#">C#</label>
            </td>
            <td>{{subject}}</td>
        </tr>
        <tr>
            <td>Select Year:</td>
            <td>
                <select v-model="selected">
                    <option disabled value="">Please select one</option>
                    <option>2022</option>
                    <option>2021</option>
                    <option>2020</option>
                </select>
            </td>
            <td>{{selected}}</td>
        </tr>
        <tr>
            <td>Select Course:</td>
            <td>
                <select v-model="multiSelected" multiple style="width:100px">
                    <option>BCA</option>
                    <option>MCA</option>
                    <option>B.TECH</option>
                    <option>M.TECH</option>
                </select>
            </td>
            <td>{{multiSelected}}</td>
        </tr>
        <tr>
        <td>Terms and Conditions</td>
        <td><input type="checkbox" id="checkbox" v-model="checked"><label for="checkbox">Accept</label></td>
        <td>{{ checked }}</td>
        </tr>
    </table>
</div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            text: 'Eg. Ekta Rathi',
            subject: [],
            radio: 'male',
            selected: '2021',
            multiSelected:'BCA',
            checked:false
        }
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

.container {
    width: 400px;
    height: 500px;
    margin: auto;
    padding: 12px;
}

table {
   box-shadow:0px 0px 3px 0px grey;
}

table td,th {  
    padding: 5px; 
    
}
table tr:nth-child(even)
{
  background: #14444f;
  color: white;
}
table tr:nth-child(odd)
{
  background: #d2d2d2;
  color: rgb(19, 18, 18);
}
</style>
