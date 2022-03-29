import IArrowRightButton from './IArrowRightButton.vue'

export default {
  title: 'Component/button/IArrowRightButton',
  component: IArrowRightButton,
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
  components: { IArrowRightButton },
  setup() {
    return { args }
  },
  template: `
    <IArrowRightButton 
      v-bind="args">{{ args.content }}</IArrowRightButton>
  `,
});

export const Default = Template.bind({})

Default.args = {
  content: 'Button Demo',
  type: 'normal',
}
