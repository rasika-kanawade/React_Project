// src/components/RegistrationForm.tsx
import React, { useState } from 'react';

// Define types for form data
interface FormData {
  name: string;
  email: string;
  password: string;
}

// Define types for validation errors
interface Errors {
  name?: string;
  email?: string;
  password?: string;
}

const RegistrationForm: React.FC = () => {
  // Initialize form data and errors state
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState<Errors>({});

  // Handle change in form fields
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  // Validate form data
  const validate = () => {
    const newErrors: Errors = {};

    // Name validation
    if (formData.name.trim() === '') {
      newErrors.name = 'Name is required';
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    // Password validation
    if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form data:', formData);
      // Handle successful form submission (e.g., API call)
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
