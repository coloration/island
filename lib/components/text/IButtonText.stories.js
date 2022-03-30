import IButtonText from './IButtonText.vue'

export default {
  title: 'Component/text/IButtonText',
  component: IButtonText,
  argTypes: {
    align: {
      options: ['left', 'center', 'right', 'justify'],
      control: { type: 'inline-radio' }
    },
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
      control: { type: 'inline-radio' }
    },
    hoverUndeline: {
      control: { type: 'boolean' }
    }
  },
}

const Template = (args) => ({
  components: { IButtonText },
  setup() {
    return { args }
  },
  template: `
    <IButtonText 
      v-bind="args">{{ args.content }}</IButtonText>
  `,
})

export const Default = Template.bind({})


Default.args = {
  content: 'Let\'s Go',
  hoverUndeline: false
}

