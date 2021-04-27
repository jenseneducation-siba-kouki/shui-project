<template>
  <div class="Login">
   <form @submit.prevent="handleSubmit">
      <input type="username" 
      v-model="log.username" 
      placeholder="username" />
      <input type="password" 
      v-model="log.password" 
      placeholder="password" />
      <button>Log in</button>
      </form>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name:"Login",
  data(){
    return{
      log: {
      username:'',
      password:'',
      },
    }
  },
  methods: {
     async handleSubmit(){
      const response = await axios.post(`${process.env.VUE_APP_API_URL}/api/login`,
      this.log
      );

         if(response.data.token){
         axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.token}`;
        sessionStorage.setItem("auth", response.data.token);
        this.$router.push({ name: "Flow" });
         }
    }
  }

}
</script>

<style scoped>
  form {
  padding: 4em 4em 4em;
  max-width: 400px;
  margin: auto;
  height: 27rem;
}
  input {
    display: block;
    box-sizing: border-box;
    width: 100%;
    margin:15px;
  }
  button{
    margin: 20px;
  }

</style>