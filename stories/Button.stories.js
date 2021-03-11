import { Button } from './Button';

export default {
  title: 'Example/Button',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  parameters: {
    actions: {
      handles: ['mouseover', 'click', 'foo', 'bar'],
    },
  },
};

const Template = (args) => Button(args);

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
