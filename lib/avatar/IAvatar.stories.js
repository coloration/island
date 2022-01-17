import IAvatar from './IAvatar.vue'

export default {
  title: 'Component/IAvatar',
  component: IAvatar,
  argTypes: {
    type: { 
      control: { 
        type: 'radio', options: [undefined, 'primary', 'normal', 'ghost'] } 
      },
  },
};

const Template = (args) => ({
  components: { IAvatar },
  setup() {
    return { ...args }
  },
  template: `
    <div style="display: flex; gap: 10px; align-items: center;">
      <IAvatar :src="src" size="xs" />
      <IAvatar :src="src" size="sm" />
      <IAvatar :src="src" />
      <IAvatar :src="src" size="lg" />
      <IAvatar :src="src" size="xl" />
    </div>
  `,
});

export const Default = Template.bind({})

Default.args = {
  src: 'https://tse1-mm.cn.bing.net/th/id/R-C.65e439879aa61497589862adad1f88f6?rik=jDN9PbfgKozvdA&riu=http%3a%2f%2fscimg.jianbihuadq.com%2f202006%2f2020062019313121.jpg&ehk=KNd6VIpIB3vIh47ExDwI0l43YYaKMH5z5Ha7xgwG90E%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1',
}

export const Name = () => ({
  components: { IAvatar },
  template: `
    <div>
      <div style="display: flex; gap: 10px; align-items: center;">
        <IAvatar name="刘" size="xs" />
        <IAvatar name="刘" size="sm" />
        <IAvatar name="刘" />
        <IAvatar name="刘" size="lg" />
        <IAvatar name="刘" size="xl" />
      </div>
      <div style="display: flex; gap: 10px; align-items: center;">
        <IAvatar name="MS" size="xs" />
        <IAvatar name="MS" size="sm" />
        <IAvatar name="MS" />
        <IAvatar name="MS" size="lg" />
        <IAvatar name="MS" size="xl" />
      </div>
    </div>
  `
})


export const Notice = () => ({
  components: { IAvatar },
  template: `
    <div>
      <div style="display: flex; gap: 10px; align-items: center;">
        <IAvatar name="刘" :notice="true" size="xs" />
        <IAvatar name="刘" :notice="true" size="sm" />
        <IAvatar name="刘" :notice="true" />
        <IAvatar name="刘" :notice="true" size="lg" />
        <IAvatar name="刘"  size="xl" />
      </div>
      <div style="display: flex; gap: 10px; align-items: center;">
        <IAvatar name="MS" size="xs" />
        <IAvatar name="MS" size="sm" />
        <IAvatar name="MS" />
        <IAvatar name="MS" size="lg" />
        <IAvatar name="MS" size="xl" />
      </div>
    </div>
  `
})