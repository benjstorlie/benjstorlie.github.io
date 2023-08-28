import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Email from './Email';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email) => {
    // A simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (errors[name]) {
      validateOne({name,value})
    }
  };

  const validateInput = (data) => {
    const newErrors = {};
    const inputNames = Object.keys(data);
    if (inputNames.includes('name') && data.name.trim() === '') {
      newErrors.name = 'Name is required';
    }
    if (inputNames.includes('email')) {
      if (!validateEmail(data.email)) {
        newErrors.email = 'Invalid email format';
      }
      if (data.email.trim() === '') {
        newErrors.email = 'Email is required';
      }
    }
    if (inputNames.includes('message') && data.message.trim() === '') {
      newErrors.message = 'Message is required';
    }

    if (Object.keys(newErrors).length === 0) {
      return {isValid: true, newErrors}
    } else {
      return {isValid: false, newErrors}
    }
  }

  const validateOne = ({name, value}) => {
    const {isValid, newErrors } = validateInput({[name]: value});
    if (isValid) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: ''
      }))
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: newErrors[name]
      }))
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const {isValid, newErrors }= validateInput(formData);

    setErrors(newErrors);

    if (isValid) {
      setIsSubmitted(true);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          onBlur={(e) => validateOne(e.target)}
          isInvalid={!!errors.name}
        />
        <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          onBlur={(e) => validateOne(e.target)}
          isInvalid={!!errors.email}
        />
        <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="message">
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          rows={4}
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          onBlur={(e) => validateOne(e.target)}
          isInvalid={!!errors.message}
        />
        <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
      </Form.Group>

      <Button type="submit" disabled={(errors.name || errors.email || errors.message)}>Submit</Button>

      {isSubmitted ? (<Form.Text id="submit-feedback">
        That's a valid form, good job. ✅  Now go send a regular email to <Email />
      </Form.Text>) : ''}
    </Form>
  );
};
