import React from 'react';
import PropTypes from 'prop-types';

import {
  HeaderSC,
  NodeInfo,
  NodeIcon,
  NodeLabel,
  ExpandIcon,
} from './Header-style';

import { ChevronDown } from 'react-bootstrap-icons';

export default function Header({
  expanded,
  nodeInfo,
  menuIcon,
  menuName,
  onToggleExpand,
}) {
  return (
    <HeaderSC className="k-header">
      <NodeInfo className="k-header-name-container">
        <NodeIcon className="k-header-icon">
          {nodeInfo ? nodeInfo.icon : menuIcon}
        </NodeIcon>
        <NodeLabel className="k-header-name">
          {nodeInfo ? nodeInfo.label : menuName}
        </NodeLabel>
      </NodeInfo>

      <ExpandIcon
        onClick={onToggleExpand}
        className={'k-expand-icon ' + (expanded ? '' : 'collapsed')}
      >
        <ChevronDown />
      </ExpandIcon>
    </HeaderSC>
  );
}

Header.propTypes = {
  expanded: PropTypes.bool.isRequired,
  nodeInfo: PropTypes.object,
  menuIcon: PropTypes.object.isRequired,
  menuName: PropTypes.string.isRequired,
  onToggleExpand: PropTypes.func.isRequired,
};

Header.defaultProps = {
  nodeInfo: null,
};
