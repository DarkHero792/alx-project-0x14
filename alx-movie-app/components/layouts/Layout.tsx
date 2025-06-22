import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {/* Header and Footer can be imported and placed here */}
      {children}
    </div>
  );
};

export default Layout;
