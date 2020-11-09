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
    <HeaderSC>
      <NodeInfo>
        <NodeIcon>{nodeInfo ? nodeInfo.icon : menuIcon}</NodeIcon>
        <NodeLabel>{nodeInfo ? nodeInfo.label : menuName}</NodeLabel>
      </NodeInfo>

      <ExpandIcon
        onClick={onToggleExpand}
        className={expanded ? '' : 'collapsed'}
      >
        <ChevronDown />
      </ExpandIcon>
    </HeaderSC>
  );
}

Header.propTypes = {
  expanded: PropTypes.bool.isRequired,
  nodeInfo: PropTypes.object,
  menuIcon: PropTypes.any.isRequired,
  menuName: PropTypes.string.isRequired,
  onToggleExpand: PropTypes.func.isRequired,
};

Header.defaultProps = {
  nodeInfo: null,
};
