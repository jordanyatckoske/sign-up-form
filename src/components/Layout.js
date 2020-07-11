import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
      <footer>&copy; Jordan Yatckoske</footer>
    </div>
  );
};

export default Layout;
