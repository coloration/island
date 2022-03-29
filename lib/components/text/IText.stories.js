import IText from './IText.vue'

export default {
  title: 'Component/text/IText',
  component: IText,
  argTypes: {
    align: {
      options: ['left', 'center', 'right'],
      control: { type: 'inline-radio' }
    },
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
      control: { type: 'inline-radio' }
    },
    color: {
      options: ['gray', 'green', 'indigo', 'yellow', 'red', 'blue'],
      control: { type: 'inline-radio' }
    }
  },
};

const Template = (args) => ({
  components: { IText },
  setup() {
    return { args }
  },
  template: `
    <IText 
      v-bind="args">{{ args.content }}</IText>
  `,
});

export const Default = Template.bind({})


Default.args = {
  content: 'some words'
}

