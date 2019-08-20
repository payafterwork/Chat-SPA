import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Chat from '@/components/Chat'


Vue.use(Router)

export default new Router({ 
  mode: 'history', // to remove /#/ routing
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    }, {
      path: '/chat',
      name: 'Chat',
      component: Chat,
      props: true,
     //Route gaurding: to prevent access through URL
      beforeEnter: (to,from, next)=>{
        if(to.params.name){ // if name param is passed
        	next() // go to /chat
        }else{
        	next({
        		name: 'Welcome'
        	})
        }
      }
    }
  ]
})
