import React from "react";
import { Link, withRouter } from "react-router-dom";

const RouteMap = [
  {
    label: "Home",
    path: "/"
  },
  {
    label: "Loan",
    path: "/loan"
  },
  {
    label: "Map",
    path: "/map"
  }
];

export const Nav = props => {
  const pathName = props.location.pathname;
  return (
    <ul class="nav nav-tabs">
      {RouteMap.map((r, i) => {
        return (
          <li
            role="presentation"
            class={`${props.location.pathname === r.path ? "active" : ""}`}
          >
            <Link to={r.path}>{r.label}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default withRouter(Nav);
