import React from 'react';
import '@styles/MyAccount.scss';

const MyAccount = () => {
	return (
<div classname="MyAccount">
  <div classname="MyAccount-container">
    <h1 classname="title">My account</h1>
    <form action="/" classname="form">
      <div>
        <label htmlFor="name" classname="label">Name</label>
        <p classname="value">Camila Yokoo</p>
        <label htmlFor="email" classname="label">Email</label>
        <p classname="value">camilayokoo@gmail.com</p>
        <label htmlFor="password" classname="label">Password</label>
        <p classname="value">*********</p>
      </div>
      <input type="submit" defaultValue="Edit" classname="secondary-button login-button" />
    </form>
  </div>
</div>

	);
};

export default MyAccount;
