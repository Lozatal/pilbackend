<template>
  <form @submit="creerMembre">
    <input type='text' v-model="Nom" placeholder="Nom">
    <input type='email' v-model="Email" placeholder="Email">
    <input type='password' v-model="Password" placeholder="Password">
    <input type="submit" value="Creer compte">
    <router-link to="/">Annuler</router-link>
  </form>
</template>

<script>
export default {
  name: 'MembreCreation',
  data () {
    return {
      Nom: '',
      Email: '',
      Password: ''
    }
  },
  methods : {

  }
}
</script>

<style scoped>
form{
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  width:50%;
  box-sizing: border-box;
  padding: 2em;
  background-color: black;
  border-radius: 20px;
  margin-top: 250px;
}
input{
  width: 100%;
  box-sizing: border-box;
  margin: auto;
  text-align: center;
}
input:nth-child(4){
  margin-top: 1em;
}
a{
  width: 100%;
  text-align: center;
  color: white;
  text-decoration: none;
  margin-top: 1em;
}
</style>
