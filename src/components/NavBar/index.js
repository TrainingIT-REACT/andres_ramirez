import * as React from 'react';

function NavBar({ children }) {
  return <div {...{ className: "NavBar" }}>{children}</div>;
}

export default NavBar;
