import React from 'react';
import { useLocation } from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons';

import { ReactDrilldownMenu } from 'react-drilldown-menu';

export default function Menu2() {
  const location = useLocation();
  return (
    <div className="menu">
      <ReactDrilldownMenu
        name="Menu 2"
        activeLink={location.pathname}
        links={{
          'node-2': {
            label: 'Node 2',
            icon: <Icon.SquareFill />,
            links: {
              'page-3': {
                label: 'Page 3',
                icon: <Icon.CircleFill />,
              },
            },
          },
          'page-2': {
            label: 'Page 2',
            icon: <Icon.CircleFill />,
          },
          'page-6': {
            label: 'Page 6',
            icon: <Icon.CircleFill />,
          },
        }}
      />
    </div>
  );
}
