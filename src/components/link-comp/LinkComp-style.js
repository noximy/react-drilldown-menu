import styled from 'styled-components';

import t from 'src/theme';

export const IconSC = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${t.linkHeight};
  height: ${t.linkHeight};
  font-size: ${t.linkIconFontSize};
  color: #888888;
`;

export const RightArrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${t.linkHeight};
  height: ${t.linkHeight};
  transition: 0.3s all;
  font-size: 17px;
  color: #888888;
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
    color: #111111;
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s all;

    &.active {
      background: ${t.selectionBackgroundColor};
      color: #ffffff;

      ${IconSC} {
        color: #ffffff;
      }

      &:hover {
        background: ${t.selectionBackgroundColor};
        ${IconSC} {
          color: #ffffff;
        }
      }
    }

    &:hover {
      background: #f5f5f5;

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
