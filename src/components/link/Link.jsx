import React from 'react';
import PropTypes from 'prop-types';

import { ChevronRight } from 'react-bootstrap-icons';

import { LinkSC, Icon, Label, RightArrow } from './Link-style';

export default function Link({
  currentNode,
  link,
  as,
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
          <Icon className="k-link-icon k-node-icon">{link.icon}</Icon>
          <Label className="k-link-label k-node-label">{link.label}</Label>
          <RightArrow>{React.createElement(rightArrowIcon)}</RightArrow>
        </div>
      ) : (
        React.createElement(as, {
          to: `${currentNode}/${link.path}`,
          className: 'link-element k-link-anchor',
          children: (
            <React.Fragment>
              <Icon className="k-link-icon">{link.icon}</Icon>
              <Label className="k-link-label">{link.label}</Label>
            </React.Fragment>
          ),
        })
      )}
    </LinkSC>
  );
}

Link.propTypes = {
  currentNode: PropTypes.string.isRequired,
  link: PropTypes.object.isRequired,
  as: PropTypes.any.isRequired,
  rightArrowIcon: PropTypes.any,
  onNodeClick: PropTypes.func.isRequired,
};

Link.defaultProps = {
  rightArrowIcon: ChevronRight,
};
