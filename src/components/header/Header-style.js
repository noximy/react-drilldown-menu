import styled from 'styled-components';

import t from 'src/theme';

export const HeaderSC = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${t.linkHeight};
`;

export const NodeInfo = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  color: ${t.selectionBackgroundColor};
`;

export const NodeIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${t.linkIconFontSize};
  height: ${t.linkHeight};
  width: ${t.linkHeight};
`;

export const NodeLabel = styled.div`
  display: flex;
  font-size: 16px;
`;

export const ExpandIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  height: ${t.linkHeight};
  width: ${t.linkHeight};
  color: ${t.selectionBackgroundColor};
  cursor: pointer;
  transition: 0.3s all;

  &.collapsed {
    transform: rotateZ(-90deg);
  }
`;
