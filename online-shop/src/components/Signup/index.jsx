import { useState } from 'react';
import { Contenair, Form, FormButton, FormContent, FormH1, FormInput, FormWrap, FormLabel, Icon, Text } from "./SignupElements";

const Signup = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('http://127.0.0.1:8000/api/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, username, password }),
      });

      if (response.ok) {
        // Handle successful registration
        // For example, you might redirect the user to the login page or show a success message
        // Redirect to login or home page
        window.location.href = '/signin'; // Change as needed
      } else {
        const errorData = await response.json();
        setError(errorData.detail || 'An error occurred');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      setError('An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Contenair>
      <FormWrap>
        <Icon to="/">Home</Icon>
        <FormContent>
          <Form onSubmit={handleSubmit}>
            <FormH1>Sign Up</FormH1>
            {error && <Text style={{ color: 'red' }}>{error}</Text>}
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormInput
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <FormLabel htmlFor="username">Your username</FormLabel>
            <FormInput
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <FormLabel htmlFor="password">Password</FormLabel>
            <FormInput
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <FormButton type="submit" disabled={loading}>
              {loading ? 'Submitting...' : 'Submit'}
            </FormButton>
            <Text>Do you have an account ?</Text>
            <a href="/signin">Click to Login</a>
          </Form>
        </FormContent>
      </FormWrap>
    </Contenair>
  );
};

export default Signup;
