import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { PageSC, LinksContainer } from './Page-style';

import LinkComp from 'components/menu/link-comp/LinkComp';
import BackButton from 'components/menu/back-button/BackButton';

// TODO: move the service if this works
import { getCurrentLinks } from '../menu-service.js';

export default function Page({
  menuWidth,
  path,
  links,
  activeLink,
  defaultLeafIcon,
  defaultBranchIcon,
  rightArrowIcon,
  onBackButtonClick,
  onNodeClick,
  onLeafNodeClick,
}) {
  const [currentLinks, setCurrentLinks] = useState({});

  useEffect(() => {
    const { newLinks } = getCurrentLinks(links, path);
    setCurrentLinks(newLinks);
  }, [path]);

  return (
    <PageSC menuWidth={menuWidth} className="k-page">
      {path ? <BackButton onClick={onBackButtonClick} /> : null}

      <LinksContainer className="k-links-container">
        {Object.keys(currentLinks).map((node) => (
          <LinkComp
            key={node}
            activeLink={activeLink}
            currentNode={path ? '/' + path : ''}
            link={{ path: node, ...currentLinks[node] }}
            defaultLeafIcon={defaultLeafIcon}
            defaultBranchIcon={defaultBranchIcon}
            rightArrowIcon={rightArrowIcon}
            onNodeClick={onNodeClick}
            onLeafNodeClick={onLeafNodeClick}
          />
        ))}
      </LinksContainer>
    </PageSC>
  );
}

Page.propTypes = {
  menuWidth: PropTypes.number,
  path: PropTypes.string.isRequired,
  links: PropTypes.object.isRequired,
  activeLink: PropTypes.string.isRequired,
  defaultLeafIcon: PropTypes.object.isRequired,
  defaultBranchIcon: PropTypes.object.isRequired,
  rightArrowIcon: PropTypes.object.isRequired,
  onBackButtonClick: PropTypes.func.isRequired,
  onNodeClick: PropTypes.func.isRequired,
  onLeafNodeClick: PropTypes.func.isRequired,
};

Page.defaultProps = {
  menuWidth: 0,
};
