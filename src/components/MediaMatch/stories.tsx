import { Story, Meta } from '@storybook/react'
import MediaMatch, { MediaMatchProps } from '.'

export default {
  title: 'MediaMatch',
  component: MediaMatch
} as Meta

export const Desktop: Story = () => <MediaMatch greaterThen='medium' > <h1>Desktop</h1> </MediaMatch>
