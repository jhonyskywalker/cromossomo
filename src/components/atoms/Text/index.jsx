import styled from 'styled-components';
import designSystem from '../../../design-system';

const Text = styled.p`
  font-size: ${props => designSystem.font.size[props.size]};
  font-family: ${props => designSystem.font.family[props.family]};
  color: ${props => designSystem.color[props.color]};
  text-transform: ${props => props.trasnform};
  text-align: ${props => props.align};
`;

export default Text;
