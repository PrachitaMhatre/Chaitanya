import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="banner">
          <div className="left"><img className="logo" src="/logo.png" alt="logo" height={150} width={150} /></div>
          <div className="right">
            <p>Janta Market Road, Bhandup(West) Mumbai - 400078</p>
            <p>Open: 11:00 AM - 11:00 PM</p>
          </div>
        </div>
        <div className="banner">
          <div className="left">
            <p>Developed By Prachita Mhatre
            </p>
          </div>
          <div className="right">
            <p>All Rights Reserved By Chaitanya</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;