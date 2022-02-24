import ISidebar from './ISidebar.vue'
import vueRouter from 'storybook-vue3-router'
import { IDashboardIcon, IBarChartIcon, IUsergroupIcon, IButton } from '../../components'

export default {
  title: 'Widget/ISidebar',
  component: ISidebar,
  argTypes: {
    type: { 
      control: { 
        type: 'radio', options: [undefined, 'primary', 'normal', 'ghost'] } 
      },
  },
};

const Template = (args) => ({
  components: { ISidebar, IButton },
  setup() {
    return { ...args }
  },
  data () {
    return {
      sidebarOpen: false,
      options: [{
        name: 'page',
        value: [
          { 
            name: 'Dashboard',
            icon: IDashboardIcon,
            value: '/'
          },
          {
            name: 'Analytics',
            icon: IBarChartIcon,
            value: '/analytics'
          },
          {
            name: 'Team',
            icon: IUsergroupIcon,
            value: [
              { name: 'Team-Tab', value: '/team/tabs' },
              { name: 'Team-Tiles', value: '/team/tiles' },
              { name: 'Team-profile', value: '/team/profile' },
            ]
          }
        ]
      }, {
        name: 'more',
        value: [
          { 
            name: 'Dashboard',
            icon: IDashboardIcon,
            value: '/dashboard'
          },
          {
            name: 'Analytics',
            icon: IBarChartIcon,
            value: '/analytics'
          },
        ]
      }]
    }
  },
  template: `
    <div style="display: flex; min-height: 600px;">
      <ISidebar :options="options" :sidebar-open="sidebarOpen" @close-sidebar="sidebarOpen = false">
        
      </ISidebar>
      <div style="background: pink; flex: 1; text-align: right;">
        <IButton @click.stop="sidebarOpen = !sidebarOpen"> Toggle Sidebar </IButton>
        {{ sidebarOpen }}
      </div>
    </div>
  `,
});

export const Default = Template.bind({})

Default.args = {
  type: 'primary',
}

Default.decorators = [
  /* this is the basic setup with no params passed to the decorator */
  vueRouter()
]