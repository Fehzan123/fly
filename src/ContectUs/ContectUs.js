import React, { useState,useContext } from 'react';
import './ContectUs.css'; // Import the CSS file
import { MyContext } from '../context/Context';

const ContectUs = () => {
  const {setValue} = useContext(MyContext)
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('https://getform.io/f/zbzkeoma', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then((response) => {
        if (response.ok) {
          alert('Form submitted successfully!');
          setFormData({ email: '', firstName: '', lastName: '', message: '' }); // Clear the form
        } else {
          alert('Failed to submit the form.');
        }
        setValue(false);
      })
      .catch((error) => {
        alert('An error occurred while submitting the form.');
        console.error('Form submission error:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Talk to us</h4>
      <div className="form-group">
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="input-field"
        />
        <label htmlFor="email">Work email*</label>
      </div>
      <div className="name-group">
        <div className="form-group">
          <input
            type="text"
            id="first-name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="input-field"
          />
          <label htmlFor="first-name">First Name</label>
        </div>
        <div className="form-group">
          <input
            type="text"
            id="last-name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="input-field"
          />
          <label htmlFor="last-name">Last Name</label>
        </div>
      </div>
      <div className="form-group">
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="textarea-field"
        ></textarea>
        <label htmlFor="message">Message</label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContectUs;
