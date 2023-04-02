import './Form.css'
import { Button, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react';

function SignupForm() {
  return (
    <div className='div'>
        <div className='bg'>
    <form >
      <Stack spacing={4} maxW="600px" mx="auto">
        <h1>Sign-up</h1>
        <FormControl id="name">
          <FormLabel>Name</FormLabel>
          <Input type="text" required />
        </FormControl>
        <FormControl id="name">
          <FormLabel>Last Name</FormLabel>
          <Input type="text" required />
        </FormControl>
        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input type="email" required />
        </FormControl>
        <FormControl id="password">
          <FormLabel>Password</FormLabel>
          <Input type="password" required />
        </FormControl>
        <Button colorScheme='yellow' type="submit" mt="10!important">Sign up</Button>
      </Stack>
    </form>
    </div>
    </div>
  );
}

export default SignupForm;
