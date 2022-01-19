import ILine from './ILine.vue'
import { ITitle } from '../title'


export default {
  title: 'Component/ILine',
  component: ILine,
  argTypes: {
    type: { 
      control: { 
        type: 'radio', options: [undefined, 'primary', 'normal', 'ghost'] } 
      },
  },
};

const Template = (args) => ({
  components: { ILine, ITitle },
  setup() {
    return { ...args }
  },
  template: `
    <ITitle>视觉还原</ITitle>
    <ILine />
  `,
});

export const Default = Template.bind({})

Default.args = {
  type: 'primary',
}

export const Type = () => ({
  components: { ILine },
  template: `
    <div>
      <ILine>Primary</ILine>
      <ILine type="normal">Normal</ILine>
      <ILine type="ghost">Ghost</ILine>
    </div>
  `
})