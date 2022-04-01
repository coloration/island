import IButtonGroup from './IButtonGroup.vue'
import IButton from './IButton.vue'
import IArrowLeftButton from './IArrowLeftButton.vue'
import IArrowRightButton from './IArrowRightButton.vue'

export default {
  title: 'Component/button/IButtonGroup',
  component: IButtonGroup,
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
    color: { 
      control: { 
        type: 'radio', options: [undefined, 'indigo', 'red', 'green', 'gray'] 
      } 
    },
  },
};

const Template = (args) => ({
  components: { IButtonGroup, IArrowLeftButton, IButton, IArrowRightButton },
  setup() {
    return { args }
  },
  template: `
    <IButtonGroup v-bind="args">
      <IArrowLeftButton>Prev</IArrowLeftButton>
      <IButton>Current</IButton>
      <IButton>Current</IButton>
      <IArrowRightButton>Next</IArrowRightButton>
    </IButtonGroup>
  `,
});

export const Default = Template.bind({})

Default.args = {
}
