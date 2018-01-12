import React from 'react';
import { Link } from 'react-router-dom';
import Hello from './Hello';
import Clock from './Clock';
import Toggle from './Toggle';

function Sidebar({ match }) {
  return (
    <ul>
      <li><Link to={`${match.url}/hello`}>Hello</Link></li>
      <li><Link to={`${match.url}/clock`}>Clock</Link></li>
      <li><Link to={`${match.url}/toggle`}>Toggle</Link></li>
    </ul>
  );
}

function Routes({ match }) {
  return [
    {
      path: '/hello',
      main: () => Hello
    },
    {
      path: '/clock',
      main: () => Clock
    },
    {
      path: '/toggle',
      main: () => Toggle
    },
  ];
}

function Main() {
  return (
    <div>
      <h2>基础</h2>
    </div>
  );
}

export default {
  Sidebar,
  Main,
  Routes
}