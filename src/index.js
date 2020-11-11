import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  ReactDrilldownMenuSC,
  BackButton,
  BackButtonIcon,
  BackButtonText,
  Links,
} from './index-style';

import { ArrowLeft, SquareFill } from 'react-bootstrap-icons';

import Link from 'components/link/Link';
import Header from 'components/header/Header';

import { getCurrentLinks } from 'services/menu-service.js';

import t from 'src/theme';

export const ReactDrilldownMenu = ({
  name,
  icon,
  activeLink,
  navLinkElement,
  links,
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
            <Link
              key={node}
              currentNode={path ? '/' + path : ''}
              as={navLinkElement}
              link={{ path: node, ...currentLinks[node] }}
              rightArrowIcon={rightArrowIcon}
              onNodeClick={handleNodeClick}
            />
          );
        })}
      </Links>
    </ReactDrilldownMenuSC>
  );
};

ReactDrilldownMenu.propTypes = {
  activeLink: PropTypes.string,
  name: PropTypes.string,
  icon: PropTypes.any,
  links: PropTypes.object.isRequired,
  rightArrowIcon: PropTypes.any,
  navLinkElement: PropTypes.any.isRequired,
};

ReactDrilldownMenu.defaultProps = {
  activeLink: '',
  name: 'Menu',
  icon: <SquareFill />,
  rightArrowIcon: null,
};
