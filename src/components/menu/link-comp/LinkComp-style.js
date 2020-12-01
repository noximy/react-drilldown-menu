import styled from 'styled-components';

import v from 'src/variables';

export const IconSC = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.theme.linkHeight};
  height: ${(props) => props.theme.linkHeight};
  font-size: ${(props) => props.theme.linkIconFontSize};
  color: ${(props) => props.theme.linkIconColor};
  transition: all ${v.animationSpeed}ms;
`;

export const RightArrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.theme.linkHeight};
  height: ${(props) => props.theme.linkHeight};
  font-size: 17px;
  color: ${(props) => props.theme.linkIconColor};
  transition: all ${v.animationSpeed}ms;
`;

export const LinkElement = styled.a`
  display: flex;
  align-items: center;
  width: 100%;
  height: ${(props) => props.theme.linkHeight};
  color: ${(props) => props.theme.linkTextColor};
  cursor: pointer;
  text-decoration: none;
  transition: all ${v.animationSpeed}ms;

  &.active {
    background: ${(props) => props.theme.selectionBackgroundColor};
    color: ${(props) => props.theme.activeLinkTextColor};

    ${IconSC} {
      color: ${(props) => props.theme.activeLinkIconColor};
    }

    &:hover {
      background: ${(props) => props.theme.selectionBackgroundColor};
      ${IconSC} {
        color: ${(props) => props.theme.activeLinkIconColor};
      }
    }
  }

  &:hover {
    background: ${(props) => props.theme.hoverLinkBackgroundColor};

    ${RightArrow} {
      transform: translateX(4px);
    }
  }
`;

export const LinkSC = styled.div`
  display: flex;
  width: 100%;
  font-size: 14px;
`;

export const Label = styled.div`
  display: flex;
  flex: 1;
`;
