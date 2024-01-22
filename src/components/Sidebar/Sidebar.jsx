import React from 'react';
import './sidebar.css';
const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul>
        <a>
          <li>Profile</li>
        </a>
        <a>
          <li>Messages</li>
        </a>
        <a>
          <li>News</li>
        </a>
        <a>
          <li>Music</li>
        </a>
        <a>
          <li>Settings</li>
        </a>
      </ul>
    </nav>
  );
};

export default Sidebar;
