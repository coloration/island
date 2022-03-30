import IHangText from './IHangText.vue'

export default {
  title: 'Component/text/IHangText',
  component: IHangText,
  argTypes: {
    align: {
      options: ['left', 'center', 'right', 'justify'],
      control: { type: 'inline-radio' }
    },
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
      control: { type: 'inline-radio' }
    },
  },
};

const Template = (args) => ({
  components: { IHangText },
  setup() {
    return { args }
  },
  template: `
    <IHangText 
      v-bind="args" undeline>{{ args.content }}</IHangText>
  `,
});

export const Default = Template.bind({})


Default.args = {
  content: 'some words'
}

