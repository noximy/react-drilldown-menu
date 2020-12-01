import styled from 'styled-components';
import v from 'src/variables';

export const BackButtonIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${(props) => props.theme.linkHeight};
  width: ${(props) => props.theme.linkHeight};
  font-size: 19px;
  transition: all ${v.animationSpeed}ms;
`;

export const BackButtonSC = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: none;
  height: ${(props) => props.theme.linkHeight};
  max-height: ${(props) => props.theme.linkHeight};
  flex: 1;
  font-size: 20px;
  background: transparent;
  padding: 0;
  outline: none;
  cursor: pointer;
  color: ${(props) => props.theme.selectionBackgroundColor};
  transition: all ${v.animationSpeed}ms;

  :hover {
    ${BackButtonIcon} {
      transform: translateX(-4px);
    }
  }
`;

export const BackButtonText = styled.div`
  display: flex;
  font-size: ${(props) => props.theme.backButtonSize};
  transition: all ${v.animationSpeed}ms;
`;
