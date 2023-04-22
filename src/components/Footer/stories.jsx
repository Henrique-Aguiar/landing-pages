import { Footer } from '.';

export default {
  title: 'Footer',
  component: Footer,
  args: {
    html: `<p><a href="https://github.com/Henrique-Aguiar">Feito com ❤ por Henrique Dias</a></p>`,
  },
};

export const Template = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  );
};
