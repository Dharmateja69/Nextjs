import Link from "next/link";

import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <ul className="login-menu">
        <li>
          <Link href="/">Login Main</Link>
        </li>
        <li>
          <Link href="/dashboard">Login Regular User</Link>
        </li>
        <li>
          <Link href="/loginiadmin">Login Admin</Link>
        </li>
      </ul>
      {children}
    </div>
  );
};

export default Layout;
