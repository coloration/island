import IToggle from './IToggle.vue'

export default {
  title: 'Component/IToggle',
  component: IToggle,
  argTypes: {
    type: { 
      control: { 
        type: 'radio', options: [undefined, 'primary', 'normal', 'ghost'] } 
      },
  },
};

const Template = (args) => ({
  components: { IToggle },
  setup() {
    return { ...args }
  },
  template: `
    <IToggle defaultValue v-slot={ toggle, value }>
    
      <h1>Title</h1>
      <span @click="toggle">expand</span>

      <div v-if="value">
        content
      </div>
    </IToggle>
  `,
});

export const Default = Template.bind({})
