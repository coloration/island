import IPagination from './IPagination.vue'
import IPaginationNumeric from './IPaginationNumeric.vue'

export default {
  title: 'Component/IPagination',
  component: IPagination,
  argTypes: {
    type: { 
      control: { 
        type: 'radio', options: [undefined, 'primary', 'normal', 'ghost'] } 
      },
  },
};

const Template = (args) => ({
  components: { IPagination, IPaginationNumeric },
  setup() {
    return { ...args }
  },
  template: `
    <IPagination 
      :type="type" :total="15" :size="10" :page="2" />
    <IPaginationNumeric 
      :type="type" :total="15" :size="10" :page="2" />
  `,
});

export const Default = Template.bind({})

Default.args = {
  type: 'primary',
}

export const Type = () => ({
  components: { IPagination },
  template: `
    <div>
      <IPagination>Primary</IPagination>
      <IPagination type="normal">Normal</IPagination>
      <IPagination type="ghost">Ghost</IPagination>
    </div>
  `
})