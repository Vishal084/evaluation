import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Box, Button, Input, Stack, Text } from '@chakra-ui/react';

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const navigate = useNavigate();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    alert('Registration successful');
    navigate('/login');
  };

  return (
    <Box maxW="md" mx="auto" mt="10">
      <form onSubmit={handleFormSubmit}>
        <Stack spacing="4">
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
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
          <Input
            type="password"
            placeholder="Confirm Password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            required
          />
          <Button type="submit">Signup</Button>
        </Stack>
      </form>
      <Text mt="4" textAlign="center">
        Already have an account? <Link to="/login">Login</Link>
      </Text>
    </Box>
  );
};

export default SignupPage;
