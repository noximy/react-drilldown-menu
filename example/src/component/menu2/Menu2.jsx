import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
// import * as Icon from 'react-bootstrap-icons';

import { ReactDrilldownMenu } from 'react-drilldown-menu';

export default function Menu2() {
  const location = useLocation();
  return (
    <div className="menu">
      <ReactDrilldownMenu
        name="Menu 2"
        navLink={NavLink}
        activeLink={location.pathname}
        links={{
          'node-2': {
            label: 'Node 2',
            links: {
              'page-3': {
                label: 'Page 3',
              },
            },
          },
          'page-2': {
            label: 'Page 2',
          },
          'page-6': {
            label: 'Page 6',
          },
        }}
      />
    </div>
  );
}
