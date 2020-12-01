import styled from 'styled-components';

import v from 'src/variables';

export const MenuSC = styled.div`
  display: flex;
  flex-direction: row;
  width: auto;
  overflow-x: hidden;
`;

export const PageContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  transition: all ${v.animationSpeed}ms;
`;
