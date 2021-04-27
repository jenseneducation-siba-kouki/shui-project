<template>
  <div class="register">
    <h1>Register</h1>
    <form @submit.prevent="handleSubmit">
      <input type="text"
       v-model="log.firstName" 
       placeholder="firstName" />

       <input type="text"
       v-model="log.lastName" 
       placeholder="lastName" />

       <input type="email"
       v-model="log.email" 
       placeholder="email" />

      <input type="password" 
      v-model="log.password" 
      placeholder="Password" />

      <button>Register</button>
      <router-link to="/login">Already have an account?</router-link>
    </form>  
  </div>
</template>

<script>
import axios from "axios"

export default {
   name: "register",
   data() {
     return{
       log:{
       firstName:'',
       lastName:'',
       email:'',
       password:'',
       }
     
     }
   },
   methods:{
    async handleSubmit(){
      const response = await axios.post(`${process.env.VUE_APP_API_URL}/api/register`,
      this.log
      );
      if(response.data.token){
        sessionStorage.setItem("auth", response.data.token);
        
    }
   }
}
}
</script>

<style scoped>
  form {
  padding: 4em 4em 2em;
  max-width: 400px;
  margin: auto;
  height: 22rem;
}
  input {
    display: block;
    box-sizing: border-box;
    width: 100%;
    margin:15px;
  }
  button{
    margin:20px;
  }
  a {
  color: #fff;
  text-align: center;
  display: block;
}
h1{
  padding:20px;
  text-align: center;
  color: #fff;
}


</style>