import ITitle from './ITitle.vue'

export default {
  title: 'Component/ITitle',
  component: ITitle,
  argTypes: {
    type: { 
      control: { 
        type: 'radio', options: [undefined, 'primary', 'normal', 'ghost'] } 
      },
  },
};

const Template = (args) => ({
  components: { ITitle },
  setup() {
    return { ...args }
  },
  template: `
    <ITitle :level="1">h1 {{ content }}</ITitle>
    <p/>
    <ITitle :level="2">h2 {{ content }}</ITitle>
    <p/>
    <ITitle :level="3">h3 {{ content }}</ITitle>
    <p/>
    <ITitle :level="4">h4 {{ content }}</ITitle>
    <p/>
    <ITitle :level="5">h5 {{ content }}</ITitle>
    <p/>
    <ITitle :level="6">h6 {{ content }}</ITitle>
    <p/>
    <p>p {{ content }}</p>

  `,
});

export const Default = Template.bind({})

Default.args = {
  content: 'Good afternoon, Acme Inc. 👋',
}

export const Type = () => ({
  components: { ITitle },
  template: `
    <div>
      <ITitle>Primary</ITitle>
      <ITitle type="normal">Normal</ITitle>
      <ITitle type="ghost">Ghost</ITitle>
    </div>
  `
})