import IBanner from './IBanner.vue'
import ILightBanner from './ILightBanner.vue'

export default {
  title: 'Component/IBanner',
  component: IBanner,
  argTypes: {
    type: { 
      control: { 
        type: 'radio', options: [undefined, 'primary', 'normal', 'ghost'] } 
      },
  },
};

const Template = (args) => ({
  components: { IBanner, ILightBanner },
  setup() {
    
    return { ...args, content: 'We’re currently experiencing an increase in inquiries. There may be a delay in responses from the Support.' }
  },
  template: `
    <IBanner :visible="visible">{{ content }}</IBanner>
    <ILightBanner :visible="visible">{{ content }}</ILightBanner>
  `,
});

export const Default = Template.bind({})

Default.args = {
  type: 'info',
  visible: true
}

export const Normal = () => ({
  components: { IBanner },
  template: `
    <div>
      <IBanner :visible="true">We’re currently experiencing an increase in inquiries.</IBanner>
      <IBanner type="error" :visible="true">We’re currently experiencing an increase in inquiries.</IBanner>
      <IBanner type="success" :visible="true">We’re currently experiencing an increase in inquiries.</IBanner>
      <IBanner type="warning" :visible="true">We’re currently experiencing an increase in inquiries.</IBanner>
    </div>
  `
})

export const Light = () => ({
  components: { ILightBanner },
  template: `
    <div>
      <ILightBanner :visible="true">We’re currently experiencing an increase in inquiries.</ILightBanner>
      <ILightBanner type="error" :visible="true">We’re currently experiencing an increase in inquiries.</ILightBanner>
      <ILightBanner type="success" :visible="true">We’re currently experiencing an increase in inquiries.</ILightBanner>
      <ILightBanner type="warning" :visible="true">We’re currently experiencing an increase in inquiries.</ILightBanner>
    </div>
  `
})