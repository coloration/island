import ICheckbox from './ICheckbox.vue'
import { IText } from '../text'
import { onMounted, ref } from 'vue'
export default {
  title: 'Component/form/ICheckbox',
  component: ICheckbox,
}



export const Default = () => ({
  components: { ICheckbox, IText },
  setup() {
    const checkValues = ref('beijing')
    return { checkValues }
  },
  template: `
    <div>
      <ICheckbox v-model="checkValues" value="beijing">
        Beijing
      </ICheckbox>
      <br />
      <IText class="mb-2">
        {{ checkValues }}
      </IText>
    </div>
  `,
})


export const WithBooleanModel = () => ({
  components: { ICheckbox, IText },
  setup() {
    const checkValues = ref(true)

    return { checkValues }
  },
  template: `
    <div>
      <ICheckbox v-model="checkValues">
        Agree
      </ICheckbox>
      <br />
      <IText class="mb-2">
        {{ checkValues }}
      </IText>
    </div>
  `,
})


export const WithGroup = (args) => ({
  components: { ICheckbox, IText },
  setup() {
    const checkValues = ref(['beijing'])
    return { checkValues }
  },
  template: `
    <div>
      <ICheckbox v-model="checkValues" value="beijing">
        Beijing
      </ICheckbox>
      <ICheckbox v-model="checkValues" value="shanghai">
        Shanghai
      </ICheckbox>
      <ICheckbox v-model="checkValues" value="guangzhou">
        Guangzhou
      </ICheckbox>

      <br />

      <IText class="mb-2">
        {{ checkValues }} {{ typeof checkValues }}
      </IText>
    </div>
  `,
})





export const WithDisabled = () => ({
  components: { ICheckbox, IText },
  setup() {
    const checkValues = ref(['beijing'])
    return { checkValues }
  },
  template: `
    <div>
      <ICheckbox v-model="checkValues" value="beijing" disabled>
        Beijing
      </ICheckbox>
      <ICheckbox v-model="checkValues" value="shanghai" disabled>
        Shanghai
      </ICheckbox>

      <br />

      <IText class="mb-2">
        {{ checkValues }} {{ typeof checkValues }}
      </IText>
    </div>
  `,
})