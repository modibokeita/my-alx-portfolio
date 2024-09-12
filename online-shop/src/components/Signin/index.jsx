import { useState } from 'react';
import { Contenair, Form, FormButton, FormContent, FormH1, FormInput, FormWrap, FormLabel, Icon, Text } from "./SigninElements";

const Signin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('http://127.0.0.1:8000/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        // Save the token to local storage or context
        localStorage.setItem('token', data.token);
        // Redirect to homepage
        window.location.href = '/productsList';
      } else {
        const errorData = await response.json();
        setError(errorData.detail || 'An error occurred');
      }
    } catch (error) {
      console.error('Error during login:', error);
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
            <FormH1>Sign In</FormH1>
            {error && <Text style={{ color: 'red' }}>{error}</Text>}
            <FormLabel htmlFor="username">Username</FormLabel>
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
            <Text>You do not have account yet ?</Text>
            <a href="/signup">Click to Sign Up</a>
          </Form>
        </FormContent>
      </FormWrap>
    </Contenair>
  );
};

export default Signin;
