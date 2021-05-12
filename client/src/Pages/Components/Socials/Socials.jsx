import React from 'react';
import './index.scss';

export default function Socials() {
  return (
    <>
      <div className="mt text-left">
        <a
          target="_blank"
          rel="noreferrer"
          className="btn socials__outline btn-social  mx-1"
          href="https://github.com/frederickhazel6996/URL-Shortener"
        >
          <i className="fab fa-fw fa-github doctor-icon"></i>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          className="btn socials__outline btn-social  mx-1"
          href="https://twitter.com/meister_kwame"
        >
          <i className="fab fa-fw fa-twitter doctor-icon"></i>
        </a>
      </div>
    </>
  );
}
