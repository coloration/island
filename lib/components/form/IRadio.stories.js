import IRadio from './IRadio.vue'

export default {
  title: 'Component/IRadio',
  component: IRadio,
};

const Template = (args) => ({
  components: { IRadio },
  setup() {
    return { ...args }
  },
  template: `
    <div style="padding: 30px 10px; display: flex; gap: 10px;">
      <IRadio name="city" checked>
        Beijing
      </IRadio>
      <IRadio name="city">
        Shanghai
      </IRadio>

      <IRadio disabled name="city">
        Shanghai
      </IRadio>
    </div>
  `,
});

export const Default = Template.bind({})

Default.args = {
  content: 'Primary',
  type: 'primary',
}


// export const Feature = () => ({
//   components: { IInput, ILabel },
//   template: `
//     <div style="display: flex; gap: 12px;">
//       <div>
//         <ILabel for="prefix">
//           W/ Prefix
//         </ILabel>
//         <IInput 
//           id="prefix"
//           prefix="USD"
//           placeholder="something cool ..." />
//       </div>
//       <p />
//       <div>
//         <ILabel for="subfix">
//           W/ Suffix
//         </ILabel>
//         <IInput 
//           id="subfix"
//           suffix="%"
//           placeholder="something cool ..." />
//       </div>
//       <p />
//       <div>
//         <ILabel for="suggest">
//           W/ Suggest
//         </ILabel>
//         <IInput 
//           id="suggest"
//           suggest="Supporting text goes here!"
//           placeholder="something cool ..." />
//       </div>
//       <p />
//     </div>
//   `
// })


// export const Status = () => ({
//   components: { IInput, ILabel },
//   template: `
//     <div style="display: flex; gap: 12px;">
//       <div>
//         <ILabel for="disabled">
//           Disabled
//         </ILabel>
//         <IInput 
//           id="disabled"
//           disabled
//           placeholder="something cool ..." />
//       </div>
//       <p />
//       <div>
//         <ILabel for="error">
//           Error
//         </ILabel>
//         <IInput 
//           id="error"
//           color="red"
//           placeholder="something cool ..."
//           suggest="This field is required!"
//         />
//       </div>
//       <p />
//       <div>
//         <ILabel for="success">
//           Success
//         </ILabel>
//         <IInput 
//           id="success"
//           color="green"
//           placeholder="something cool ..." 
//           suggest="Sounds good!"
//         />
//       </div>
//       <p />
//     </div>
//   `
// })





