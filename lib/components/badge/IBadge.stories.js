import IBadge from './IBadge.vue'

export default {
  title: 'Component/badge/IBadge',
  component: IBadge,
  argTypes: {
    type: { 
      description: '不设置时跟随主题',
      options: [undefined, 'light', 'dark'],
      control: { 
        type: 'inline-radio' 
      },
    },
    size: { 
      options: ['md', 'lg'],
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
  components: { IBadge },
  setup() {
    return { args }
  },
  template: `
    <IBadge v-bind="args">{{ args.content }}</IBadge>

  `,
});

export const Default = Template.bind({
})

Default.args = {
  content: 'Working on'
}