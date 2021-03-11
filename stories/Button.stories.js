import { Button } from './Button';

export default {
  title: 'Example/Button',
  parameters: {
    actions: {
      handles: ['mouseover', 'click', 'foo', 'bar'],
    },
  },
};

const Template = (args) => Button(args);

export const SomeButton = Template.bind({});
SomeButton.args = {
  label: 'SomeButton',
};
