<template>
  <div class="register">
    <form @submit.prevent="handleSubmit">
      <input type="text"
       v-model="firstName" 
       placeholder="firstName" />

       <input type="text"
       v-model="lastName" 
       placeholder="lastName" />

       <input type="email"
       v-model="email" 
       placeholder="email" />

      <input type="password" 
      v-model="password" 
      placeholder="Password" />

      <input type="passwordConfirm"
        v-model="passwordConfirm"
        placeholder="passwordConfirm"
      />
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
       firstName:'',
       lastName:'',
       email:'',
       password:'',
       passwordConfirm:'',
     }
   },
   methods:{
    async handleSubmit(){
      const response = await axios.post('register', {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
        passwordConfirm: this.passwordConfirm
      });
      console.log(response)
      // this.$router.push('/login')
    }
   }
}
</script>

<style scoped>
  form {
  padding: 4em 4em 2em;
  max-width: 400px;
  margin: auto;
  height: 29rem;
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


</style>