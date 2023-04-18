import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: ${theme.font.family.default};
    font-size: 1.6rem;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.font.family.secondary};
    margin: ${({ theme }) => theme.spacings.large} 0;
  }

  p {
    margin: ${({ theme }) => theme.spacings.medium} 0;
  }

  ul, ol {
    margin: ${({ theme }) => theme.spacings.medium} 0;
    padding: ${({ theme }) => theme.spacings.medium} 0;
  }

  a {
    color: ${({ theme }) => theme.colors.secondaryColor};
  }
`;
