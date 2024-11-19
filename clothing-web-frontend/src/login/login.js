import React, { useState } from 'react';
import {
  Box,
  Container,
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
} from '@chakra-ui/react';

const Login = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toast = useToast();
    const handleLogin = (event) => {
      event.preventDefault();
      setIsOpen(true);
      toast({
          title: "Logged In",
          description: "You have been successfully logged in.",
          status: "success",
          duration: 1000,
          isClosable: true,
      });
      setTimeout(() => {
        setIsOpen(false);
        window.location.href = '/Home';
      }, 1000);
    };
    return (
      <Box
        //bg="linear-gradient(to bottom right, #4F3BA9, #9068BE)"
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="100vh"
        bg="white"
      >
        <Container
          bg="#28282B"
          p={8}
          borderRadius="15px"
          boxShadow="lg"
          width="100%"
          maxW="300px"
        >
          <h1 style={{ color: 'white' }}>Welcome Admin !!!</h1>
          <form >
            <FormControl>
              <FormLabel style={{ color: 'white' }}>Admin Email</FormLabel>
              <Input
                type="text"
                placeholder="Enter your Email"
                value="admin@gmail.com"
                borderColor="white"
                color={'white'}
                //value={username} 
                //onChange={(e) => setUsername(e.target.value)}
                disabled
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel style={{ color: 'white' }}>Password</FormLabel>
              <Input
                type="password"
                placeholder="Enter your password"
                value="admin"
                borderColor="white"
                color={'white'}
                disabled
              />
            </FormControl>
            <Button color="primary" mt={6} w="20" onClick={handleLogin}>
              Login
            </Button>
          </form>
        </Container>
      </Box>
    );
};

export default Login;
