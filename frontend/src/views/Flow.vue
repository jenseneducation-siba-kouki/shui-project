<template>
<div class="Flow">
<div class="list">
    <ul>
          <li v-for="stream in streams" :key="stream._id">
          <p> {{ stream.tags }}</p>
          <p> {{ stream.date }} </p>
          <p> {{ stream.content }} </p>
        </li>
    </ul>
</div>
<!-- <router-link to="/settings">add streams</router-link> -->
</div>
    
</template>

<script>
import axios from "axios";
export default {
    name: "Flow",
    async created() {
       axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${sessionStorage.getItem("auth")}`;
      // const response = await axios.get("/api/tags");
      // this.streams = response.data;
      // console.log(response.data);
  
  },
  data() {
    return {
      userID: null,
      streams: [],
    };
  },
};
</script>

<style scoped>
</style>