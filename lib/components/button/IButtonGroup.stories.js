import IButtonGroup from './IButtonGroup.vue'

export default {
  title: 'Component/button/IButtonGroup',
  component: IButtonGroup,
  argTypes: {
    // type: { 
    //   control: { 
    //     type: 'radio', options: [undefined, 'primary', 'normal', 'ghost'] } 
    //   },
    // size: { 
    //   control: { 
    //     type: 'radio', options: [undefined, 'md', 'lg', 'xs', 'sm'] 
    //   } 
    // },
    // block: {
    //   control: {
    //     type: 'boolean'
    //   }
    // },
    // color: { 
    //   control: { 
    //     type: 'radio', options: [undefined, 'indigo', 'red', 'green', 'gray'] 
    //   } 
    // },
    // disabled: {
    //   control: {
    //     type: 'boolean'
    //   }
    // },
    // loading: {
    //   control: {
    //     type: 'boolean'
    //   }
    // },
  },
};

const Template = (args) => ({
  components: { IButtonGroup },
  setup() {
    return { args }
  },
  template: `
    <IButtonGroup 
      v-bind="args"></IButtonGroup>
  `,
});

export const Default = Template.bind({})

Default.args = {
}
