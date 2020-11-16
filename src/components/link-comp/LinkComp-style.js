import styled from 'styled-components';

import t from 'src/theme';

export const IconSC = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${t.linkHeight};
  height: ${t.linkHeight};
  font-size: ${t.linkIconFontSize};
  color: ${t.linkIconColor};
`;

export const RightArrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${t.linkHeight};
  height: ${t.linkHeight};
  transition: 0.3s all;
  font-size: 17px;
  color: ${t.linkIconColor};
`;

export const LinkSC = styled.div`
  display: flex;
  width: 100%;
  font-size: 14px;

  .link-element {
    display: flex;
    align-items: center;
    width: 100%;
    height: ${t.linkHeight};
    color: ${t.linkTextColor};
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s all;

    &.active {
      background: ${t.selectionBackgroundColor};
      color: ${t.activeLinkTextColor};

      ${IconSC} {
        color: ${t.activeLinkIconColor};
      }

      &:hover {
        background: ${t.selectionBackgroundColor};
        ${IconSC} {
          color: ${t.activeLinkIconColor};
        }
      }
    }

    &:hover {
      background: ${t.hoverLinkBackgroundColor};

      ${RightArrow} {
        transform: translateX(4px);
      }
    }
  }
`;

export const Label = styled.div`
  display: flex;
  flex: 1;
`;
