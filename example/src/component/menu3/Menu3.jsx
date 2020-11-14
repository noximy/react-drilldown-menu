import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
// import * as Icon from 'react-bootstrap-icons';

import { ReactDrilldownMenu } from 'react-drilldown-menu';

export default function Menu3() {
  const location = useLocation();
  return (
    <div className="menu">
      <ReactDrilldownMenu
        activeLink={location.pathname} // your current path
        navLink={NavLink} // NavLink element from react-router-dom
        links={{
          'page-1': {
            // key here resembles to path
            label: 'Page 1', // Label on the menu link
          },
          'page-2': {
            label: 'Page 2',
          },
          'branch-1': {
            // Branch for the inner nodes/links
            label: 'Branch 1',
            links: {
              'page-3': {
                label: 'Page 3',
              },
              'page-4': {
                label: 'Page 4',
              },
            },
          },
        }}
      />
    </div>
  );
}
