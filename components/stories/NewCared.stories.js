// Button.stories.js|ts|jsx|tsx

import NewCard from '@/components/profile/NewCard'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'NewCard',
  component: NewCard,
}

const Template = (args) => '<NewCard />';

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: 'texto',
}
Primary.parameters = {
  backgrounds: {
    values: [
      { name: 'red', value: '#f00' },
      { name: 'green', value: '#0f0' },
      { name: 'blue', value: '#00f' },
    ],
  },
}
