import ITitle from './ITitle.vue'

export default {
  title: 'Component/text/ITitle',
  component: ITitle,
  argTypes: {
    level: { 
      control: { 
        min: 1,
        max: 6,
        step: 1,
        type: 'range' 
      } 
    },
  },
};

const Template = (args) => ({
  components: { ITitle },
  setup() {
    return { args }
  },
  template: `
    <ITitle v-bind="args">Level {{args.level}} {{ args.content }}</ITitle>
   

  `,
});

export const Default = Template.bind({})

Default.args = {
  content: 'Good afternoon, Acme Inc. 👋',
  level: 1,
}