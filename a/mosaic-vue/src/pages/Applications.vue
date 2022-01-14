<template>
  <div class="flex h-screen overflow-hidden">

    <!-- Sidebar -->
    <Sidebar :sidebarOpen="sidebarOpen" @close-sidebar="sidebarOpen = false" />

    <!-- Content area -->
    <div class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      
      <!-- Site header -->
      <Header :sidebarOpen="sidebarOpen" @toggle-sidebar="sidebarOpen = !sidebarOpen" />

      <main>
        <div class="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

          <!-- Page header -->
          <div class="mb-5">
            <!-- Title -->
            <h1 class="text-2xl md:text-3xl text-gray-800 font-bold">Find the app that’s right for you ✨</h1>
          </div>

          <!-- Search form -->
          <div class="max-w-xl mb-5">
            <form class="relative">
              <label for="app-search" class="sr-only">Search</label>
              <input id="app-search" class="form-input w-full pl-9 py-3 focus:border-gray-300" type="search" placeholder="Search…" />
              <button class="absolute inset-0 right-auto group" type="submit" aria-label="Search">
                <svg class="w-4 h-4 flex-shrink-0 fill-current text-gray-400 group-hover:text-gray-500 ml-3 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
                  <path d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
                </svg>
              </button>
            </form>
          </div>

          <!-- Filters -->
          <div class="mb-4 border-b border-gray-200">
            <ul class="text-sm font-medium flex flex-nowrap -mx-4 sm:-mx-6 lg:-mx-8 overflow-x-scroll no-scrollbar">
              <li class="pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8">
                <router-link class="text-indigo-500 whitespace-nowrap" to="#0">View All</router-link>
              </li>
              <li class="pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8">
                <router-link class="text-gray-500 hover:text-gray-600 whitespace-nowrap" to="#0">Web Sprint</router-link>
              </li>
              <li class="pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8">
                <router-link class="text-gray-500 hover:text-gray-600 whitespace-nowrap" to="#0">Marketing</router-link>
              </li>
              <li class="pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8">
                <router-link class="text-gray-500 hover:text-gray-600 whitespace-nowrap" to="#0">Development</router-link>
              </li>
              <li class="pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8">
                <router-link class="text-gray-500 hover:text-gray-600 whitespace-nowrap" to="#0">Design</router-link>
              </li>
            </ul>
          </div>

          <!-- Page content -->
          <div>

            <!-- Cards 1 (Trending apps) -->
            <div class="mt-8">
              <h2 class="text-xl text-gray-800 font-bold mb-5">Trending apps</h2>
              <div class="grid grid-cols-12 gap-6">
                <ApplicationsCard01
                  v-for="item in items01"
                  :key="item.id"
                  :item="item"
                />
              </div>
            </div>
            
            <!-- Cards 2 (Premium but worth it) -->
            <div class="mt-8">
              <h2 class="text-xl text-gray-800 font-bold mb-5">Premium but worth it</h2>
              <div class="grid grid-cols-12 gap-6">
                <ApplicationsCard02
                  v-for="item in items02"
                  :key="item.id"
                  :item="item"
                />
              </div>
            </div>

            <!-- Cards 3 (Popular categories) -->
            <div class="mt-8">
              <h2 class="text-xl text-gray-800 font-bold mb-5">Popular categories</h2>
              <div class="grid grid-cols-12 gap-6">
                <ApplicationsCard03
                  v-for="item in items03"
                  :key="item.id"
                  :item="item"
                />
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
import Sidebar from '../partials/Sidebar.vue'
import Header from '../partials/Header.vue'
import ApplicationsCard01 from '../partials/applications/ApplicationsCard01.vue'
import ApplicationsCard02 from '../partials/applications/ApplicationsCard02.vue'
import ApplicationsCard03 from '../partials/applications/ApplicationsCard03.vue'

import Image01 from '../images/applications-image-01.jpg'
import Image02 from '../images/applications-image-02.jpg'
import Image03 from '../images/applications-image-03.jpg'
import Image04 from '../images/applications-image-04.jpg'
import Image05 from '../images/applications-image-05.jpg'
import Image06 from '../images/applications-image-06.jpg'
import Image07 from '../images/applications-image-07.jpg'
import Image08 from '../images/applications-image-08.jpg'

export default {
  name: 'Applications',
  components: {
    Sidebar,
    Header,
    ApplicationsCard01,
    ApplicationsCard02,
    ApplicationsCard03,
  },
  setup() {

    const sidebarOpen = ref(false)

    const items01 = ref([
      {
        id: 0,
        image: Image01,
        title: 'Form Builder CP',
        link: '#0',
        content: 'Master Digital Marketing Strategy, Social Media Marketing, Analytics & More!',
        rating: '4.2',
        feat01: '23 hours on-demand video',
        feat02: '37 articles',
        feat03: 'Access on mobile and TV',
        feat04: '8K+ active installations',
      },
      {
        id: 1,
        image: Image02,
        title: 'Form Builder CP',
        link: '#0',
        content: 'Master Digital Marketing Strategy, Social Media Marketing, Analytics & More!',
        rating: '4.9',
        feat01: '23 hours on-demand video',
        feat02: '37 articles',
        feat03: 'Access on mobile and TV',
        feat04: '8K+ active installations',
      },
      {
        id: 2,
        image: Image03,
        title: 'Form Builder CP',
        link: '#0',
        content: 'Master Digital Marketing Strategy, Social Media Marketing, Analytics & More!',
        rating: '4.3',
        feat01: '23 hours on-demand video',
        feat02: '37 articles',
        feat03: 'Access on mobile and TV',
        feat04: '8K+ active installations',
      },
      {
        id: 3,
        image: Image04,
        title: 'Form Builder CP',
        link: '#0',
        content: 'Master Digital Marketing Strategy, Social Media Marketing, Analytics & More!',
        rating: '4.4',
        feat01: '23 hours on-demand video',
        feat02: '37 articles',
        feat03: 'Access on mobile and TV',
        feat04: '8K+ active installations',
      },      
    ])

    const items02 = ref([
      {
        id: 0,
        image: Image05,
        title: 'Form Builder CP',
        link: '#0',
        content: 'Master Digital Marketing Strategy, Social Media Marketing, Analytics & More!',
        price: '$89.00',
        deal: '$199.00'
      },
      {
        id: 1,
        image: Image06,
        title: 'Form Builder CP',
        link: '#0',
        content: 'Master Digital Marketing Strategy, Social Media Marketing, Analytics & More!',
        price: '$89.00',
        deal: '$199.00'
      },
      {
        id: 2,
        image: Image07,
        title: 'Form Builder CP',
        link: '#0',
        content: 'Master Digital Marketing Strategy, Social Media Marketing, Analytics & More!',
        price: '$89.00',
        deal: '$199.00'
      },
      {
        id: 3,
        image: Image08,
        title: 'Form Builder CP',
        link: '#0',
        content: 'Master Digital Marketing Strategy, Social Media Marketing, Analytics & More!',
        price: '$89.00',
        deal: '$199.00'
      },      
    ])

    const items03 = ref([
      {
        id: 0,
        title: 'Form Builder CP',
        link: '#0',
      },
      {
        id: 1,
        title: 'Form Builder CP',
        link: '#0',
      },
      {
        id: 2,
        title: 'Form Builder CP',
        link: '#0',
      },
      {
        id: 3,
        title: 'Form Builder CP',
        link: '#0',
      },      
    ])

    return {
      sidebarOpen,
      items01,
      items02,
      items03,
    }  
  }
}
</script>