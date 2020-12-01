import React from 'react';
import PropTypes from 'prop-types';

import {
  LinkSC,
  LinkElement,
  IconSC,
  Label,
  RightArrow,
} from './LinkComp-style';

export default function LinkComp({
  currentNode,
  link,
  activeLink,
  defaultLeafIcon,
  defaultBranchIcon,
  rightArrowIcon,
  onNodeClick,
  onLeafNodeClick,
}) {
  return (
    <LinkSC className="k-link">
      {link.links ? (
        <LinkElement
          className="k-node-link"
          onClick={() => onNodeClick(link.path)}
        >
          <IconSC className="k-link-icon k-node-icon">
            {link.icon ? link.icon : defaultBranchIcon}
          </IconSC>
          <Label className="k-link-label k-node-label">
            {link.label ? link.label : ''}
          </Label>
          <RightArrow>{rightArrowIcon}</RightArrow>
        </LinkElement>
      ) : (
        <LinkElement
          className={
            'k-link-anchor' +
            (activeLink.search(`${currentNode}/${link.path}`) !== -1
              ? ' active'
              : '')
          }
          onClick={() => onLeafNodeClick(`${currentNode}/${link.path}`)}
        >
          <IconSC className="k-link-icon k-branch-icon">
            {link.icon ? link.icon : defaultLeafIcon}
          </IconSC>
          <Label className="k-link-label k-branch-label">
            {link.label ? link.label : ''}
          </Label>
        </LinkElement>
      )}
    </LinkSC>
  );
}

LinkComp.propTypes = {
  currentNode: PropTypes.string.isRequired,
  activeLink: PropTypes.string.isRequired,
  link: PropTypes.object.isRequired,
  defaultLeafIcon: PropTypes.object,
  defaultBranchIcon: PropTypes.object,
  rightArrowIcon: PropTypes.object,
  onNodeClick: PropTypes.func.isRequired,
  onLeafNodeClick: PropTypes.func.isRequired,
};

LinkComp.defaultProps = {
  defaultLeafIcon: null,
  defaultBranchIcon: null,
  rightArrowIcon: null,
};
