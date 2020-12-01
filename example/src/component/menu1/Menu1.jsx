import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons';

import { ReactDrilldownMenu } from 'react-drilldown-menu';

export default function Menu1() {
  const location = useLocation();
  const history = useHistory();

  const handleLeafNodeClick = (newPath) => {
    history.push(newPath);
  };

  return (
    <div className="menu">
      <ReactDrilldownMenu
        name="Menu 1"
        icon={<Icon.FileBinaryFill />} // asdads
        activeLink={location.pathname}
        defaultLeafIcon={<Icon.CircleFill />}
        defaultBranchIcon={<Icon.SquareFill />}
        links={{
          'page-1': {
            label: 'Page 1',
          },
          'page-2': {
            label: 'Page 2',
            icon: <Icon.BarChartFill />,
          },
          'node-1': {
            label: 'Node 1',
            links: {
              'page-3': {
                label: 'Page 3',
              },
              'page-4': {
                label: 'Page 4',
              },
            },
          },
          'node-2': {
            label: 'Node 2',
            links: {
              'node-2.1': {
                label: 'Node 2.1',
                links: {
                  'page-3': {
                    label: 'Page 3',
                  },
                },
              },
              'page-3': {
                label: 'Page 3',
              },
            },
          },

          'page-6': {
            label: 'Page 6',
          },
        }}
        onLeafNodeClick={handleLeafNodeClick}
      />
    </div>
  );
}
