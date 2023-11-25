import React from 'react';

import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Nav } from './styled';

export default function Header() {
  const clickedButton = useSelector((satate) => satate.example.clickedButton);
  return (
    <Nav>
      <Link aria-label="Home Button" to="/">
        <FaHome syze={24} />
      </Link>

      <Link aria-label="Login Button" to="/login">
        <FaUserAlt syze={24} />
      </Link>

      <Link aria-label="Exit Button" to="/algo">
        <FaSignInAlt syze={24} />
      </Link>
      {clickedButton ? 'Ckicked' : 'Unclicked'}
    </Nav>
  );
}
