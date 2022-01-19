import IText from './IText.vue'

export default {
  title: 'Component/IText',
  component: IText,
  argTypes: {
    type: { 
      control: { 
        type: 'radio', options: [undefined, 'primary', 'normal', 'ghost'] } 
      },
  },
};

const Template = (args) => ({
  components: { IText },
  setup() {
    return { ...args }
  },
  template: `
    <IText 
      :type="type">{{ content }}</IText>
  `,
});

export const Default = Template.bind({})

Default.args = {
  type: 'primary',
}

export const Type = () => ({
  components: { IText },
  template: `
    <div>
      <IText>Primary</IText>
      <IText type="normal">Normal</IText>
      <IText type="ghost">Ghost</IText>
    </div>
  `
})