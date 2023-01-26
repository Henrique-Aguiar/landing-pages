import P from 'prop-types';
import * as Styled from './styles';
import { Heading } from '../Heading';

// eslint-disable-next-line no-unused-vars
export const LogoLink = ({ text, srcImg = '', link }) => {
  return (
    <Heading size="small" upperCase>
      <Styled.Container href={link}>
        {srcImg ? <img src={srcImg} alt={text} /> : <span>{text}</span>}
      </Styled.Container>
    </Heading>
  );
};

LogoLink.propTypes = {
  text: P.string.isRequired,
  srcImg: P.string,
  link: P.string.isRequired,
};
