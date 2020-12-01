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
        theme="dark"
        customTheme={{
          selectionBackgroundColor: '#444444',
        }}
        activeLink={location.pathname}
        defaultLeafIcon={<Icon.FileCode />}
        defaultBranchIcon={<Icon.Folder />}
        links={{
          home: {
            label: 'Home',
            icon: <Icon.HouseFill />,
          },
          desktop: {
            label: 'Desktop',
            icon: <Icon.App />,
            links: {
              'folder-1': {
                label: 'Folder 1',
                links: {
                  'file-1.1': {
                    label: 'File 1.1',
                  },
                  'file-1.2': {
                    label: 'File 1.2',
                  },
                  'file-1.3': {
                    label: 'File 1.3',
                  },
                },
              },
              'folder-2': {
                label: 'Folder 2',
                links: {
                  'file-2.1': {
                    label: 'File 2.1',
                  },
                  'file-2.2': {
                    label: 'File 2.2',
                  },
                },
              },
            },
          },
          documents: {
            label: 'Documents',
            icon: <Icon.JournalAlbum />,
            links: {
              scripts: {
                label: 'Scripts',
                links: {
                  'scripts-1.1': {
                    label: 'Scripts 1.1',
                  },
                  'scripts-1.2': {
                    label: 'Scripts 1.2',
                  },
                  'scripts-1.3': {
                    label: 'Scripts 1.3',
                  },
                  'scripts-1.4': {
                    label: 'Scripts 1.4',
                  },
                },
              },
              projects: {
                label: 'Projects',
                links: {
                  'menu-project': {
                    label: 'Menu Project',
                  },
                  'count-app': {
                    label: 'Count App',
                  },
                },
              },
            },
          },
          downloads: {
            label: 'Documents',
            icon: <Icon.JournalArrowDown />,
            links: {
              info: {
                label: 'info.pdf',
                icon: <Icon.FileEarmarkPpt />,
              },
              project_code: {
                label: 'project_code.zip',
                icon: <Icon.FileEarmarkZip />,
              },
              games: {
                label: 'Games',
                links: {
                  'game-1': {
                    label: 'Game 1',
                  },
                  'game-2': {
                    label: 'Game 2',
                  },
                },
              },
            },
          },

          settings: {
            label: 'Settings',
            icon: <Icon.GearFill />,
          },
          about: {
            label: 'About',
            icon: <Icon.InfoCircleFill />,
          },
        }}
        onLeafNodeClick={handleLeafNodeClick}
      />
    </div>
  );
}
