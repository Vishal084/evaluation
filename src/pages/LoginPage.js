import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Box, Button, Input, Stack, Text } from '@chakra-ui/react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Perform login logic here
    alert('Login successful');
    navigate('/home'); // Redirect to home page after successful login
  };

  return (
    <Box maxW="md" mx="auto" mt="10">
      <form id="login-form" onSubmit={handleFormSubmit}>
        <Stack spacing="4">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit">Login</Button>
        </Stack>
      </form>
      <Text mt="4" textAlign="center">
        Don't have an account? <Link to="/signup">Signup</Link>
      </Text>
    </Box>
  );
};

export default LoginPage;
