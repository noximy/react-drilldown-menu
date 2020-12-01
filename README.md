# react-drilldown-menu

Drilldown Menu system built for [React](https://reactjs.org) Application

[![NPM](https://img.shields.io/npm/v/react-drilldown-menu.svg)](https://www.npmjs.com/package/react-drilldown-menu)

## Feature

- n level menu
- Auto detection of the active tree level and page from url pathname
- Multi menu on single screen
- Default icons

<br />

## Demo

![Basic Usage Demo](https://raw.githubusercontent.com/noximy/react-drilldown-menu/master/demo-images/drilldown-menu-basic-usage-demo.gif 'Basic usage demo')

## Install

### npm

```bash
npm install --save react-drilldown-menu
```

### yarn

```bash
yarn add react-drilldown-menu
```

<br />

## Usage

### Basic example

```jsx
import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { ReactDrilldownMenu } from 'react-drilldown-menu';

export default function YourComponent() {
  const location = useLocation();
  const history = useHistory();

  const handleLeafNodeClick = (newPath) => {
    history.push(newPath);
  };

  return (
    <div className="menu">
      <ReactDrilldownMenu
        activeLink={location.pathname} // your current path
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
        onLeafNodeClick={handleLeafNodeClick}
      />
    </div>
  );
}
```

### Complex example

```jsx
import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { ReactDrilldownMenu } from 'react-drilldown-menu';

export default function YourComponent() {
  const location = useLocation();
  const history = useHistory();

  const handleLeafNodeClick = (newPath) => {
    history.push(newPath);
  };

  return (
    <div className="menu">
      <ReactDrilldownMenu
        theme="dark" // "light" or "dark"
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
```

## Custom theme possible keys

```json
{
  "menuBackgroundColor": "#ffffff",
  "selectionBackgroundColor": "#5098cd",
  "linkIconColor": "#888888",
  "linkTextColor": "#111111",
  "activeLinkTextColor": "#ffffff",
  "activeLinkIconColor": "#ffffff",
  "hoverLinkBackgroundColor": "#f5f5f5"
}
```

## Useful Links:

- [Changelog](https://github.com/noximy/react-drilldown-menu/blob/master/History.md)
- [Raise a Issue](https://github.com/noximy/react-drilldown-menu/issues)

## License

MIT © [noximy](https://github.com/noximy)
