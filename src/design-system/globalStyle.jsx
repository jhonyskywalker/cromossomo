import { createGlobalStyle } from 'styled-components';
import designSystem from 'design-system';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: ${designSystem.font.family.primary};
  }
`;
