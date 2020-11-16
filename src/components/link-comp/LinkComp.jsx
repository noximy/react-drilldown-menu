import React from 'react';
import PropTypes from 'prop-types';

import { LinkSC, IconSC, Label, RightArrow } from './LinkComp-style';

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
  console.log(activeLink);
  console.log(`${currentNode}/${link.path}`);
  console.log(activeLink.search(`${currentNode}/${link.path}`) !== -1);

  return (
    <LinkSC className="k-link">
      {link.links ? (
        <div
          className="link-element k-node-link"
          onClick={() => onNodeClick(link.path)}
        >
          <IconSC className="k-link-icon k-node-icon">
            {link.icon ? link.icon : defaultBranchIcon}
          </IconSC>
          <Label className="k-link-label k-node-label">
            {link.label ? link.label : ''}
          </Label>
          <RightArrow>{rightArrowIcon}</RightArrow>
        </div>
      ) : (
        <div
          className={
            'link-element k-link-anchor' +
            (activeLink.search(`${currentNode}/${link.path}`) !== -1
              ? ' active'
              : '')
          }
          onClick={() => onLeafNodeClick(`${currentNode}/${link.path}`)}
        >
          <IconSC className="k-link-icon k-node-icon">
            {link.icon ? link.icon : defaultLeafIcon}
          </IconSC>
          <Label className="k-link-label k-node-label">
            {link.label ? link.label : ''}
          </Label>
        </div>
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
