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
    <LinkSC>
      {link.links ? (
        <div className="link-element" onClick={() => onNodeClick(link.path)}>
          <Icon>{link.icon}</Icon>
          <Label>{link.label}</Label>
          <RightArrow>{React.createElement(rightArrowIcon)}</RightArrow>
        </div>
      ) : (
        React.createElement(as, {
          to: `${currentNode}/${link.path}`,
          className: 'link-element',
          children: (
            <React.Fragment>
              <Icon>{link.icon}</Icon>
              <Label>{link.label}</Label>
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
