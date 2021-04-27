<template>
  <div class="home">
    <header class="header">
    <img :src="require('@/assets/logo.png')" alt="logo" class="logo"/>
    </header>
    <main class="main">
    <img :src="require('@/assets/shui.png')" alt="shui" class="shui"  
    @click="$router.push('/Register')"/>
    <h1>Flow freely</h1>
    </main>
    <footer class="footer">
    <img :src="require('@/assets/waves.png')" alt="footer" class="waves" />
  </footer>
  </div>
</template>

<script>
export default {
  name: 'Home',

}
</script>
<style scoped>
.logo {
  height: 70px;
  width: 60px;
  margin-left:3rem;
  float: left;
}
h1 {
  font-size: 1em;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: white;
  margin-left:7rem
}
.shui{
margin-top:6rem;
}
.waves{
  width: 100%;
  display: block;
}
</style>
