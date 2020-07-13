import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <main className="col-full">{children}</main>
    </div>
  );
};

export default Layout;
