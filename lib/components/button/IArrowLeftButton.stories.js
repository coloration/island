import IArrowLeftButton from './IArrowLeftButton.vue'

export default {
  title: 'Component/button/IArrowLeftButton',
  component: IArrowLeftButton,
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
  components: { IArrowLeftButton },
  setup() {
    return { args }
  },
  template: `
    <IArrowLeftButton 
      v-bind="args">{{ args.content }}</IArrowLeftButton>
  `,
});

export const Default = Template.bind({})

Default.args = {
  content: 'Button Demo',
  type: 'normal',
}
