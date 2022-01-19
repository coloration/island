import ICard from './ICard.vue'

export default {
  title: 'Widget/ICard',
  component: ICard,
  argTypes: {
    type: { 
      control: { 
        type: 'radio', options: [undefined, 'primary', 'normal', 'ghost'] } 
      },
  },
};

const Template = (args) => ({
  components: { ICard },
  setup() {
    return { ...args }
  },
  template: `
    <ICard title="Account Settings ✨">
      222
    </ICard>
  `,
});

export const Default = Template.bind({})

Default.args = {
}


export const TitleRest = () => ({
  components: { ICard },
  template: `
    <div style="height: 300px;">
      <ICard title="Account Settings ✨">
        <template v-slot:header-rest>
          444
        </template>
        <template v-slot:default>
          <div style="height: 100%; background: pink;">222</div>
        </template>
      </ICard>
    </div>
  `,
});


export const NoTitle = () => ({
  components: { ICard },
  template: `
    <div style="height: 300px;">
      <ICard>
        222
      </ICard>
    </div>
  `,
});
