import type { Meta, StoryObj } from '@storybook/angular';
import { CardSimpleComponent } from 'src/app/shared/components/card-simple/card-simple.component';


// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<CardSimpleComponent> = {
  title: 'Card',
  component: CardSimpleComponent,
  tags: ['autodocs'],
  render: (args: CardSimpleComponent) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
};

export default meta;
type Story = StoryObj<CardSimpleComponent>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
