import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';

import {
  ReactDrilldownMenuSC,
  BackButton,
  BackButtonIcon,
  BackButtonText,
  Links,
} from './index-style';

import {
  ArrowLeft,
  SquareFill,
  CircleFill,
  ChevronRight,
} from 'react-bootstrap-icons';

import LinkComp from 'components/link-comp/LinkComp';
import Header from 'components/header/Header';

import { getCurrentLinks } from 'services/menu-service.js';

import t from 'src/theme';

export const ReactDrilldownMenu = ({
  navLink,
  activeLink,
  name,
  icon,
  links,
  defaultLeafIcon,
  defaultBranchIcon,
  rightArrowIcon,
}) => {
  const [path, setPath] = useState('');
  const [currentLinks, setCurrentLinks] = useState(links);
  const [nodeInfo, setNodeInfo] = useState(null);
  const [expanded, setExpanded] = useState(true);

  useEffect(() => {
    setPath(activeLink.substring(1));
  }, [activeLink]);

  useEffect(() => {
    const { newLinks, nodeInfo, newPath } = getCurrentLinks(links, path);
    setCurrentLinks(newLinks);
    setNodeInfo(nodeInfo);

    if (path !== newPath) {
      setPath(newPath);
    }
  }, [path]);

  const handleNodeClick = (newNode) => {
    setPath((oldPath) => {
      if (oldPath === '') {
        return newNode;
      } else {
        return oldPath + '/' + newNode;
      }
    });
  };

  const handleBackClick = () => {
    setPath((oldPath) => {
      let pathArr = oldPath.split('/');
      pathArr.pop();
      return pathArr.join('/');
    });
  };

  return (
    <ReactDrilldownMenuSC className="k-menu-container">
      <Router>
        <Header
          expanded={expanded}
          nodeInfo={nodeInfo}
          menuIcon={icon}
          menuName={name}
          onToggleExpand={() => setExpanded((prevState) => !prevState)}
        />

        {path && expanded ? (
          <BackButton
            className="k-back-button-container"
            onClick={handleBackClick}
          >
            <BackButtonIcon className="k-back-button-icon">
              <ArrowLeft />
            </BackButtonIcon>

            <BackButtonText className="k-back-button-text">Back</BackButtonText>
          </BackButton>
        ) : null}

        <Links
          className="k-links-container"
          style={{
            height: expanded
              ? Object.keys(currentLinks).length * t.linkHeightNumber + 'px'
              : 0,
          }}
        >
          {Object.keys(currentLinks).map((node) => {
            return (
              <LinkComp
                key={node}
                navLink={navLink}
                currentNode={path ? '/' + path : ''}
                link={{ path: node, ...currentLinks[node] }}
                defaultLeafIcon={defaultLeafIcon}
                defaultBranchIcon={defaultBranchIcon}
                rightArrowIcon={rightArrowIcon}
                onNodeClick={handleNodeClick}
              />
            );
          })}
        </Links>
      </Router>
    </ReactDrilldownMenuSC>
  );
};

ReactDrilldownMenu.propTypes = {
  navLink: PropTypes.object.isRequired,
  activeLink: PropTypes.string.isRequired,
  name: PropTypes.string,
  icon: PropTypes.object,
  links: PropTypes.object.isRequired,
  defaultLeafIcon: PropTypes.object,
  defaultBranchIcon: PropTypes.object,
  rightArrowIcon: PropTypes.object,
};

ReactDrilldownMenu.defaultProps = {
  name: 'Menu',
  icon: <SquareFill />,
  defaultLeafIcon: <CircleFill />,
  defaultBranchIcon: <SquareFill />,
  rightArrowIcon: <ChevronRight />,
};
