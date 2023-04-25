import { Gotop } from '.';

export default {
  title: 'Gotop',
  component: Gotop,
  args: {
    children: 'Gotop',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div style={{ height: '400vh' }}>
      <Gotop {...args} />
    </div>
  );
};
