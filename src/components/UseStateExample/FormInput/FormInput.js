import React, { useState } from 'react';

const FormInput = () => {
  const [fName, setFName] = useState('');
  const [sName, setSName] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');

  const handleFNameChange = (e) => {
    setFName(e.target.value);
  }

  const handleSNameChange = (e) => {
    setSName(e.target.value);
  }

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  }

  const handleContactChange = (e) => {
    setContact(e.target.value);
  }

  return (
    <>
      <h1>Form Input using useState</h1>
      <label>First Name:</label>
      <input value={fName} onChange={handleFNameChange} />
      <br />
      <label>Second Name:</label>
      <input value={sName} onChange={handleSNameChange} />
      <br />
      <label>Address</label>
      <input value={address} onChange={handleAddressChange} />
      <br />
      <label>Contact</label>
      <input value={contact} onChange={handleContactChange} />
      <hr />
      <h5>User Details:</h5>
      <p><strong>Full Name: {fName} {sName}</strong></p>
      <p><strong>Address: {address}</strong></p>
      <p><strong>Contact: {contact}</strong></p>
    </>
  )
}

export default FormInput;
