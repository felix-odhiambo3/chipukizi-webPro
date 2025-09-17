import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext.jsx';
import { Button } from '@/components/ui/button.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Label } from '@/components/ui/label.jsx';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setMessage('');
    setLoading(true);

    try {
      const user = await login({ email, password });
      setMessage('Login successful');
      setMessageType('success');
      if (user.roles.some(role => role.name === 'admin')) {
        navigate('/admin');
      } else {
        navigate('/user');
      }
      // Clear form state after redirect
      setEmail('');
      setPassword('');
    } catch (error) {
      setMessage(error.message || 'Login failed');
      setMessageType('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
      {loading && <div className="mb-4 text-blue-600">Please wait, logging you in...</div>}
      {message && (
        <div className={`mb-4 ${messageType === 'success' ? 'text-green-600' : 'text-red-600'}`}>
          {message}
        </div>
      )}
      {error && <div className="mb-4 text-red-600">{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoFocus
            disabled={loading}
          />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={loading}
          />
        </div>
        <Button type="submit" className="w-full" disabled={loading}>Log In</Button>
      </form>
      <div className="mt-4 text-center">
        <Link to="/register" className="text-purple-600 hover:underline">
          Create an account
        </Link>
      </div>
    </div>
  );
};

export default Login;
