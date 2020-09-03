import React, { FunctionComponent } from 'react';

interface LayoutProps {
  location: string;
}

const Layout: FunctionComponent<LayoutProps> = ({ location, children }) => {
  return <h1>test</h1>;
};

export default Layout;
