import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Button, Text } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Flex justifyContent="space-between" p="4" bg="gray.200">
      <Text>Welcome</Text>
      <Flex>
        <Link to="/login">
          <Button mr="4">Login</Button>
        </Link>
        <Link to="/signup">
          <Button>Signup</Button>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Navbar;
