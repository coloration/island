import IBanner from './IBanner.vue'
import { IDashboardIcon } from '../icon'
export default {
  title: 'Component/banner/IBanner',
  component: IBanner,
  argTypes: {
    type: { 
      description: '不设置时跟随主题',
      options: [undefined, 'light', 'dark'],
      control: { 
        type: 'inline-radio' 
      },
    },
    // size: { 
    //   options: ['md', 'lg'],
    //   control: { 
    //     type: 'inline-radio' 
    //   },
    // },
    icon: { 
      options: [undefined, 'warning', 'error', 'success', 'info'],
      control: { 
        type: 'inline-radio' 
      },
    },
    color: { 
      options: ['gray', 'green', 'indigo', 'light-blue', 'yellow', 'red', 'blue'],
      control: { 
        type: 'inline-radio' 
      },
    },
    close: { 
      control: { 
        type: 'boolean' 
      },
    },
  },
};

const Template = (args) => ({
  components: { IBanner },
  setup() {
    
    return { args }
  },
  template: `
    <IBanner v-bind="args">{{ args.content }}</IBanner>
  `,
});

export const Default = Template.bind({})

Default.args = {
  content: 'We’re currently experiencing an increase in inquiries. There may be a delay in responses from the Support. We’re currently experiencing an increase in inquiries. '
}

export const WithCustomIcon = (args) => ({
  components: { IBanner, IDashboardIcon },
  setup() {
    
    return { args }
  },
  template: `
    <IBanner v-bind="args">
      <template v-slot:icon>
        <IDashboardIcon />
      </template>

      We’re currently experiencing an increase in inquiries. There may be a delay in responses from the Support. We’re currently experiencing an increase in inquiries.
    </IBanner>
  `,
})

