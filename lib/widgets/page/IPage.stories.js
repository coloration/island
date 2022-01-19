import IPage from './IPage.vue'

export default {
  title: 'Widget/IPage',
  component: IPage,
};

const Template = (args) => ({
  components: { IPage },
  setup() {
    return { ...args }
  },
  template: `
    <IPage title="Account Settings ✨">
      222
    </IPage>
  `,
});

export const Default = Template.bind({})

Default.args = {
}


export const TitleRest = () => ({
  components: { IPage },
  template: `
    <IPage title="Account Settings ✨">
      <template v-slot:header-rest>
        444
      </template>
      <template v-slot:default>
        222
      </template>
    </IPage>
  `,
});
