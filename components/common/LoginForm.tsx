import { useSupabaseClient } from '@supabase/auth-helpers-react';
import Image from 'next/image';
import { useState } from 'react';

export default function LoginForm() {
  const signInRedirect = process.env.NEXT_PUBLIC_AUTH_REDIRECT;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newUser, setNewUser] = useState(false);
  const [forgetPassword, setForgotPassword] = useState(false);

  const supabase = useSupabaseClient();

  const signInWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: signInRedirect },
    });
  };

  const signInWithPassword = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
  };

  const signInWithApple = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'apple',
      options: { redirectTo: signInRedirect },
    });
  };

  const resetPassword = async (email: string) => {
    await supabase.auth.resetPasswordForEmail(email);
  };

  if (forgetPassword) {
    return (
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  resetPassword(email);
                }}
                type="submit"
                className="flex w-full justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Reset Password
              </button>
            </div>
            <div
              className="text-sm hover:underline"
              onClick={() => setForgotPassword(false)}
            >
              <p className="font-medium text-blue-600 hover:text-blue-500 cursor-pointer">
                Back to sign in
              </p>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <div className="mb-6 grid grid-rows-2 gap-2">
          <div>
            <div
              onClick={signInWithGoogle}
              className="flex w-full cursor-pointer justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
            >
              <span className="sr-only">Continue with Google</span>
              <div className="relative h-5 w-5 mr-2">
                <Image alt="google" src="/svg/google.svg" layout={'fill'} />
              </div>
              <p>Continue with Google</p>
            </div>
          </div>

          <div>
            <div
              onClick={signInWithApple}
              className="flex w-full cursor-pointer justify-center rounded-md border border-gray-300 bg-black py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-black-800"
            >
              <span className="sr-only">Continue with Apple</span>
              <div className="relative h-5 w-5 mr-2">
                <Image alt="google" src="/svg/apple.svg" layout={'fill'} />
              </div>
              <p>Continue with Apple</p>
            </div>
          </div>
        </div>
        <form className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="mt-1">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <button
              onClick={(e) => {
                e.preventDefault();
                signInWithPassword(email, password);
              }}
              type="submit"
              className="flex w-full justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Sign {newUser ? 'up' : 'in'}
            </button>
          </div>

          <div className="flex-col items-center justify-center">
            {!newUser && (
              <div
                className="text-sm hover:underline"
                onClick={() => setForgotPassword(true)}
              >
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Forgot your password?
                </a>
              </div>
            )}

            <div
              className="text-sm hover:underline"
              onClick={() => setNewUser(!newUser)}
            >
              <a
                href="#"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                {newUser
                  ? 'Already have an account? Sign in'
                  : "Don't have an account? Sign up"}
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
