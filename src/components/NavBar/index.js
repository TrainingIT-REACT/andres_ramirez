import * as React from 'react';

function NavBar({ children }) {
  return <nav {...{ className: "NavBar" }}>{children}</nav>;
}

export default NavBar;
