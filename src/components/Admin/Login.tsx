import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import Button from '../UI/Button';
import toast from 'react-hot-toast';

interface LoginProps {
  onLogin: () => void;
}

export default function Login({ onLogin }: LoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate authentication - replace with actual Firebase auth
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (email === 'admin@signaturebysb.com' && password === 'demo123') {
      toast.success('Welcome back!');
      onLogin();
    } else {
      toast.error('Invalid credentials');
    }
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6 grain">
      <div className="bg-white/5 border border-white/10 backdrop-blur-sm p-12 w-full max-w-md">
        <div className="text-center mb-12">
          <h1 className="text-2xl font-light text-white mb-3 tracking-[0.2em]">SIGNATURE BY SB</h1>
          <p className="text-white/60 font-light text-sm tracking-wide">Admin Portal</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-8">
          <div>
            <label className="block text-white/80 font-light mb-3 text-sm tracking-wide">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent border border-white/20 px-4 py-3 text-white placeholder-white/40 focus:border-white/40 focus:outline-none transition-colors font-light"
              placeholder="admin@signaturebysb.com"
              required
            />
          </div>

          <div>
            <label className="block text-white/80 font-light mb-3 text-sm tracking-wide">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent border border-white/20 px-4 py-3 pr-12 text-white placeholder-white/40 focus:border-white/40 focus:outline-none transition-colors font-light"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/40 hover:text-white/70"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <Button 
            type="submit" 
            size="lg" 
            disabled={isLoading}
            className="w-full"
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-2 border-black border-t-transparent" />
                Signing In...
              </>
            ) : (
              'Sign In'
            )}
          </Button>
        </form>

        <div className="mt-12 p-6 bg-white/5 border border-white/10">
          <p className="text-white/60 text-sm mb-3 font-light">Demo Credentials:</p>
          <p className="text-white text-sm font-light">Email: admin@signaturebysb.com</p>
          <p className="text-white text-sm font-light">Password: demo123</p>
        </div>
      </div>
    </div>
  );
}