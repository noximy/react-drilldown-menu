import React from 'react';

import { NavLink } from 'react-router-dom';

import './Settings.css';

export default function Settings() {
  return (
    <div className="Settings">
      <NavLink to="/settings/tab-1">Settings Tab 1</NavLink>
      <NavLink to="/settings/tab-2">Settings Tab 2</NavLink>
    </div>
  );
}
