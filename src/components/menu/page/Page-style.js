import styled from 'styled-components';

import v from 'src/variables';

export const PageSC = styled.div`
  display: flex;
  flex-direction: column;
  min-width: ${(props) => props.menuWidth + 'px'};
  transition: all ${v.animationSpeed}ms;
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: all ${v.animationSpeed}ms;
`;
