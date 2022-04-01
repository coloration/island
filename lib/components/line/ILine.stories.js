import ILine from './ILine.vue'
import { ITitle } from '../text'


export default {
  title: 'Component/decoration/ILine',
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


