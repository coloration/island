import IPlusButton from './IPlusButton.vue'

export default {
  title: 'Component/button/IPlusButton',
  component: IPlusButton,
  argTypes: {
    type: { 
      control: { 
        type: 'radio', options: [undefined, 'primary', 'normal', 'ghost'] } 
      },
    size: { 
      control: { 
        type: 'radio', options: [undefined, 'md', 'lg', 'xs', 'sm'] 
      } 
    },
    block: {
      control: {
        type: 'boolean'
      }
    },
    color: { 
      control: { 
        type: 'radio', options: [undefined, 'indigo', 'red', 'green', 'gray'] 
      } 
    },
    disabled: {
      control: {
        type: 'boolean'
      }
    },
    loading: {
      control: {
        type: 'boolean'
      }
    },
  },
};

const Template = (args) => ({
  components: { IPlusButton },
  setup() {
    return { args }
  },
  template: `
    <IPlusButton 
      v-bind="args">{{ args.content }}</IPlusButton>
  `,
});

export const Default = Template.bind({})

Default.args = {
  content: 'Button Demo',
  type: 'normal',
}
