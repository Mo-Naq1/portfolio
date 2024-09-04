import React, { ReactNode } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

interface CustomLinkProps {
  to: string;
  children: ReactNode;
  [key: string]: any;
}

function CustomLink({ to, children, ...props }: CustomLinkProps) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        <img src="/homeicon.svg" alt="Home" className="w-16 h-16" />
      </Link>
      <ul>
        <CustomLink to="/contact">Contact</CustomLink>
        <CustomLink to="/projects">Projects</CustomLink>
      </ul>
    </nav>
  );
}
