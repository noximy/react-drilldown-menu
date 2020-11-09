import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons';

import { ReactDrilldownMenu } from 'react-drilldown-menu';
import 'react-drilldown-menu/dist/index.css';

export default function Menu1() {
  const location = useLocation();
  return (
    <div className="menu">
      <ReactDrilldownMenu
        name="Menu 1"
        activeLink={location.pathname}
        navLinkElement={NavLink}
        links={{
          'page-1': {
            label: 'Page 1',
            icon: <Icon.CircleFill />,
          },
          'page-2': {
            label: 'Page 2',
            icon: <Icon.CircleFill />,
          },
          'node-1': {
            label: 'Node 1',
            icon: <Icon.SquareFill />,
            links: {
              'page-3': {
                label: 'Page 3',
                icon: <Icon.CircleFill />,
              },
              'page-4': {
                label: 'Page 4',
                icon: <Icon.CircleFill />,
              },
            },
          },
        }}
      />
    </div>
  );
}
