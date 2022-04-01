import IRadio from './IRadio.vue'
import { IText } from '../text'
import { ref } from 'vue';

export default {
  title: 'Component/form/IRadio',
  component: IRadio,
};

export const Default = () => ({
  components: { IRadio, IText },
  setup() {
    const radioValue = ref('0')
    return { radioValue }
  },
  template: `
    <div>
      <IRadio value="0" v-model="radioValue">
        Male
      </IRadio>
      <IRadio value="1" v-model="radioValue">
        Female
      </IRadio>

      <br />

      <IText>{{ radioValue }} {{ typeof radioValue }}</IText>
    </div>
  `,
})


export const WithBooleanModel = () => ({
  components: { IRadio, IText },
  setup() {
    const radioValue = ref(false)
    return { radioValue }
  },
  template: `
    <div>
      <IRadio :value="false" v-model="radioValue">
        Male
      </IRadio>
      <IRadio :value="true" v-model="radioValue">
        Female
      </IRadio>

      <br />

      <IText>{{ radioValue }} {{ typeof radioValue }}</IText>
    </div>
  `,
})


export const WithDisabled = () => ({
  components: { IRadio, IText },
  setup() {
    const radioValue = ref(1)
    return { radioValue }
  },
  template: `
    <div>
      <IRadio disabled>
        Male
      </IRadio>
      <IRadio checked disabled>
        Female
      </IRadio>
    </div>
  `,
})


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





