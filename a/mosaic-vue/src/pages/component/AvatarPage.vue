<template>
  <div class="flex h-screen overflow-hidden">

    <!-- Sidebar -->
    <Sidebar :sidebarOpen="sidebarOpen" @close-sidebar="sidebarOpen = false" />

    <!-- Content area -->
    <div class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white">
      
      <!-- Site header -->
      <Header :sidebarOpen="sidebarOpen" @toggle-sidebar="sidebarOpen = !sidebarOpen" />

      <main>
        <div class="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

          <!-- Page header -->
          <div class="mb-8">
            <h1 class="text-2xl md:text-3xl text-gray-800 font-bold">Avatar ✨</h1>
          </div>

          <div class="border-t border-gray-200">

            <!-- Components -->
            <div class="space-y-8 mt-8">

              <!-- Basic Avatars -->
              <div>
                <h2 class="text-2xl text-gray-800 font-bold mb-6">Basic Avatars</h2>
                <div class="flex flex-wrap items-center -m-1.5">
                  <div class="m-1.5">
                    <!-- Start -->
                    <img class="rounded-full" src="../../images/avatar-01.jpg" width="24" height="24" alt="Avatar" />
                    <!-- End -->
                  </div>
                  <div class="m-1.5">
                    <!-- Start -->
                    <img class="rounded-full" src="../../images/avatar-01.jpg" width="28" height="28" alt="Avatar" />
                    <!-- End -->
                  </div>
                  <div class="m-1.5">
                    <!-- Start -->
                    <img class="rounded-full" src="../../images/avatar-01.jpg" width="32" height="32" alt="Avatar" />
                    <!-- End -->
                  </div>
                  <div class="m-1.5">
                    <!-- Start -->
                    <img class="rounded-full" src="../../images/avatar-01.jpg" width="40" height="40" alt="Avatar" />
                    <!-- End -->
                  </div>
                  <div class="m-1.5">
                    <!-- Start -->
                    <img class="rounded-full" src="../../images/avatar-01.jpg" width="64" height="64" alt="Avatar" />
                    <!-- End -->
                  </div>
                </div>
              </div>

              <!-- Avatars with Notification -->
              <div>
                <h2 class="text-2xl text-gray-800 font-bold mb-6">Avatars with Notification</h2>
                <div class="flex flex-wrap items-center -m-1.5">
                  <div class="m-1.5">
                    <!-- Start -->
                    <div class="relative">
                      <img class="rounded-full" src="../../images/avatar-01.jpg" width="24" height="24" alt="Avatar" />
                      <div class="absolute top-0 right-0 w-2 h-2 bg-red-500 border-2 border-white rounded-full"></div>
                    </div>
                    <!-- End -->
                  </div>
                  <div class="m-1.5">
                    <!-- Start -->
                    <div class="relative">
                      <img class="rounded-full" src="../../images/avatar-01.jpg" width="28" height="28" alt="Avatar" />
                      <div class="absolute top-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></div>
                    </div>
                    <!-- End -->
                  </div>
                  <div class="m-1.5">
                    <!-- Start -->
                    <div class="relative">
                      <img class="rounded-full" src="../../images/avatar-01.jpg" width="32" height="32" alt="Avatar" />
                      <div class="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 border-2 border-white rounded-full"></div>
                    </div>
                    <!-- End -->
                  </div>
                  <div class="m-1.5">
                    <!-- Start -->
                    <div class="relative">
                      <img class="rounded-full" src="../../images/avatar-01.jpg" width="40" height="40" alt="Avatar" />
                      <div class="absolute top-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                    </div>
                    <!-- End -->
                  </div>
                  <div class="m-1.5">
                    <!-- Start -->
                    <div class="relative">
                      <img class="rounded-full" src="../../images/avatar-01.jpg" width="64" height="64" alt="Avatar" />
                      <div class="absolute top-1 right-1 w-3 h-3 bg-red-500 border-2 border-white rounded-full"></div>
                    </div>
                    <!-- End -->
                  </div>
                </div>
              </div>

              <!-- Avatars with Placeholder Icon -->
              <div>
                <h2 class="text-2xl text-gray-800 font-bold mb-6">Avatars with Placeholder Icon</h2>
                <div class="flex flex-wrap items-center -m-1.5">
                  <div class="m-1.5">
                    <!-- Start -->
                    <div class="flex items-center justify-center bg-gray-100 rounded-full w-6 h-6 text-[10px] font-semibold uppercase text-gray-500">MS</div>
                    <!-- End -->
                  </div>
                  <div class="m-1.5">
                    <!-- Start -->
                    <div class="flex items-center justify-center bg-gray-100 rounded-full w-7 h-7 text-[10px] font-semibold uppercase text-gray-500">MS</div>
                    <!-- End -->
                  </div>
                  <div class="m-1.5">
                    <!-- Start -->
                    <div class="flex items-center justify-center bg-gray-100 rounded-full w-8 h-8 text-xs font-semibold uppercase text-gray-500">MS</div>
                    <!-- End -->
                  </div>
                  <div class="m-1.5">
                    <!-- Start -->
                    <div class="flex items-center justify-center bg-gray-100 rounded-full w-10 h-10 text-sm font-semibold uppercase text-gray-500">MS</div>
                    <!-- End -->
                  </div>
                  <div class="m-1.5">
                    <!-- Start -->
                    <div class="flex items-center justify-center bg-gray-100 rounded-full w-16 h-16 text-lg font-semibold uppercase text-gray-500">MS</div>
                    <!-- End -->
                  </div>
                </div>
              </div>

              <!-- Avatars Groups -->
              <div>
                <h2 class="text-2xl text-gray-800 font-bold mb-6">Avatars Groups</h2>
                <div class="flex flex-wrap items-center -m-1.5">
                  <div class="m-1.5">
                    <!-- Start -->
                    <div class="flex -space-x-3 -ml-0.5">
                      <img class="rounded-full border-2 border-white box-content" src="../../images/avatar-02.jpg" width="24" height="24" alt="Avatar" />
                      <img class="rounded-full border-2 border-white box-content" src="../../images/avatar-03.jpg" width="24" height="24" alt="Avatar" />
                      <img class="rounded-full border-2 border-white box-content" src="../../images/avatar-04.jpg" width="24" height="24" alt="Avatar" />
                      <img class="rounded-full border-2 border-white box-content" src="../../images/avatar-05.jpg" width="24" height="24" alt="Avatar" />
                      <img class="rounded-full border-2 border-white box-content" src="../../images/avatar-06.jpg" width="24" height="24" alt="Avatar" />
                    </div>
                    <!-- End -->
                  </div>
                  <div class="m-1.5">
                    <!-- Start -->
                    <div class="flex -space-x-3 -ml-0.5">
                      <img class="rounded-full border-2 border-white box-content" src="../../images/avatar-02.jpg" width="28" height="28" alt="Avatar" />
                      <img class="rounded-full border-2 border-white box-content" src="../../images/avatar-03.jpg" width="28" height="28" alt="Avatar" />
                      <img class="rounded-full border-2 border-white box-content" src="../../images/avatar-04.jpg" width="28" height="28" alt="Avatar" />
                      <img class="rounded-full border-2 border-white box-content" src="../../images/avatar-05.jpg" width="28" height="28" alt="Avatar" />
                      <img class="rounded-full border-2 border-white box-content" src="../../images/avatar-06.jpg" width="28" height="28" alt="Avatar" />
                    </div>
                    <!-- End -->
                  </div>
                  <div class="m-1.5">
                    <!-- Start -->
                    <div class="flex -space-x-3 -ml-0.5">
                      <img class="rounded-full border-2 border-white box-content" src="../../images/avatar-02.jpg" width="32" height="32" alt="Avatar" />
                      <img class="rounded-full border-2 border-white box-content" src="../../images/avatar-03.jpg" width="32" height="32" alt="Avatar" />
                      <img class="rounded-full border-2 border-white box-content" src="../../images/avatar-04.jpg" width="32" height="32" alt="Avatar" />
                      <img class="rounded-full border-2 border-white box-content" src="../../images/avatar-05.jpg" width="32" height="32" alt="Avatar" />
                      <img class="rounded-full border-2 border-white box-content" src="../../images/avatar-06.jpg" width="32" height="32" alt="Avatar" />
                    </div>
                    <!-- End -->
                  </div>
                  <div class="m-1.5">
                    <!-- Start -->
                    <div class="flex -space-x-4 -ml-0.5">
                      <img class="rounded-full border-2 border-white box-content" src="../../images/avatar-02.jpg" width="40" height="40" alt="Avatar" />
                      <img class="rounded-full border-2 border-white box-content" src="../../images/avatar-03.jpg" width="40" height="40" alt="Avatar" />
                      <img class="rounded-full border-2 border-white box-content" src="../../images/avatar-04.jpg" width="40" height="40" alt="Avatar" />
                      <img class="rounded-full border-2 border-white box-content" src="../../images/avatar-05.jpg" width="40" height="40" alt="Avatar" />
                      <img class="rounded-full border-2 border-white box-content" src="../../images/avatar-06.jpg" width="40" height="40" alt="Avatar" />
                    </div>
                    <!-- End -->
                  </div>
                  <div class="m-1.5">
                    <!-- Start -->
                    <div class="flex -space-x-7 -ml-0.5">
                      <img class="rounded-full border-2 border-white box-content" src="../../images/avatar-02.jpg" width="64" height="64" alt="Avatar" />
                      <img class="rounded-full border-2 border-white box-content" src="../../images/avatar-03.jpg" width="64" height="64" alt="Avatar" />
                      <img class="rounded-full border-2 border-white box-content" src="../../images/avatar-04.jpg" width="64" height="64" alt="Avatar" />
                      <img class="rounded-full border-2 border-white box-content" src="../../images/avatar-05.jpg" width="64" height="64" alt="Avatar" />
                      <img class="rounded-full border-2 border-white box-content" src="../../images/avatar-06.jpg" width="64" height="64" alt="Avatar" />
                    </div>
                    <!-- End -->
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>        
      </main>

    </div> 

  </div>
</template>

<script>
import { ref } from 'vue'
import Sidebar from '../../partials/Sidebar.vue'
import Header from '../../partials/Header.vue'

export default {
  name: 'AvatarPage',
  components: {
    Sidebar,
    Header,
  },
  setup() {

    const sidebarOpen = ref(false)

    return {
      sidebarOpen,
    }  
  }
}
</script>