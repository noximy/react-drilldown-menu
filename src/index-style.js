import styled from 'styled-components';

import t from 'src/theme';

export const ReactDrilldownMenuSC = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BackButtonIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${t.linkHeight};
  width: ${t.linkHeight};
  font-size: 19px;
  transition: 0.3s all;
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: none;
  height: ${t.linkHeight};
  flex: 1;
  font-size: 20px;
  background: transparent;
  padding: 0;
  outline: none;
  cursor: pointer;
  color: ${t.selectionBackgroundColor};
  transition: 0.3s all;

  :hover {
    ${BackButtonIcon} {
      transform: translateX(-4px);
    }
  }
`;

export const BackButtonText = styled.div`
  display: flex;
  font-size: ${t.backButtonSize};
`;

export const HeaderInfo = styled.div`
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

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: 0.3s all;
`;
