<template>
 <div class="word">
  <h1>{{msg}}</h1>
  <v-btn flat router to="/signup">
    <v-icon left>people</v-icon>
    Signup
  </v-btn>
 </div>
</template>
<script>

 export default{
  name: 'HelloWorld',
  data (){
   return{
    msg:'Blog'
   }
  }
 }
</script>
<style scoped>

</style>
