import { styled } from 'goober';
import { space, color, layout } from 'styled-system';

export const Box = styled('div')`
  box-sizing: border-box;
  min-width: 0;
  ${color};
  ${space};
  ${layout};
`;

Box.defaultProps = {
  color: 'black ',
  background: 'white',
};
