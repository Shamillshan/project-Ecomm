import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace the URL with your actual server endpoint for handling form submissions
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Form data submitted:', data);
        // Reset the form after successful submission
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      })
      .catch((error) => {
        console.error('Error submitting form data:', error);
      });
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px', textAlign: 'center' }}>
      <h2>Contact Us </h2> <br/>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <label style={{ marginBottom: '10px' }}>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{ marginLeft: '5px', padding: '5px', width: '100%' }}
          />
        </label>
        <label style={{ marginBottom: '10px' }}>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ marginLeft: '5px', padding: '5px', width: '100%' }}
          />
        </label>
        <label style={{ marginBottom: '10px' }}>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            style={{ marginLeft: '5px', padding: '5px', width: '100%' }}
          />
        </label>
        <button
          type="submit"
          style={{
            backgroundColor: '#4CAF50',
            color: 'white',
            padding: '10px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
