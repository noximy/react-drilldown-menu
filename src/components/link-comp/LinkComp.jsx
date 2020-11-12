import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { ChevronRight, CircleFill } from 'react-bootstrap-icons';

import { LinkSC, IconSC, Label, RightArrow } from './LinkComp-style';

export default function LinkComp({ currentNode, link, onNodeClick }) {
  return (
    <LinkSC className="k-link">
      {link.links ? (
        <div
          className="link-element k-node-link"
          onClick={() => onNodeClick(link.path)}
        >
          <IconSC className="k-link-icon k-node-icon">
            {link.icon ? link.icon : <CircleFill />}
          </IconSC>
          <Label className="k-link-label k-node-label">
            {link.label ? link.label : ''}
          </Label>
          <RightArrow>
            <ChevronRight />
          </RightArrow>
        </div>
      ) : (
        <NavLink
          to={`${currentNode}/${link.path}`}
          className="link-element k-link-anchor"
        >
          <IconSC className="k-link-icon">
            {link.icon ? link.icon : <CircleFill />}
          </IconSC>
          <Label className="k-link-label">{link.label}</Label>
        </NavLink>
      )}
    </LinkSC>
  );
}

LinkComp.propTypes = {
  currentNode: PropTypes.string.isRequired,
  link: PropTypes.object.isRequired,
  onNodeClick: PropTypes.func.isRequired,
};
