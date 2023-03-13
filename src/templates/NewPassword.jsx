import React from 'react';
import Image from 'next/image';
import '@styles/NewPassword.scss';
import logo from '@logos/logo_yard_sale.svg';

const NewPassword = () => {
	return (
<div classname="NewPassword">
  <div classname="NewPassword-container">
    <Image src={logo} alt="logo" classname="logo" />
    <h1 classname="title">Create a new password</h1>
    <p classname="subtitle">Enter a new passwrd for yue account</p>
    <form action="/" classname="form">
      <label htmlFor="password" classname="label">Password</label>
      <input type="password" id="password" placeholder="*********" classname="input input-password" />
      <label htmlFor="new-password" classname="label">Password</label>
      <input type="password" id="new-password" placeholder="*********" classname="input input-password" />
      <input type="submit" defaultValue="Confirm" classname="primary-button login-button" />
    </form>
  </div>
</div>

	);
};

export default NewPassword;
