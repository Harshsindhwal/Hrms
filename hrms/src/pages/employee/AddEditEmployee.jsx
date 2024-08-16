import React from 'react';
import { Typography, Container } from '@mui/material';
import Form from '../../components/common/Form';

function AddEditEmployee() {
  const fields = [
    { name: 'firstName', label: 'First Name' },
    { name: 'lastName', label: 'Last Name' },
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'position', label: 'Position' },
    { name: 'department', label: 'Department' },
    { name: 'phone', label: 'Phone' },
    { name: 'hireDate', type: 'date' },
  ];

  const handleSubmit = (data) => {
    console.log('Employee data:', data);
    // Implement add/edit employee logic here
  };

  return (
    <Container component="main" maxWidth="sm">
      <Typography component="h1" variant="h5">
        Add/Edit Employee
      </Typography>
      <Form fields={fields} onSubmit={handleSubmit} />
    </Container>
  );
}

export default AddEditEmployee;
