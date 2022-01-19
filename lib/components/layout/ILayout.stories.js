import ILayout from './ILayout.vue'

export default {
  title: 'Component/ILayout',
  component: ILayout,
  argTypes: {
    type: { 
      control: { 
        type: 'radio', options: [undefined, 'primary', 'normal', 'ghost'] } 
      },
  },
};

const Template = (args) => ({
  components: { ILayout },
  setup() {
    return { ...args }
  },
  template: `
    <div style="height: 400px; background: #f1f1f1;">
      <ILayout type="row" style="background: pink;">
        <div style="background: purple;">Aside</div>
        <ILayout>
          header
          <ILayout style="background: white;">
            <p v-for="n in 100">{{n}}</p>
          </ILayout>
          footer
        </ILayout>
      </ILayout>
    </div>
  `,
});

export const Default = Template.bind({})

Default.args = {
}

