<template>
  <form @submit="seConnecter">
    <input type='email' v-model="Email" placeholder="Email">
    <input type='password' v-model="Password" placeholder="Password">
    <input type="submit" value="Connexion">
    <router-link to="/membre-creation">Créer un compte</router-link>
  </form>
</template>

<script>
export default {
	name: 'Connexion',
	data () {
	    return {
	    	Email: '',
	    	Password: ''
	    }
	},
	methods: {

	}
}
</script>

<style scoped>
form{
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  margin-top: 250px;
  width: 50%;
  box-sizing: border-box;
  padding: 2em;
  background-color: black;
  border-radius: 20px;
}
input{
  width: 100%;
  box-sizing: border-box;
  margin: auto;
  text-align: center;
}
input:nth-child(3){
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
