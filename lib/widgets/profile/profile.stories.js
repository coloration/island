import IProfileDropdown from './IProfileDropdown.vue'
import { IButtonText } from '../../components'
export default {
  title: 'Widget/IProfileDropdown',
  component: IProfileDropdown,
};

const Template = (args) => ({
  components: { IProfileDropdown, IButtonText },
  setup() {
    return { ...args }
  },
  template: `
    <div style="height: 200px;">
      <IProfileDropdown 
        name="Acme Inc." 
        description="Administrator">
        
        <IButtonText>
          Sign Out.
        </IButtonText>
      </IProfileDropdown>
    </div>
  `,
});

export const Default = Template.bind({})

Default.args = {
}
