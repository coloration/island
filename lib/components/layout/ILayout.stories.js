import ILayout from './ILayout.vue'

export default {
  title: 'Component/layout/ILayout',
  component: ILayout,
  argTypes: {
    type: { 
      control: { 
        type: 'inline-radio', options: ['vertical', 'horizontal'] } 
      },
  },
};

export const NestDemo = (args) => ({
  components: { ILayout },
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
