import { Base } from '.';
import mock, { mockBase } from './mock';

import { GridText } from '../../components/GridText';

export default {
  title: 'tamplate/Base',
  component: Base,
  args: mockBase,
};

export const Template = (args) => {
  return (
    <div>
      <Base {...args} />
    </div>
  );
};
