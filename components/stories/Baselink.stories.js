// Button.stories.js

import BaseLink from '@/components/ui/BaseLink.vue'

export default {
  title: 'BaseLink',
  component: BaseLink,
}

export const Primary = () => ({
  components: { BaseLink },
  template: '<BaseLink  />',
})
