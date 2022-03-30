import 'windi.css'
import '../lib/style'

import { useDark } from '@vueuse/core'
import { ref, onMounted } from 'vue'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: {
      order: [
        'Introduction',
        'Component',
        'Widget',
        'Practice'
      ]
    }
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      // Array of plain string values or MenuItem shape (see below)
      items: ['light', 'dark'],
      // Property that specifies if the name of the item will be displayed
      showName: false,
    },
  },
}


export const decorators = [(story, context) => {

  return {
    components: { story },
    setup () {
      const { theme } = context.globals

      const dom = ref()    
      const isDark = useDark()
      isDark.value = theme === 'dark'

      onMounted(() => {
        if (!dom.value) return

        const parent = dom.value.parentNode
        
        if (parent) {
          parent.style.height = '100%'

          const body = parent.parentNode
          if (body) {
            body.style.height = '100%'
            body.style.padding = 0
            const html = body.parentNode 
            if (html) {
              html.style.height = '100%'
            }
          }
        }
      })


      return {
        isDark,
        dom 
      }
    },
    template: `<div 
      ref="dom" 
      class="h-full p-4"
      :class="isDark ? 'bg-gray-800' : 'bg-white'">
      <story />
    </div>`,
  }
}]