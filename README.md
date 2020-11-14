# react-drilldown-menu

Drilldown Menu system built for [React](https://reactjs.org) Application

[![NPM](https://img.shields.io/npm/v/react-drilldown-menu.svg)](https://www.npmjs.com/package/react-drilldown-menu)

## Feature

- n level menu
- Auto detection of the active tree level and page from url pathname
- Multi menu on single screen
- Default icons

<br />

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

### Basic usage

<br/>

Demo

![Basic Usage Demo](https://raw.githubusercontent.com/noximy/react-drilldown-menu/master/demo-images/drilldown-menu-basic-usage-demo.gif 'Basic usage demo')

<br/>

Code

```jsx
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom'; // React-router-dom is required
import { ReactDrilldownMenu } from 'react-drilldown-menu';

export default function YourComponent {
  render() {
    return <ReactDrilldownMenu
        activeLink={location.pathname}  // your current path
        navLink={NavLink}  // NavLink element from react-router-dom
        links={{

          'page-1': {  // key here resembles to path
            label: 'Page 1', // Label on the menu link
          },

          'page-2': {
            label: 'Page 2',
          },

          'branch-1': {  // Branch for the inner nodes/links
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
      />;
  }
}
```

## License

MIT © [noximy](https://github.com/noximy)
