<template>
  <div class="Login">
   <form @submit.prevent="handleSubmit">
      <input type="email" 
      v-model="email" 
      placeholder="email" />
      <input type="password" 
      v-model="password" 
      placeholder="Password" />
      <button>Log in</button>
      </form>
  </div>
</template>

<script>

export default {
  name:"Login",
  data(){
    return{
      email:'',
      password:'',
    
    }
  },

}
</script>

<style scoped>
  form {
  padding: 4em 4em 4em;
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
    margin: 20px;
  }

</style>