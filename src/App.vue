<script setup>
import router from './router';
</script>

<template>
  <nav>
    <router-link to="/">Home</router-link>&nbsp;| 
    <router-link to="/Login">Admin</router-link>&nbsp;| 
    <router-link to="/about">Acerca de</router-link>    
  </nav>
  <router-view />  
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
