import { createRouter, createWebHistory } from 'vue-router'

// import frontend layouts
import FrontendLayouts from '@/layouts/Frontend.vue'

// import front page
import HomeView from '@/views/frontend/Home.vue'
import AboutView from '@/views/frontend/About.vue'
import Contact from '@/views/frontend/Contact.vue'
import Login from '@/views/frontend/Login.vue'
import Portfolio from '@/views/frontend/Portfolio.vue'
import Service from '@/views/frontend/Service.vue'
import Register from '@/views/frontend/Register.vue'
import ForgotPassword from '@/views/frontend/ForgotPassword.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //frontend route
    {
      path: '/',
      name: 'Frontend',
      component: FrontendLayouts, 
      //ลูก
      children: [
        {
          path:'',
          name: 'Home',
          component: HomeView,
          meta:{
            title:'หน้าหลัก'
          }
        },
        {
          path:'about',
          name: 'About',
          component: AboutView,
          meta:{
            title:'เกี่ยวกับ'
          }
        },
        {
          path:'contact',
          name: 'Contact',
          component: Contact,
          meta:{
            title:'ติดต่อ'
          }
        },
        {
          path:'forgotPassword',
          name: 'ForgotPassword',
          component: ForgotPassword,
          meta:{
            title:'ลืมรหัสผ่าน'
          }
        },
        {
          path:'login',
          name: 'Login',
          component: Login,
          meta:{
            title:'เข้าสู่ระบบ'
          }
        },
        {
          path:'portfolio',
          name: 'Portfolio',
          component: Portfolio,
          meta:{
            title:'ผลงาน'
          }
        },
        {
          path:'service',
          name: 'Service',
          component: Service,
          meta:{
            title:'บริการ'
          }
        },
        {
          path:'register',
          name: 'Register',
          component: Register,
          meta:{
            title:'สมัครสมาชิก'
          }
        },
      ]
    }
  ]
})

export default router
