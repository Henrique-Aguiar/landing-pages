import { GridTwoColumn } from '.';

export default {
  title: 'GridTwoColumn',
  component: GridTwoColumn,
  args: {
    title: 'Grid two columns',
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam voluptate labore, dolor deserunt corrupti
    obcaecati explicabo non iste ut, rerum cumque ipsam ducimus, fuga consectetur illum
    delectus ipsum. Incidunt, quas!`,
    srcImg: 'assets/images/javascript.svg',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <GridTwoColumn {...args} />
    </div>
  );
};
