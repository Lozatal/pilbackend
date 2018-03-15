import Vue from 'vue'
import Router from 'vue-router'
import Connexion from '@/components/Identification/Connexion'
import MembreCreation from '@/components/Identification/MembreCreation'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Connexion
    },
    {
      path: '/membre-creation',
      component: MembreCreation
    }
  ]
})
