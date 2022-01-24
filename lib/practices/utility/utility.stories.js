import EmptyState from './EmptyState.vue'
import Changelog from './Changelog.vue'
import Roadmap from './Roadmap.vue'
import Faqs from './Faqs.vue'
import Page404 from './404.vue'

export default {
  title: 'Practice/Utility',
};

export const PracticeEmptyState = () => ({
  components: { EmptyState },
  template: `<EmptyState />`
})

export const Practice404 = () => ({
  components: { Page404 },
  template: `<Page404 />`
})

export const PracticeChangelog = () => ({
  components: { Changelog },
  template: `<Changelog />`
})

export const PracticeRoadmap = () => ({
  components: { Roadmap },
  template: `<Roadmap />`
})

export const PracticeFaqs = () => ({
  components: { Faqs },
  template: `<Faqs />`
})