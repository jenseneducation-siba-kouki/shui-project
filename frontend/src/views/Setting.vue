<template>
 <div class="pop">
      <h2>streams</h2>
      <ul class="tags">
        <li v-for="stream in streams" :key="stream._id">

          <span @click="addStream(stream)">{{ stream.tags }}</span>
          <!-- <p>{{stream.date}}</p>
          <p>{{stream.content}}</p> -->
          <button @click="removeTag(stream)">
            <!-- <svg class="remove" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-12v-2h12v2z"/></svg> -->
            </button>
            </li>
        </ul>
        <div>
       
      <div>  
        <input type="text" placeholder="streams..">
        <button class="check">
          <!-- <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg> -->

          </button> <br><br>
      <button class="remove" @click="removeUser">Delete user</button>
      <br><br>
       <router-link to="/flow">gooo back</router-link>
  </div>
      </div>
    </div>
    
</template>

<script>
import axios from "axios";
export default {
    name: "Settings",
    async created() {
     axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${sessionStorage.getItem("auth")}`;
    const res = await axios.get("http://localhost:5000/api/flow");
    this.streams = res.data;
    console.log(res.data);
  },
  data() {
    return {
      userID: null,
      streams: [],
    };
  },
  methods: {
    addStream(stream) {
      return axios.post("/api/tags", stream).then(() => {
        this.$router.go(-1);
      });
    },
    removeUser() {
      return axios
        .delete("/api/user", {
          headers: {
            "Content-type": "application/json",
          },
        })
        .then(() => {
          sessionStorage.removeItem("auth");
          this.$router.push({ name: "Login" });
        });
    },
  },
};
</script>

<style scoped>
</style>