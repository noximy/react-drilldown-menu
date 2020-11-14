import React from 'react';
import PropTypes from 'prop-types';

import { LinkSC, IconSC, Label, RightArrow } from './LinkComp-style';

export default function LinkComp({
  navLink,
  currentNode,
  link,
  defaultLeafIcon,
  defaultBranchIcon,
  rightArrowIcon,
  onNodeClick,
}) {
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
        React.createElement(navLink, {
          to: `${currentNode}/${link.path}`,
          className: 'link-element k-link-anchor',
          children: (
            <React.Fragment>
              <IconSC className="k-link-icon">
                {link.icon ? link.icon : defaultLeafIcon}
              </IconSC>
              <Label className="k-link-label">{link.label}</Label>
            </React.Fragment>
          ),
        })
      )}
    </LinkSC>
  );
}

LinkComp.propTypes = {
  navLink: PropTypes.object.isRequired,
  currentNode: PropTypes.string.isRequired,
  link: PropTypes.object.isRequired,
  defaultLeafIcon: PropTypes.object,
  defaultBranchIcon: PropTypes.object,
  rightArrowIcon: PropTypes.object,
  onNodeClick: PropTypes.func.isRequired,
};

LinkComp.defaultProps = {
  defaultLeafIcon: null,
  defaultBranchIcon: null,
  rightArrowIcon: null,
};
