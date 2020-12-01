import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { SquareFill, CircleFill, ChevronRight } from 'react-bootstrap-icons';
import { ThemeProvider } from 'styled-components';

import { MenuSC, PageContainer } from './Menu-style';

import Page from 'components/menu/page/Page';

import { LIGHT_THEME, DARK_THEME, getTheme } from 'utils/theme-util';

import { getPagesArrayFromActiveLink } from './menu-service';

import v from 'src/variables';

let backButtonTimeout = null;

export const Menu = ({
  activeLink,
  links,
  theme,
  defaultLeafIcon,
  defaultBranchIcon,
  rightArrowIcon,
  onLeafNodeClick,
  customTheme,
}) => {
  const [menuWidth, setMenuWidth] = useState(0);
  const [pages, setPages] = useState([]);
  const [activePageIndex, setActivePageIndex] = useState(0);

  const menuEl = useRef(null);

  useEffect(() => {
    if (menuEl.current) {
      setMenuWidth(menuEl.current.getBoundingClientRect().width);
    }
  }, [menuEl]);

  const setPagesState = () => {
    let newPages = getPagesArrayFromActiveLink(activeLink, links);

    setPages(newPages);
    setActivePageIndex(newPages.length - 1);
  };

  useEffect(setPagesState, [activeLink]);

  const handleNodeClick = (newNode) => {
    setPages((oldPages) => [
      ...oldPages,
      oldPages[oldPages.length - 1]
        ? oldPages[oldPages.length - 1] + '/' + newNode
        : newNode,
    ]);

    setActivePageIndex((old) => old + 1);
  };

  const handleBackClick = () => {
    if (backButtonTimeout) {
      return;
    }

    setActivePageIndex(pages.length - 2);

    // Remove the path after animation is compoennt.
    // There is no animation callback function from CSS so we have to use setTimeout.
    backButtonTimeout = setTimeout(() => {
      setPages((prevPages) => {
        prevPages.pop();
        return prevPages;
      });
      backButtonTimeout = null;
    }, v.animationSpeed);
  };

  return (
    <ThemeProvider theme={{ ...getTheme(theme), ...customTheme }}>
      <MenuSC className="k-menu-container" ref={menuEl}>
        {pages.length ? (
          <PageContainer
            className="k-page-container"
            style={{
              transform: `translateX(-${menuWidth * activePageIndex}px)`,
            }}
          >
            {pages.map((pagePath) => (
              <Page
                key={pagePath}
                menuWidth={menuWidth}
                path={pagePath}
                links={links}
                activeLink={activeLink}
                defaultLeafIcon={defaultLeafIcon}
                defaultBranchIcon={defaultBranchIcon}
                rightArrowIcon={rightArrowIcon}
                onBackButtonClick={handleBackClick}
                onNodeClick={handleNodeClick}
                onLeafNodeClick={onLeafNodeClick}
              />
            ))}
          </PageContainer>
        ) : null}
      </MenuSC>
    </ThemeProvider>
  );
};

Menu.propTypes = {
  activeLink: PropTypes.string.isRequired,
  links: PropTypes.object.isRequired,
  defaultLeafIcon: PropTypes.object,
  defaultBranchIcon: PropTypes.object,
  rightArrowIcon: PropTypes.object,
  onLeafNodeClick: PropTypes.func.isRequired,
  theme: PropTypes.oneOf([LIGHT_THEME, DARK_THEME]),
  customTheme: PropTypes.object,
};

Menu.defaultProps = {
  defaultLeafIcon: <CircleFill />,
  defaultBranchIcon: <SquareFill />,
  rightArrowIcon: <ChevronRight />,
  theme: LIGHT_THEME,
  customTheme: {},
};
