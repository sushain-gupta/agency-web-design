import React from "react";
import { Link } from "react-router-dom";

function FooterLink({ to, linkName }) {
  return (
    <li className="flex h-full items-center">
      <Link to={to} className="text-gray-400">
        {linkName}
      </Link>
    </li>
  );
}

export default FooterLink;
