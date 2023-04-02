
import './App.css';

import { Box, Flex, Spacer, Text } from '@chakra-ui/react';

function Navbar() {
  return (
    <Flex bg="gray.800" color="white" p={3} alignItems="center" >
      <Box>
        <Text fontSize="xl" fontWeight="bold">MY Web <span>.</span></Text>
      </Box>
      <Spacer />
      <Box mx={4} className="box">
        <Text>Home</Text>
      </Box>
      <Box mx={4} className="box">
        <Text>About</Text>
      </Box>
      <Box mx={4} className="box">
        <Text>Pages</Text>
      </Box>
      <Box mx={4} className="box">
        <Text>About us</Text>
      </Box>
      <Box mx={4} className="box">
        <Text>Contact</Text>
      </Box>
    </Flex>
  );
}

export default Navbar;

