<template>
  <div class="flex h-screen overflow-hidden">

    <!-- Sidebar -->
    <Sidebar :sidebarOpen="sidebarOpen" @close-sidebar="sidebarOpen = false" />

    <!-- Content area -->
    <div class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white">
      
      <!-- Site header -->
      <Header :sidebarOpen="sidebarOpen" @toggle-sidebar="sidebarOpen = !sidebarOpen" />

      <main>
        <div class="relative flex">

          <!-- Profile sidebar -->
          <ProfileSidebar :profileSidebarOpen="profileSidebarOpen" @close-profilesidebar="profileSidebarOpen = false" />

          <!-- Profile body -->
          <ProfileBody :profileSidebarOpen="profileSidebarOpen" @toggle-profilesidebar="profileSidebarOpen = !profileSidebarOpen" />
          
        </div>
      </main>

    </div> 

  </div>
</template>

<script>
import { ref } from 'vue'
import Sidebar from '../../partials/Sidebar.vue'
import Header from '../../partials/Header.vue'
import ProfileSidebar from '../../partials/team/ProfileSidebar.vue'
import ProfileBody from '../../partials/team/ProfileBody.vue'

export default {
  name: 'Profile',
  components: {
    Sidebar,
    Header,
    ProfileSidebar,
    ProfileBody,
  }, 
  setup() {

    const sidebarOpen = ref(false)
    const profileSidebarOpen = ref(false)

    return {
      sidebarOpen,
      profileSidebarOpen,
    }  
  }
}
</script>